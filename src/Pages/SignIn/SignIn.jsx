import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './Signin.module.scss';

function SignIn() {
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const matchedUser = users.find(user => user.username === input && user.password === password);

        if (matchedUser) {
            alert("Đăng Nhập Thành Công");
            navigate("/");
        } else {
            alert("Sai tài khoản hoặc mật khẩu!");
        }
    };
    const handleSignUp = () => {
        navigate("/signup");
    };


    return (
        <div className={style.wrapper}>
            <div className={style.box}>
                <form className={style.form} onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
                    <h2 className={style.title}>Đăng Nhập</h2>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Tài khoản"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <input
                        className={style.input}
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className={style.btnSignIn}>Đăng Nhập</button>
                    <button type="button" className={style.btnCheckOut} onClick={handleSignUp} >Đăng Ký</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
