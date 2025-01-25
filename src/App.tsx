import DashboardLayout from './layout/dashboard-layout';
import Home from './pages/home';
import LandingPage from './pages/landing';
import { BrowserRouter, Route, Routes } from 'react-router';
import SearchPage from './pages/search';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />

                <Route element={<DashboardLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/player" element={<Home />} />
                    <Route path="/search" element={<SearchPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
