import React, { createContext, useContext, useEffect } from 'react';
import useMusicPlayer from '../hooks/use-music-player';

type MusicPlayerContextType = ReturnType<typeof useMusicPlayer>;

const MusicPlayerContext = createContext<MusicPlayerContextType | null>(null);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const musicPlayer = useMusicPlayer();

    useEffect(() => {
        const audio = musicPlayer.audioRef.current;
        const updateProgress = () => {
            if (audio && musicPlayer.playerState.currentSong) {
                const progress = audio.currentTime;
                musicPlayer.setPlayerState(prev => ({ ...prev, progress }));
            }
        };

        audio?.addEventListener('timeupdate', updateProgress);
        audio?.addEventListener('ended', musicPlayer.playNext);
        audio?.addEventListener('canplay ', musicPlayer.handleReadyState);
        audio?.addEventListener('canplaythrough', musicPlayer.handleReadyState);

        return () => {
            audio?.removeEventListener('timeupdate', updateProgress);
            audio?.removeEventListener('ended', musicPlayer.playNext);
            audio?.removeEventListener('canplay', musicPlayer.handleReadyState);
            audio?.removeEventListener('canplaythrough', musicPlayer.handleReadyState);
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
    if (!context) throw new Error('useMusicPlayerContext must be used within AudioProvider');
    return context;
};
