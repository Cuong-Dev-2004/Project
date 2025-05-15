import React from 'react';
import styles from './Footer.module.scss'

const footerData = {
    companyInfo: {
        title: 'LÀNG GỐM - 800 NĂM TINH HOA NGHỆ THUẬT BÁT TRÀNG',
        address: '20A Lam Sơn, Phường 2, Quận Tân Bình, Thành phố Hồ Chí Minh',
        taxCode: '0317240297',
        email: 'sale@langgom.vn',
        workingHours: 'Thứ Hai - Chủ Nhật / 8:30 - 19:00',
        hotline: '0908.598.850',
        sales: ['0908.598.850', '0935.995.646'],
        complaint: '0908.598.850',
        partnersNote: '0908.598.850 (Bán sỉ & Bán buôn)',
    },
    aboutUs: [
        'Giới thiệu', 'Con người', 'Các giá trị', 'Tin tức', 'Tuyển dụng',
        'Liên hệ', 'Hệ thống cửa hàng', 'F.A.Q',
    ],
    customerSupport: [
        'Chương trình khuyến mãi', 'Chính sách đổi trả', 'Chính sách kiểm hàng',
        'Bảo Mật Thông Tin', 'Bảo hành & Hậu mãi', 'Hướng dẫn sử dụng và bảo quản',
        'Bán hàng trả góp', 'Phương thức thanh toán', 'Giao hàng & Nhận hàng',
        'Nghĩa vụ người bán và khách hàng',
    ],
    siteMap: [
        'Trang chủ', 'Sản phẩm', 'Phòng', 'CỐC TÁCH & BẾP',
        'BỘ ẤM TRÀ', 'LỌ HOA', 'TRANG TRÍ', 'Thiết kế', 'Liên hệ',
    ],
    contact: {
        phone24h: '(+84) 908.59.88.50',
    },
    paymentMethods: [
        'VISA', 'MasterCard', 'JCB', 'napas', 'PayPal', 'TIỀN MẶT', 'INTERNET BANKING', 'TRẢ GÓP 0%',
    ],
    socialMedia: [
        'instagram', 'facebook', 'google-plus', 'twitter', 'youtube'
    ],
    copyright: '© 2025 The Horizon Co., Ltd',
};
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footercontainer} >
                {/* Company Info */}
                <div className={styles.footersection}>
                    <b>{footerData.companyInfo.title}</b>
                    <p><strong>Địa chỉ:</strong> {footerData.companyInfo.address}</p>
                    <p><strong>Mã số thuế:</strong> {footerData.companyInfo.taxCode}</p>
                    <p><strong>Email:</strong> {footerData.companyInfo.email}</p>
                    <p><strong>Giờ làm việc:</strong> {footerData.companyInfo.workingHours}</p>
                    <p><strong>Hotline:</strong> {footerData.companyInfo.hotline}</p>
                    <p><strong>Bán hàng:</strong> {footerData.companyInfo.sales.join(' - ')}</p>
                    <p><strong>Liên hệ, khiếu nại:</strong> {footerData.companyInfo.complaint}</p>
                    <p><strong>Đối tác:</strong> {footerData.companyInfo.partnersNote}</p>
                </div>

                {/* About Us */}
                <div className={styles.footersection}>
                    <b>Về Chúng Tôi</b>
                    <ul>
                        {footerData.aboutUs.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Customer Support */}
                <div className={styles.footersection}>
                    <b>Hỗ Trợ Khách Hàng</b>
                    <ul>
                        {footerData.customerSupport.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Site Map */}
                <div className={styles.footersection}>
                    <b>Site Map</b>
                    <ul>
                        {footerData.siteMap.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className={styles.footersection}>
                    <b>Liên hệ</b>
                    <p>Gọi cho chúng tôi (24/7): <br /><strong>{footerData.contact.phone24h}</strong></p>
                    <h5>Phương thức thanh toán</h5>
                    <ul className="payment-methods">
                        {footerData.paymentMethods.map((method, idx) => (
                            <li key={idx}>{method}</li>
                        ))}
                    </ul>
                    <h5>Tìm chúng tôi tại:</h5>
                    <div className="social-icons">
                        {footerData.socialMedia.map((icon, idx) => (
                            <span key={idx} className={`icon ${icon}`}></span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>{footerData.copyright}</p>
            </div>
        </footer>
    );
}


export default Footer;
