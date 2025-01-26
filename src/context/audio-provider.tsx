import React, { createContext, useContext, useEffect, useCallback } from 'react';
import useMusicPlayer from '../hooks/use-music-player';

type MusicPlayerContextType = ReturnType<typeof useMusicPlayer>;

const MusicPlayerContext = createContext<MusicPlayerContextType | null>(null);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const musicPlayer = useMusicPlayer();

    const updateProgress = useCallback(() => {
        const audio = musicPlayer.audioRef.current;
        if (audio && musicPlayer.playerState.currentSong) {
            musicPlayer.setPlayerState(prev => ({ ...prev, progress: audio.currentTime }));
        }
    }, [musicPlayer]);

    const handleReadyStateChange = useCallback(() => {
        const audio = musicPlayer.audioRef.current;

        if (audio) {
            musicPlayer.setPlayerState(prev => ({
                ...prev,
                isReady: audio.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA,
            }));
        }
    }, [musicPlayer]);

    useEffect(() => {
        const audio = musicPlayer.audioRef.current;
        if (!audio) return;

        const eventListeners: { event: keyof HTMLMediaElementEventMap; handler: () => void }[] = [
            { event: 'timeupdate', handler: updateProgress },
            { event: 'ended', handler: musicPlayer.playNext },
            { event: 'canplay', handler: handleReadyStateChange },
            { event: 'canplaythrough', handler: handleReadyStateChange },
            { event: 'loadedmetadata', handler: handleReadyStateChange },
            { event: 'waiting', handler: handleReadyStateChange },
            { event: 'stalled', handler: handleReadyStateChange },
        ];

        eventListeners.forEach(({ event, handler }) => {
            audio.addEventListener(event, handler);
        });

        return () => {
            eventListeners.forEach(({ event, handler }) => {
                audio.removeEventListener(event, handler);
            });
        };
    }, []);

    return (
        <MusicPlayerContext.Provider value={musicPlayer}>
            <audio className="hidden" ref={musicPlayer.audioRef} />
            {children}
        </MusicPlayerContext.Provider>
    );
};

export const useMusicPlayerContext = () => {
    const context = useContext(MusicPlayerContext);
    if (!context) {
        throw new Error('useMusicPlayerContext must be used within AudioProvider');
    }
    return context;
};

export default AudioProvider;
