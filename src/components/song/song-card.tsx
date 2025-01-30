import songs from '../../data/songs-data';
import { useMusicPlayerContext } from '../../context/audio-provider';
import { cn } from '../../lib/utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Bars } from 'react-loader-spinner';

type Props = {
    song: (typeof songs)[number];
};

const SongCard = ({ song }: Props) => {
    const { playSong } = useMusicPlayerContext();
    const { playerState } = useMusicPlayerContext();

    return (
        <div
            id={song.id}
            onClick={() => playSong(song)}
            className="p-1.5 rounded-md gap-3 flex hover:bg-muted cursor-pointer"
        >
            {/* @ts-ignore */}
            <LazyLoadImage
                className="border rounded-full  size-10 overflow-hidden"
                src={song.image}
                alt={song.name}
                // placeholderSrc="/placeholder.png"
                // effect="black-and-white"
            />

            <div className="flex-1">
                <h3
                    className={cn(
                        'line-clamp-1 text-ellipsis',
                        playerState.currentSong?.id === song.id && 'text-primary'
                    )}
                >
                    {song.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-1 text-ellipsis flex  gap-1 items-center">
                    {playerState.currentSong?.id === song.id && (
                        <Bars color="hsl(var(--muted-foreground))" height={12} width={12} />
                    )}
                    <span className="line-clamp-1 text-ellipsis">
                        {song.album.name} - {song.artists[0].name}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SongCard;
