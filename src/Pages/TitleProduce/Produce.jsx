import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Style from './Produce.module.scss';

function Product() {
    const [count, setCount] = useState(1);
    const location = useLocation();
    const { content, Image, text, primry } = location.state || {};

    const increaseCount = () => {
        setCount(prev => prev + 1);
    };

    const decreaseCount = () => {
        setCount(prev => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className={Style.Main}>
            <div className={Style.TitleProduce}>
                {Image && <img src={Image} alt={text} />}
                <div className={Style.Produce}>
                    {text && <h2 className={Style.text}>{text}</h2>}
                    {primry && <p className={Style.primry}>{primry}</p>}
                    {content && <p className={Style.content}>{content}</p>}

                    <div className={Style.btn}>
                        <ul className={Style.wrapper}>
                            <li>Số Lượng :</li>
                            <li>
                                <span onClick={decreaseCount}>-</span>
                                <span>{count}</span>
                                <span onClick={increaseCount}>+</span>
                            </li>
                        </ul>
                    </div>

                    <div className={Style.btn1}>
                        <ul className={Style.wrapper1}>
                            <li>Thêm Vào Giỏ Hàng</li>
                            <li>Mua Ngay</li>
                            <li>Mua Trả Góp</li>
                        </ul>
                        <ul className={Style.wrapper2}>
                            <li>Mua Online</li>
                            <p>Thanh Toán Qua Bảo Kim</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
