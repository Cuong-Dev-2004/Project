import { useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';

const SlideImage = [
    {
        id: 1,
        img: 'http://www.langgom.vn/upload/hinhanh/117120910798421.jpg',
    },
    {
        id: 2,
        img: 'https://i.pinimg.com/736x/9b/2a/96/9b2a96d2b80037c1f26b3af769f9d24a.jpg',
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/22823/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: 4,
        img: 'https://gomsuhoanggia.vn/wp-content/uploads/2024/03/Hinh-anh-nha-co-Van-Van.jpg',
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
