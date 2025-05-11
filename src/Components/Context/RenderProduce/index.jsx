import React from "react";
import styles from './RenderProdure.module.scss'
import { Link } from "react-router-dom";
function RenderUiProduct({ data }) {
    console.log(data)
    return (
        <div className={styles.wrapper}>
            <ul className={styles.List_produce}>
                {
                    data.map((title, index) => (
                        <li key={index} className={styles.item}>
                            <Link to="/products" state={{ content: title.title, Image: title.img, text: title.name, primry: title.Primy }} className={styles.link}>
                                <p className={styles.list_image}>
                                    <img src={title.img} alt="" />
                                    <p className={title.text_Sale}>
                                        {title.Sale}
                                    </p>
                                </p>
                                <p>{title.name}</p>
                                <p className={styles.primry}>
                                    <strike>{title.default_Primy}</strike>
                                    <span>{title.Primy}</span>
                                </p>
                            </Link>

                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default RenderUiProduct;