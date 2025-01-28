import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AudioProvider } from './context/audio-provider.tsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AudioProvider>
            <App />
            <Toaster />
        </AudioProvider>
    </StrictMode>
);
