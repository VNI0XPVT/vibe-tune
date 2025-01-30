import DashboardLayout from './layout/dashboard-layout';
import Home from './pages/home';
import LandingPage from './pages/landing';
import { BrowserRouter, Route, Routes } from 'react-router';
import SearchPage from './pages/search';
import Albums from './pages/albums';
import Album from './pages/album';
import Player from './pages/player';
import QueuePage from './pages/queue';
import ArtistPage from './pages/artist';
import { Toaster } from 'react-hot-toast';
import AudioProvider from './context/audio-provider';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {
    return (
        <AudioProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<LandingPage />} />

                    <Route element={<DashboardLayout />}>
                        <Route path="home" element={<Home />} />
                        <Route path="search" element={<SearchPage />} />
                        <Route path="artists/:id" element={<ArtistPage />} />
                        <Route path="albums" element={<Albums />} />
                        <Route path="albums/:id" element={<Album />} />

                        <Route path="queue" element={<QueuePage />} />

                        <Route path="player" element={<Player />} />
                    </Route>
                </Routes>
                <Toaster />
            </BrowserRouter>
        </AudioProvider>
    );
}

export default App;

// import { lazy, Suspense } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router';
// import { Toaster } from 'react-hot-toast';
// import AudioProvider from './context/audio-provider';

// const DashboardLayout = lazy(() => import('./layout/dashboard-layout'));
// const Home = lazy(() => import('./pages/home'));
// const LandingPage = lazy(() => import('./pages/landing'));
// const SearchPage = lazy(() => import('./pages/search'));
// const Albums = lazy(() => import('./pages/albums'));
// const Album = lazy(() => import('./pages/album'));
// const Player = lazy(() => import('./pages/player'));
// const QueuePage = lazy(() => import('./pages/queue'));
// const ArtistPage = lazy(() => import('./pages/artist'));

// function App() {
//     return (
//         <AudioProvider>
//             <BrowserRouter>
//                 <Suspense fallback={<div>Loading...</div>}>
//                     <Routes>
//                         <Route index element={<LandingPage />} />
//                         <Route element={<DashboardLayout />}>
//                             <Route path="home" element={<Home />} />
//                             <Route path="search" element={<SearchPage />} />
//                             <Route path="artists/:id" element={<ArtistPage />} />
//                             <Route path="albums" element={<Albums />} />
//                             <Route path="albums/:id" element={<Album />} />
//                             <Route path="queue" element={<QueuePage />} />
//                             <Route path="player" element={<Player />} />
//                         </Route>
//                     </Routes>
//                 </Suspense>
//                 <Toaster />
//             </BrowserRouter>
//         </AudioProvider>
//     );
// }

// export default App;
