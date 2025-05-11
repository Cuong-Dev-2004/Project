import { memo } from 'react';
import styles from './HeaderChild_Center.module.scss'

function HeaderChildCenter() {
    console.log("HeaderChildCenter");
    return (
        <div className={styles.headerChildCenter}>
            <div className={styles.headerChildCenter_HeaderMain}>
                <div className={styles.headerChildCenter_left}>
                    <ul>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4A-YQei7R6njR0RSnOcd_KgH6Dkb3oXmuyVCiitMwcAeuTcyX3KLFmZ6sh4TlVugPvB0&usqp=CAU" alt="" />
                    </ul>
                </div>
                <div className={styles.headerChildCenter_Center}>
                    <div className={styles.headerChildCenter_Center_child}>
                        <ul>
                            <li><i className='bx bxs-check-circle'></i></li>
                            <li className={styles.headerChildCenter_Center_child_list}>Docx Chất Lượng</li>
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
                            <li className={styles.headerChildCenter_Center_child_list}>giá Cả Hợp Lý</li>
                            <li>Sản Phẩm Gía rẻ chất lượng</li>
                        </ul>
                    </div>

                </div>


                <div className={styles.headerChildCenter_right}>
                    <ul >
                        <p>
                            <i class='bx bx-shopping-bag'></i>
                            <a href="/">
                                Khóa Học Của tôi
                            </a>
                        </p>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default memo(HeaderChildCenter);