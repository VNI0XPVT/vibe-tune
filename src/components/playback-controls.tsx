import { Button } from './ui/button';
import {
    FastForwardIcon,
    LoaderCircleIcon,
    PauseIcon,
    PlayIcon,
    RepeatIcon,
    ShuffleIcon,
    SkipBackIcon,
    SkipForwardIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMusicPlayerContext } from '@/context/audio-provider';

const PlaybackControls = () => {
    const {
        playerState,
        togglePlayPause,
        toggleShuffle,
        toggleRepeat,
        playNext,
        playPrevious,
        seekBackward,
        seekForward,
    } = useMusicPlayerContext();

    return (
        <div className="flex justify-between items-center gap-1">
            <Button size={'icon'} variant={'link'} onClick={toggleShuffle}>
                <ShuffleIcon className={cn(playerState.isShuffle ? 'text-primary' : 'text-muted-foreground')} />
            </Button>
            <div className="flex items-center justify-center gap-1 md:gap-8">
                <Button size={'icon'} variant={'ghost'} onClick={playPrevious}>
                    <SkipBackIcon className="" />
                </Button>

                <Button size={'icon'} variant={'ghost'} onClick={seekBackward}>
                    <FastForwardIcon className="rotate-180" />
                </Button>

                <Button
                    size={'icon'}
                    variant={'default'}
                    onClick={togglePlayPause}
                    className="rounded-full p-5 mx-2"
                    disabled={!playerState.isReady}
                >
                    {playerState.isReady && playerState.isPlaying && <PauseIcon className="md:size-6 " />}
                    {playerState.isReady && !playerState.isPlaying && <PlayIcon className="md:size-6 " />}
                    {!playerState.isReady && <LoaderCircleIcon className="md:size-6 animate-spin" />}
                </Button>

                <Button size={'icon'} variant={'ghost'} onClick={seekForward}>
                    <FastForwardIcon className="rotate-0" />
                </Button>
                <Button size={'icon'} variant={'ghost'} onClick={playNext}>
                    <SkipForwardIcon className="size-5" />
                </Button>
            </div>
            <Button size={'icon'} variant={'link'} onClick={toggleRepeat}>
                <RepeatIcon className={cn(playerState.isRepeat ? 'text-primary' : 'text-muted-foreground')} />
            </Button>
        </div>
    );
};

export default PlaybackControls;
