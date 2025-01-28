import { cn } from '../lib/utils';
import Marquee from 'react-fast-marquee';
import { Link, useLocation } from 'react-router';
import { LoaderCircleIcon, Pause, Play } from 'lucide-react';
import { useMusicPlayerContext } from '../context/audio-provider';

type Props = {};

const MiniPlayer = (props: Props) => {
    const { pathname } = useLocation();

    const { playerState, togglePlayPause } = useMusicPlayerContext();
    const { currentSong: song } = playerState;

    if (!song) return <></>;

    return (
        <div className={cn('absolute bottom-0 w-full z-10 p-2 ', pathname === '/player' && 'hidden')}>
            <Link
                to={'/player'}
                className="p-1.5 max-w-[calc(72rem-2rem)] overflow-hidden mx-auto  rounded-md md:rounded-lg relative grid grid-cols-[3rem_1fr_2rem] items-center gap-3 shadow-md bg-card/80 backdrop-blur-md border shadow-background/60"
            >
                <img src={song.image} alt="" className="rounded-lg border " />

                <div className="flex flex-col justify-evenly h-full">
                    <h4 className="md:text-lg line-clamp-1 text-ellipsis">{song.name}</h4>

                    {/* <Marquee gradient={true} gradientColor="red" gradientWidth={10}> */}
                    <p className="text-xs text-muted-foreground line-clamp-1 text-ellipsis">
                        {song.album.name} - {song.artists[0].name}
                    </p>
                    {/* </Marquee> */}
                </div>

                {playerState.isReady && (
                    <button
                        onClick={e => {
                            togglePlayPause();
                            e.preventDefault();
                        }}
                    >
                        {playerState.isPlaying ? <Pause className="size-6" /> : <Play className="size-6" />}
                    </button>
                )}

                {!playerState.isReady && <LoaderCircleIcon className="animate-spin size-6 opacity-50" />}

                <div
                    className="absolute left-0 bottom-0 h-0.5 bg-primary"
                    style={{ width: `${(playerState.progress / song.duration) * 100}%` }}
                ></div>
            </Link>
        </div>
    );
};

export default MiniPlayer;
