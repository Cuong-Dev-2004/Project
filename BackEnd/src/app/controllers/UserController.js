const User = require("../../model/User");


const UserController = (req, res) => {
    // GetAllProducts
    GetAllProducts: async (req, res) => {
        try {
            const products = await req.getFind();
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json({ message: "Lỗi Lấy Sản Phẩm" })
        }
    },
}
module.exports = UserController()