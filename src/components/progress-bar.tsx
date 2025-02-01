import { useMusicPlayerContext } from '@/context/audio-provider';
import { formatDuration } from '@/lib/utils';
import { Slider } from './ui/slider';

const ProgressBar = () => {
    const { playerState, handleSeek } = useMusicPlayerContext();
    const { currentSong: song } = playerState;

    return (
        <div>
            <Slider
                value={[playerState.progress]}
                max={song!.duration}
                step={1}
                onValueChange={value => handleSeek(value[0])}
            />

            <div className="flex text-xs md:text-sm justify-between items-center mt-1.5 md:mt-2 text-muted-foreground">
                <span>{formatDuration(playerState.progress)}</span>
                <span>{formatDuration(song!.duration)}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
