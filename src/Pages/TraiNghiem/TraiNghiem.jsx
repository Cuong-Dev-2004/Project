import React from 'react';
import style from './TraiNghiem.module.scss';

const ceramicVillages = [
    {
        name: 'Bát Tràng',
        location: 'Hà Nội',
        image: 'https://hnm.1cdn.vn/2022/03/27/hanoimoi.com.vn-uploads-images-trungtruc-2022-03-27-_bat-trang5.jpg'
    },
    {
        name: 'Bầu Trúc',
        location: 'Ninh Thuận',
        image: 'https://www.gomnghethuat.com/wp-content/uploads/phu-lang-lang-gom-co-nhat-viet-nam.jpg'
    },
    {
        name: 'Lư Cấm',
        location: 'Khánh Hòa',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuZlfzS42XoRzw6gpfuTTgjce-xClOG5TKQ&s'
    },
    {
        name: 'Làng Gốm Lái Thiêu',
        location: ' Làng Gốm Bình Dương Nổi Tiếng Hòa',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmlYVTmOo7qUW528sBI4Px9yEt8eTJI8GYg&s'
    },
    {
        name: 'Làng Gốm Thổ Hà',
        location: ' Hà Nội',
        image: 'https://www.gomnghethuat.com/wp-content/uploads/Lai-Thieu-lang-nghe-gom-viet-nam.jpg'
    },
    {
        name: 'Làng gốm Chu Đậu ',
        location: ' Hải Dương',
        image: 'https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/y1-1716004288026.jpg'
    },
    {
        name: 'Làng Gốm Cây Mai',
        location: ' Làng Gốm ở TP. Hồ Chí Mình',
        image: 'https://www.gomnghethuat.com/wp-content/uploads/lang-gom-cay-mai.jpg'
    },
    {
        name: 'Làng Gốm Thanh Hà',
        location: 'Quảng Nam',
        image: 'https://www.gomnghethuat.com/wp-content/uploads/gom-thanh-ha-lang-nghe-gom-viet-nam.jpg'
    },
    {
        name: 'Làng Gốm Phước Tích',
        location: 'Thừa Thiên Huế',
        image: 'https://www.gomnghethuat.com/wp-content/uploads/phuoc-tich-lang-gom-o-viet-nam.jpg'
    },
    {
        name: 'Làng Gốm Vĩnh Long',
        location: 'Vĩnh Long',
        image: 'https://www.gomnghethuat.com/wp-content/uploads/lang-gom-vinh-long-viet-nam.jpg'
    },

];

function CeramicTour() {
    return (
        <div className={style.ceramictour}>
            {/* Danh sách làng gốm */}
            <div className={style.villagelist} >
                {ceramicVillages.map(village => (
                    <div className={style.villagecard} key={village.name}>
                        <img src={village.image} alt={village.name} className={style.villageimage} />
                        <div className={style.villageinfo}  >
                            <h3 className={style.villagename} >{village.name}</h3>
                            <p className={style.villagelocation} >{village.location}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Nút Xem ưu đãi Tour */}
            <button className={style.btnview}>Xem ưu đãi Tour</button>
        </div>
    );
}

export default CeramicTour;
