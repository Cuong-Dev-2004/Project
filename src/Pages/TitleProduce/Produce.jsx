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
            <div className={Style.wrapper3}>

                <ul className={Style.list}>
                    <p className={Style.item}>Người Bán Tiêu Biểu</p>
                    <li>-Sản phẩm: Gốm sứ Bát Tràng Authentic</li>
                    <li>-Địa chỉ: Xóm 1, Bát Tràng, Gia Lâm, Hà Nội </li>
                </ul>
                <ul className={Style.list}>
                    <p className={Style.item}>
                        Giới thiệu sản phẩm
                    </p>
                    <li>
                        -Bình gốm thủ công với hoa văn truyền thống, men màu ngà, được chế tác theo phong cách nghệ thuật dân gian Việt Nam, thường thấy tại làng gốm Bát Tràng. Hoa văn trang trí gồm hoa cúc, lá, và các họa tiết đối xứng, tạo vẻ cổ điển và trang nhã.
                    </li>
                </ul>
                <ul className={Style.list}>
                    <p className={Style.item}>Quy trình chế tác</p>
                    <li>1.Chọn đất sét trắng cao cấp</li>
                    <li>2.Tạo hình bằng tay hoặc bàn xoay</li>
                    <li>3.Chạm khắc hoa văn</li>
                    <li>4.Phơi khô tự nhiên</li>
                    <li>5.
                        Tráng men và nung ở nhiệt độ ~1.200°C</li>
                </ul>
            </div>
        </div>
    );
}

export default Product;
