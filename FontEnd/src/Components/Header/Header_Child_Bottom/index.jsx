
import styles from './HeaderChild_Bottom.module.scss'
import { Link, Navigate } from 'react-router-dom';

function HeaderChildBottom() {

    return (
        <div className={styles.headerChildBottom}>
            <div className={styles.headerChildBottom_container}>
                <div className={styles.headerChildBottom_left}>
                    <ul className={styles.Menu_Left_list}>
                        <Link to="/" className={styles.link}>
                            <li className={styles.item_Menu_Left}>Trang chủ</li>
                        </Link>
                        <Link to="/DatLichKham
">
                            <li to="/" className={styles.item_Menu_Left}>Theo dõi sức khỏe</li>
                        </Link>

                        <Link to="/OpenAi">
                            <li to="/" className={styles.item_Menu_Left}>Bác sĩ ảo</li>
                        </Link>
                        <li to="/" className={styles.item_Menu_Left}>Liên Kết Nhà Thuốc</li>


                        <Link to="/Doctors">
                            <li className={styles.item_Menu_Left}>Doctors</li>
                        </Link>



                    </ul>
                </div>
            </div>
        </div >
    );
}

export default HeaderChildBottom;