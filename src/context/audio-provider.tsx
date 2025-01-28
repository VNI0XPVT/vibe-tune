import React, { createContext, useContext, useMemo, useCallback } from 'react';
import useMusicPlayer from '../hooks/use-music-player';

type MusicPlayerContextType = ReturnType<typeof useMusicPlayer>;
type AudioEvent = React.SyntheticEvent<HTMLAudioElement, Event>;

const MusicPlayerContext = createContext<MusicPlayerContextType | null>(null);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const musicPlayer = useMusicPlayer();
    const { updatePlayerState, playerState, audioRef } = musicPlayer;

    const contextValue = useMemo(() => musicPlayer, [musicPlayer]);

    const handleReadyState = (e: AudioEvent) => {
        updatePlayerState({ isReady: e.currentTarget.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA });
    };

    const handleTimeUpdate = (e: AudioEvent) => {
        updatePlayerState({ progress: e.currentTarget.currentTime });
    };

    const handlePause = () => updatePlayerState({ isPlaying: false });

    const handleOnEnded = () => {
        if (playerState.isRepeat) musicPlayer.playSong(playerState.currentSong!);
        else musicPlayer.playNext();
    };

    const audioElement = useMemo(() => {
        if (!playerState.currentSong) return null;

        return (
            <audio
                className="hidden"
                ref={audioRef}
                src={playerState.currentSong.src}
                // onPause={handlePause}
                onEnded={handleOnEnded}
                onTimeUpdate={handleTimeUpdate}
                onCanPlay={handleReadyState}
                onCanPlayThrough={handleReadyState}
                onLoadedMetadata={handleReadyState}
                onWaiting={handleReadyState}
                onStalled={handleReadyState}
                onLoadedData={handleReadyState}
                onEmptied={handleReadyState}
                onAbort={handleReadyState}
            />
        );
    }, [playerState.currentSong, audioRef, handleOnEnded, handleTimeUpdate, handleReadyState]);

    return (
        <MusicPlayerContext.Provider value={contextValue}>
            {audioElement}
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
