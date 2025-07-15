import styles from './Doctors.module.scss';

function Doctors({ Name, id }) {
    return (
        <div className={styles.Doctors}>
            <div className={styles.Doctors_left}>

            </div>
            <div className={styles.Doctors_right}>
                <p>{Name}</p>
                <p>{id}</p>
            </div>
        </div>
    );
}

export default Doctors;