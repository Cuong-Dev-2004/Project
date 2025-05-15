import { memo, useState } from 'react';
import styles from './HeaderChild_Center.module.scss'

function HeaderChildCenter() {
    const [StringInput, setStringInput] = useState('');
    console.log("HeaderChildCenter");
    return (
        <div className={styles.headerChildCenter}>
            <div className={styles.headerChildCenter_HeaderMain}>
                <div className={styles.headerChildCenter_left}>
                    <ul>
                        <img src="https://i.pinimg.com/736x/78/2b/2d/782b2dbdfc4535a9c0671c876d9e29ca.jpg" alt="" />
                    </ul>
                </div>
                <div className={styles.headerChildCenter_Center}>
                    <div className={styles.headerChildCenter_Center_child}>
                        <ul>
                            <li><i className='bx bxs-check-circle'></i></li>
                            <li className={styles.headerChildCenter_Center_child_list}>Hình Anh </li>
                            <li >Đảm Bảo Chất Lượng và Hiệu Suất</li>
                        </ul>
                    </div>
                    <div className={styles.headerChildCenter_Center_child}>
                        <ul>
                            <li><i class='bx bxs-message-dots' ></i></li>
                            <li className={styles.headerChildCenter_Center_child_list}>Hỗ Trợ 24/7</li>
                            <li>Cam Kết Hỗ Trợ</li>
                        </ul>
                    </div>

                    <div className={styles.headerChildCenter_Center_child}>
                        <ul>
                            <li><i class='bx bxs-data'></i></li>
                            <li className={styles.headerChildCenter_Center_child_list}>Giá Cả Hợp Lý</li>
                            <li>Sản Phẩm Gía rẻ chất lượng</li>
                        </ul>
                    </div>

                </div>


                <div className={styles.headerChildCenter_right}>
                    <ul >
                        <li><input type="text" placeholder='Tìm kiếm Sản Phẩm' value={StringInput} onChange={(e) => { setStringInput(e.target.value) }} /></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default memo(HeaderChildCenter);