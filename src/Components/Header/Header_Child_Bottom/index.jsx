import { useState } from 'react';
import styles from './HeaderChild_Bottom.module.scss'
import { Link } from 'react-router-dom';

function HeaderChildBottom() {

    return (
        <div className={styles.headerChildBottom}>
            <div className={styles.headerChildBottom_container}>
                <div className={styles.headerChildBottom_left}>
                    <ul className={styles.Menu_Left_list}>
                        <Link to="/" className={styles.link}>
                            <li className={styles.item_Menu_Left}>Trang chủ</li>
                        </Link>
                        <li to="/" className={styles.item_Menu_Left}>Sản phẩm</li>
                        <Link to="/DangKyKhoaHoc">
                            <li to="/" className={styles.item_Menu_Left}>Khóa Học </li>
                        </Link>

                        <li to="/" className={styles.item_Menu_Left}><a href="https://www.figma.com/board/WPu4e25Us5hPMgPlGZXHfi/Untitled?node-id=0-1&p=f&t=S6XYm8uj9ojGtexo-0" target="_blank">Cá Nhân Hóa </a></li>
                        <Link to="/TraiNghiem">
                            <li to="/" className={styles.item_Menu_Left}>Trải Nghiệm</li></Link>

                        <li to="/" className={styles.item_Menu_Left}>Liên Hệ </li>
                    </ul>
                </div>

                {/* <div className={styles.headerChildBottom_right}>
                    <ul className={styles.Menu_Righ}>
                        <li><input type="text" placeholder='Tìm kiếm Sản Phẩm' value={StringInput} onChange={(e) => { setStringInput(e.target.value) }} /></li>
                        <li><i class='bx bx-search'></i></li>
                    </ul>
                </div> */}
            </div>
        </div >
    );
}

export default HeaderChildBottom;