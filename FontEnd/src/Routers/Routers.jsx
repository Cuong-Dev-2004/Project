import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/layout.jsx';
import HomePage from '../Pages/HomePage/HomePage.jsx';
import { PageMain } from '../Constants/index.jsx';
import SignIn from '../Pages/SignIn/SignIn.jsx';
import SignUp from '../Pages/Đăng Ký/dangky.jsx';
import HealthNotes from '../Pages/HealthNotes/HealthNotes.jsx';
import OpenAi from '../Pages/OpenAi/index.jsx';
import WebsiteDocter from '../Pages/WebsiteDocter/index.jsx';

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path={PageMain} element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="SignIn" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="DatLichKham" element={<HealthNotes />} />
                    <Route path="OpenAi" element={<OpenAi />} />
                    <Route path="Doctors" element={<WebsiteDocter />} />

                </Route>
            </Routes>
        </Router>
    );
}

export default Routers;
