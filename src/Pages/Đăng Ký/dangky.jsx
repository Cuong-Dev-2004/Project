import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './DangKy.module.scss';

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = () => {
        if (username.trim() && password.trim()) {
            const users = JSON.parse(localStorage.getItem("users")) || [];

            const exists = users.find(user => user.username === username);
            if (exists) {
                alert("Tài khoản đã tồn tại!");
                return;
            }

            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Đăng ký thành công!");
            navigate("/signin");
        } else {
            alert("Vui lòng nhập đầy đủ thông tin!");
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.box}>
                <form className={style.form} onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                    <h2 className={style.title}>Đăng Ký</h2>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Tài khoản"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className={style.input}
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className={style.btnSignIn}>Đăng Ký</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
