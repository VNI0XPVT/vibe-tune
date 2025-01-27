import { useState, useRef, useEffect } from 'react';
import songs from '../data/songs';

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

const useMusicPlayer = () => {
    const [playerState, setPlayerState] = useState<PlayerState>({
        isPlaying: false,
        volume: 0.5,
        isShuffle: false,
        isRepeat: false,
        progress: 0,
        isReady: false,
        playlist: songs.slice(0, 20),
        currentSong: songs[5],
    });

    const audioRef = useRef<HTMLAudioElement>(new Audio());

    useEffect(() => {
        if (!playerState.currentSong) return;
        audioRef.current.src = playerState.currentSong.src;
        if (playerState.isPlaying) audioRef.current.play();
    }, [playerState.currentSong]);

    const togglePlayPause = () => {
        if (!playerState.currentSong) return;

        if (playerState.isPlaying) audioRef.current.pause();
        else audioRef.current.play();
        setPlayerState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
    };

    const playSong = (song: Song) => {
        setPlayerState(prev => ({
            ...prev,
            currentSong: song,
            progress: 0,
            isPlaying: true,
        }));
    };

    const playNext = () => {
        if (!playerState.currentSong) return;

        const currentIndex = playerState.playlist.findIndex(song => song.id === playerState.currentSong!.id);

        const nextIndex = (currentIndex + 1) % playerState.playlist.length;
        setPlayerState(prev => ({
            ...prev,
            currentSong: prev.playlist[nextIndex],
            progress: 0,
        }));
    };

    const playPrevious = () => {
        if (!playerState.currentSong) return;

        const currentIndex = playerState.playlist.findIndex(song => song.id === playerState.currentSong!.id);

        const prevIndex = (currentIndex - 1 + playerState.playlist.length) % playerState.playlist.length;
        setPlayerState(prev => ({
            ...prev,
            currentSong: prev.playlist[prevIndex],
            progress: 0,
        }));
    };

    const addToPlaylist = (songs: Song[], replace = true) => {
        setPlayerState(prev => ({
            ...prev,
            playlist: replace ? songs : [...prev.playlist, ...songs],
            currentSong: prev.playlist.length === 0 ? songs[0] : prev.currentSong,
        }));
    };

    const handleSeek = (value: number) => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = value;
        setPlayerState(prev => ({ ...prev, progress: value }));
    };

    const handleReadyState = () => {
        if (!audioRef.current) return;
        setPlayerState(prev => ({ ...prev, readyState: audioRef.current.readyState }));
        if (audioRef.current.readyState >= 2) setPlayerState(prev => ({ ...prev, isReady: true }));
    };

    return {
        playerState,
        togglePlayPause,
        playSong,
        playNext,
        playPrevious,
        handleSeek,
        addToPlaylist,
        audioRef,
        setPlayerState,
        handleReadyState,
    };
};

export default useMusicPlayer;
