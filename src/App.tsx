import DashboardLayout from './layout/dashboard-layout';
import Home from './pages/home';
import LandingPage from './pages/landing';
import { BrowserRouter, Route, Routes } from 'react-router';
import SearchPage from './pages/search';
import Albums from './pages/albums';
import Album from './pages/album';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />

                <Route element={<DashboardLayout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="player" element={<Home />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="albums" element={<Albums />}/>
                    <Route path="albums/:id" element={<Album />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
