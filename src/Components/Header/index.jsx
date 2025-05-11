import styles from './Header.module.scss'
import HeaderChildTop from './Header_Child_Top/index.jsx'
import HeaderChildBottom from './Header_Child_Bottom/index.jsx'
import HeaderChildCenter from './Header_Child_Center/index.jsx'
function Header() {
    return (
        <div className={styles.header} >
            <HeaderChildTop />
            <HeaderChildCenter />
            <HeaderChildBottom />
        </div>
    );
}

export default Header;