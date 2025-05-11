import React from 'react';
import styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.imga}>
                {/* <li>
                    <img src="https://anhngumb.com/wp-content/uploads/2023/02/LogoMrBien-_banner-light.png" alt="" />
                </li> */}
            </div>
            <div className={styles.box_footer}>

                <ul className={styles.box_infomation}>
                    <li className={styles.title_infomation}>
                        Liên Hệ
                    </li>
                </ul>
                <ul className={styles.box_infomation}>
                    <li className={styles.title_infomation}>
                        FACEBOOK
                    </li>
                </ul>
                <ul className={styles.box_infomation}>
                    <li className={styles.title_infomation}>
                        <p>CS1: 23 Nguyễn Văn Linh, Thanh Khê, Đà Nẵng</p>
                        <p>CS2: Đào Duy Anh, Thanh Khê, Đà Nẵng</p>
                        <p>CS3: Bàu Trảng 7, Thanh Khê, Đà Nẵng</p>
                        <p>(+84) 090 123 2333 </p>
                        <p>abc.edu@gmail.com</p>
                    </li>
                </ul>
                <ul className={styles.box_infomation}>
                    <li className={styles.title_infomation}>
                        Zalo
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
