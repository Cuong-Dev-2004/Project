import React from "react";
import styles from './Sale.module.scss'

function ContextSale({ title, data }) {
    console.log(data)
    return (
        <div className={styles.Wrapper}>
            <div className={styles._Infomation_Left}>
                <p className={styles.Name}>
                    {title}
                </p>
            </div>
            <div className={styles._Infomation_Right}>
                <select className={styles.select} name="select">
                    {
                        data.map((text, index) => (
                            <option key={index} value={text.Name}>{text.Name}</option>
                        ))
                    }
                </select>
            </div>
        </div>

    );
}

export default ContextSale;