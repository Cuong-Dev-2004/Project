import styles from './Sidebar.module.scss'

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.box_sidebar}>
                <div className={styles.box_sidebar_left}>
                    <p className={styles.All}>
                        Danh Mục
                    </p>
                    <span></span>
                    <ul className={styles.Menu_Item_Left}>
                        <li className={styles.Item}> <span>*</span> <a href="">Luyện Thi IELTS</a></li>
                        <li className={styles.Item}> <span>*</span> <a href="">Luyện Thi IELTS</a></li>
                        <li className={styles.Item}> <span>*</span> <a href="">Luyện Thi IELTS</a></li>
                        <li className={styles.Item}> <span>*</span> <a href="">Luyện Thi IELTS</a></li>
                        <li className={styles.Item}> <span>*</span> <a href="">Luyện Thi IELTS</a></li>
                        <li className={styles.Item}> <span>*</span> <a href="">Luyện Thi IELTS</a></li>
                        <li className={styles.Item}> <span>*</span> <a href="">Luyện Thi IELTS</a></li>
                    </ul>
                </div>
                <div className={styles.box_sidebar_Right}>
                    <img src="https://tiki.vn/blog/wp-content/uploads/2023/01/khoa-hoc-tieng-anh-online-1.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;