import React from 'react';
import style from './HealthNotes.module.scss';


function HealthNotes() {
    return (
        <div className={style.HealthNotes
        }>
            {/* Tình Trạng Sức Khỏe Từng Ngày */}
            <div className={style.villagelist} >
                <p>Tình Trạng Sức Khỏe Từng Ngày</p>
            </div>

            {/* Save Tình Trạng Sức Khỏe*/}
            <button className={style.btnview}>Save Tình Trạng Sức Khỏe</button>
        </div>
    );
}

export default HealthNotes;
