import DashboardLayout from './layout/dashboard-layout';
import Home from './pages/home';
import LandingPage from './pages/landing';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />

                <Route element={<DashboardLayout />}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
