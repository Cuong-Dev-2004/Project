import { useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';

const SlideImage = [
    {
        id: 1,
        img: 'http://www.langgom.vn/upload/hinhanh/117120910798421.jpg',
    },
    {
        id: 2,
        img: 'https://i2.ex-cdn.com/crystalbay.com/files/content/2024/10/14/lang-gom-go-binh-duc-kham-pha-lang-gom-cham-co-o-binh-thuan-4-1132.jpg',
    },
    {
        id: 3,
        img: 'http://www.langgom.vn/upload/hinhanh/117120910798421.jpg',
    },
    {
        id: 4,
        img: 'http://www.langgom.vn/thumb.php?src=upload/product/7-8525.jpg&w=400&h=400&zc=2&q=80',
    },
];

function Sidebar() {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setKey((prevKey) => (prevKey + 1) % SlideImage.length);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [key]);

    return (
        <div className={styles.sidebar}>
            <div className={styles.box_sidebar}>
                <div className={styles.SlideImages}>
                    <img
                        key={SlideImage[key].id}
                        className={styles.Image}
                        src={SlideImage[key].img}
                        alt={`Slide ${SlideImage[key].id}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
