const bcrypt = require('bcrypt');
const jsw = require("jsonwebtoken")
const User = require("../../model/User");


const AuthController = {
    RegisterUser: async (req, res) => {
        try {
            const { username, email, password, sex, address } = req.body;

            if (!username || !email || !password) {
                return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPw = await bcrypt.hash(password, salt);

            const newUser = new User({
                username,
                email,
                password: hashedPw,
                sex,
                address
            });

            const user = await newUser.save();

            const { password: pw, ...others } = user._doc;
            res.status(201).json(others);
        } catch (error) {
            console.error("Lỗi đăng ký:", error);
            res.status(500).json({ message: "Lỗi server", error: error.message });
        }
    },
    // GenerateNewAccessToken 
    GenerateNewAccessToken: (user) => {
        return jsw.sign({
            id: user.id,
            role: user.role,

        }, process.env.JWT_Access_KEY, { expiresIn: "30d" });
    },
    // Generate New Refresh Token
    GenerateNewRefreshToken: (user) => {
        return jsw.sign({
            id: user.id,
            role: user.role,

        }, process.env.JWT_REFRESH_KEY, { expiresIn: "30d" });
    },

    LoginUser: async (req, res) => {
        try {
            if (req.body.username == "" || req.body.password == "") {
                return res.status(400).json("Input Not Valiable");
            }
            else {
                const user = await User.findOne({ username: req.body.username })
                if (!user) {
                    return res.status(401).json("User not Found");
                }
                const isPassword = bcrypt.compareSync(req.body.password, user.password);
                if (!isPassword) {
                    return res.status(400).json("Wrong password");
                }
                const AccessToken = await AuthController.GenerateNewAccessToken(user);
                const RefreshToken = await AuthController.GenerateNewRefreshToken(user);
                res.cookie("RefreshToken", RefreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    sameSite: "strict",
                });
                const { password, ...others } = user;
                res.status(200).json({ ...others, AccessToken, RefreshToken });

            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // REFRESH TOKEN
    RefreshToken: async (req, res) => {
        const refreshToken = req.cookies.RefreshToken;

        if (!refreshToken) {
            return res.status(401).json("You are not authenticated");
        }

        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid");
        }
        try {
            jsonwebtoken.verify(refreshToken, process.env.JWT_REFRESH_KEY, async (err, decodedUser) => {
                if (err) {
                    return res.status(403).json("Refresh token is not valid");
                }

                const user = await User.findById(decodedUser.id);
                if (!user) return res.status(404).json("User not found");

                refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

                const newAccessToken = authControllers.GenerateNewAccessToken(user);
                const newRefreshToken = authControllers.GenerateNewrefreshToken(user);

                refreshTokens.push(newRefreshToken);

                res.cookie("RefreshToken", newRefreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    sameSite: "strict"
                });

                res.status(200).json({ AccessToken: newAccessToken });
            });
        } catch (error) {
            return res.status(500).json("Internal server error");

        }
    },
    LogOutUser: async (req, res) => {
        res.clearCookie("RefreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.RefreshToken);
        res.status(200).json("Logged out successfully");
    }
}
module.exports = AuthController;
