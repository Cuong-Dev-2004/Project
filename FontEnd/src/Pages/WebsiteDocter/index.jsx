import styles from './WebsiteDocter.module.scss';
import Doctors from "../../Components/UI/Doctors/index"
function WebsiteDocter() {
    return (
        <div className={styles.wrapper}>
            <p>Check</p>
            <Doctors Name="Cường" id="1" />
        </div>
    );
}

export default WebsiteDocter;