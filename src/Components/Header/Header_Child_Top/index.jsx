import { Link, useNavigate } from 'react-router-dom';
import styles from './HeaderChild_Top.module.scss';

function HeaderChildTop() {
    const navigate = useNavigate();

    const usersRaw = localStorage.getItem("users");
    const users = usersRaw ? JSON.parse(usersRaw) : null;
    const Account = users && users.length > 0 ? users[0].username : null;

    const handleLogout = () => {
        localStorage.removeItem("users");
    };

    return (
        <div className={styles.headerChildTop}>
            <ul className={styles.headerChildTop_left}>
                <li><a href="#">Cửa hàng</a></li>
                <li><a href="#">Liên hệ: 0908598850</a></li>
                <li><a href="#">Giới thiệu</a></li>
                <li><a href="#">Hỗ trợ</a></li>
            </ul>
            <ul className={styles.headerChildTop_right}>
                {Account ? (
                    <>
                        <li><i className='bx bx-user'></i><span>{Account}</span></li>
                        <li onClick={handleLogout} style={{ cursor: 'pointer' }}>
                            <i className='bx bx-exit'></i> Thoát Ra
                        </li>
                    </>
                ) : (
                    <>
                        <Link to='/SignIn'><li><i className='bx bx-user'></i> Đăng Nhập</li></Link>
                        <Link to='/signup'><li><i className='bx bx-log-in'></i> Đăng Ký</li></Link>
                    </>
                )}
            </ul>
        </div>
    );
}

export default HeaderChildTop;
