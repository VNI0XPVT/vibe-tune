import { useState, useRef, useEffect } from 'react';
import songs from '../data/songs';
import { getRandomIndex } from '../lib/utils';

type Song = (typeof songs)[number];

type PlayerState = {
    isPlaying: boolean;
    isShuffle: boolean;
    isRepeat: boolean;
    isReady: boolean;
    volume: typeof HTMLMediaElement.prototype.volume;
    progress: typeof HTMLMediaElement.prototype.currentTime;

    playlist: Song[];
    currentSong: Song | null;
};

const defaultPlayerState: PlayerState = {
    isPlaying: false,
    volume: 1,
    isShuffle: false,
    isRepeat: false,
    progress: 0,
    isReady: false,
    playlist: songs.slice(0, 20),
    currentSong: songs[getRandomIndex(0, 20)],
};

const useMusicPlayer = () => {
    const [state, setState] = useState<PlayerState>(defaultPlayerState);

    const audioRef = useRef<HTMLAudioElement>(new Audio());
    const audio = audioRef.current;

    const updateState = (updates: Partial<PlayerState>) => setState(prev => ({ ...prev, ...updates }));

    useEffect(() => {
        if (state.isPlaying) audio.play();
    }, [state.currentSong]);

    const playbackControls = {
        togglePlayPause: () => {
            if (!state.currentSong) return;
            state.isPlaying ? audio.pause() : audio.play();
            updateState({ isPlaying: !state.isPlaying });
        },

        playSong: (song: Song) => {
            updateState({ currentSong: song, progress: 0, isPlaying: true });
        },

        toggleShuffle: () => updateState({ isShuffle: !state.isShuffle }),
        toggleRepeat: () => updateState({ isRepeat: !state.isRepeat }),
        handleSeek: (value: number) => {
            if (!audioRef.current) return;
            audioRef.current.currentTime = value;
            updateState({ progress: value });
        },

        playNext: () => {
            if (!state.currentSong || !state.playlist.length) return;
            const currentIndex = state.playlist.findIndex(song => song.id === state.currentSong?.id);

            const nextIndex = state.isShuffle
                ? getRandomIndex(currentIndex, state.playlist.length)
                : (currentIndex + 1) % state.playlist.length;

            updateState({
                currentSong: state.playlist[nextIndex],
                progress: 0,
            });
        },
    };

    const playPrevious = () => {
        if (!state.currentSong) return;

        const currentIndex = state.playlist.findIndex(song => song.id === state.currentSong!.id);

        const prevIndex = (currentIndex - 1 + state.playlist.length) % state.playlist.length;
        setState(prev => ({
            ...prev,
            currentSong: prev.playlist[prevIndex],
            progress: 0,
        }));
    };

    const addToPlaylist = (songs: Song[], replace = true) => {
        setState(prev => ({
            ...prev,
            playlist: replace ? songs : [...prev.playlist, ...songs],
            currentSong: prev.playlist.length === 0 ? songs[0] : prev.currentSong,
        }));
    };

    return {
        playerState: state,
        updatePlayerState: updateState,
        setPlayerState: setState,
        playPrevious,
        addToPlaylist,
        audioRef,

        ...playbackControls,
    };
};

export default useMusicPlayer;
