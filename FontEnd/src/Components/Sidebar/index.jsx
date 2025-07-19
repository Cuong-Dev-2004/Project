import { useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';

const SlideImage = [
    {
        id: 1,
        img: 'https://umcclinic.com.vn/Data/Sites/1/Banner/02.-hh_pc_option2.png',
    },
    {
        id: 2,
        img: 'https://umcclinic.com.vn/Data/Sites/1/Banner/banner-slide-website-3-3-2025-website.jpg',
    },
    {
        id: 3,
        img: 'https://umcclinic.com.vn/Data/Sites/1/Banner/banner-slide-website-3-3-2025-website.jpg',
    },
    {
        id: 4,
        img: 'https://umcclinic.com.vn/Data/Sites/1/Banner/banner-slide-website-3-3-2025-website.jpg',
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
