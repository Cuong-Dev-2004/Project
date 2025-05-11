import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/layout';
import HomePage from '../Pages/HomePage/HomePage';
import Products from '../Pages/TitleProduce/Produce';
import { PageMain } from '../Constants/index.jsx';
import SignIn from '../Pages/SignIn/SignIn.jsx';
import SignUp from '../Pages/Đăng Ký/dangky.jsx';

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path={PageMain} element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="products" element={<Products />} />
                    <Route path="SignIn" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />

                </Route>
            </Routes>
        </Router>
    );
}

export default Routers;
