import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import './layout.scss';

function Layout() {
    const location = useLocation();

    const hideSidebar = location.pathname === '/SignIn' || location.pathname === '/signup' || location.pathname === "/DatLichKham" || location.pathname === "/OpenAi" || location.pathname === "/Doctors";

    return (
        <div className="main-layout">
            <Header />
            <div className="main-layout-content">
                {!hideSidebar && <Sidebar />}
                <div className="content-area">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;