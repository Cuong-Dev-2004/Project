import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/layout';
import HomePage from '../Pages/HomePage/HomePage';
import { PageMain } from '../Constants/index.jsx';

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path={PageMain} element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default Routers;
