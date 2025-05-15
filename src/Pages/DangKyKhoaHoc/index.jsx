import React, { useState } from 'react';
import style from './DangKyKhoaHoc.module.scss';

function CourseRegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Vui lòng nhập tên';
        if (!formData.email || !formData.email.includes('@')) newErrors.email = 'Email không hợp lệ';
        if (!formData.phone || formData.phone.length < 9) newErrors.phone = 'Số điện thoại không hợp lệ';
        if (!formData.course) newErrors.course = 'Vui lòng chọn khóa học';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Đã đăng ký:', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', course: '' });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className={style.heading}>
            <div className={style.sregistrationform}>
                <h2>Đăng ký khóa học</h2>
                {submitted && <p className={style.success}>Đăng ký thành công!</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Họ và Tên</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className={style.error}>{errors.name}</span>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className={style.error}>{errors.email}</span>}
                    </div>
                    <div>
                        <label>Số điện thoại</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <span className={style.error}>{errors.phone}</span>}
                    </div>
                    <div>
                        <label>Chọn khóa học</label>
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                        >
                            <option value="">-- Chọn khóa học --</option>
                            <option value="react">Gói Cơ Bản</option>
                            <option value="node">Gói Nâng Cao </option>
                        </select>
                        {errors.course && <span className={style.error}>{errors.course}</span>}
                    </div>
                    <button type="submit">Đăng ký</button>
                </form>
            </div>
        </div>
    );
}

export default CourseRegistrationForm;
