import styles from './HeaderChild_Top.module.scss'

function HeaderChildTop() {
    console.log("HeaderChildTop");
    return (
        <div className={styles.headerChildTop}>
            <ul className={styles.headerChildTop_left}>
                <li><a href="">Hotline: 0909090909</a></li>
                <li><a href="">Địa Chỉ: 136 Tôn Đức Thắng, Hà Nội</a></li>
            </ul>
            <ul className={styles.headerChildTop_right}>
                <li><i className='bx bx-user'></i><a href="">Admin (ad:08)</a></li>
                <li><i className='bx bx-exit'></i><a href=""> ĐăngXuất</a></li>
            </ul>
        </div>
    );
}

export default HeaderChildTop;