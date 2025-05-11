import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import './layout.scss';

function Layout() {
    return (
        <div className="main-layout">
            <Header />
            <div className="main-layout-content">
                <Sidebar />
                <div className="content-area">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;