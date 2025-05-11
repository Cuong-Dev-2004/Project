import React from 'react';
import Style from './HomePage.module.scss'
import { infomation, Products } from '../../Api/Products.tsx';
import Context from '../../Components/Context/index.tsx';

function HomePage() {

    return (
        <div className={Style.HomePage}>
            <div className={Style.box}>
                <div className={Style.Context}>
                    <Context title={"Sản phẩm Bán Chạy"} data={infomation[0].Menu} dataProcedure={Products}></Context>
                    <Context title={"Uư Đãi Hàng Ngày "} data={infomation[1].Menu} dataProcedure={Products}></Context>
                </div>

            </div>
        </div>
    );
}

export default HomePage;