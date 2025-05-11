import { useState } from 'react';
import styles from './HeaderChild_Bottom.module.scss'

function HeaderChildBottom() {
    const [StringInput, setStringInput] = useState('');
    return (
        <div className={styles.headerChildBottom}>
            <div className={styles.headerChildBottom_container}>
                <div className={styles.headerChildBottom_left}>
                    <ul className={styles.Menu_Left_list}>
                        <li className={styles.item_Menu_Left}>Trang chủ</li>
                        <li className={styles.item_Menu_Left}>Giới thiệu</li>
                        <li className={styles.item_Menu_Left}>Sản phẩm</li>
                        <li className={styles.item_Menu_Left}>Tin tức</li>
                        <li className={styles.item_Menu_Left}>Liên hệ</li>
                        <li className={styles.item_Menu_Left}>Hỗ trợ</li>
                    </ul>
                </div>

                <div className={styles.headerChildBottom_right}>
                    <ul className={styles.Menu_Righ}>
                        <li><input type="text" placeholder='Tìm kiếm Sản Phẩm' value={StringInput} onChange={(e) => { setStringInput(e.target.value) }} /></li>
                        <li><i class='bx bx-search'></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderChildBottom;