import { Heart, PlayCircle } from 'lucide-react';
import { cn, formatDuration } from '../../lib/utils';
import songs from '../../data/songs';
import { useMusicPlayerContext } from '../../context/audio-provider';

type Props = {
    number: number;
    song: (typeof songs)[number];
    showAlbum?: boolean;
};

const SongList = ({ song, number, showAlbum = false }: Props) => {
    const {
        playSong,
        playerState: { currentSong },
    } = useMusicPlayerContext();

    return (
        <div
            className={cn(
                'flex justify-between gap-2 md:gap-6 group',
                'text-sm p-2 rounded-md text-muted-foreground hover:bg-muted',
                // currentSong?.id === song.id && 'bg-muted'
            )}
            onClick={() => playSong(song)}
        >
            <p className="opacity-80 w-4 text-center">
                <span className="group-hover:hidden">{number}</span>
                <span className="hidden group-hover:inline">
                    <PlayCircle className="size-4 md:size-5" />
                </span>
            </p>

            <p className="flex-1 max-md:text-sm font-semibold text-foreground/90">{song.name}</p>
            <p className="flex-1 max-md:hidden text-xs">{song.artists.map(a => a.name).join(', ')}</p>
            <p className="w-5">
                <Heart className="size-4" />
            </p>
            <p className="max-md:text-xs">{formatDuration(song.duration)}</p>
        </div>
    );

    return (
        <div
            className={cn(
                'grid group grid-cols-[1.25rem_1fr_1.5rem_2rem] items-center gap-1.5  text-sm p-2.5 rounded-md text-muted-foreground hover:bg-muted',
                'md:grid-cols-[1.5rem_1fr_1fr_1.5rem_2rem] md:gap-3',
                showAlbum && 'md:grid-cols-[1.5rem_1fr_1fr_1fr_1.5rem_2rem]'
            )}
        >
            <p className="opacity-80">
                <span className="group-hover:hidden">{number}</span>
                <span className="hidden group-hover:inline">
                    <PlayCircle className="size-4 md:size-5" />
                </span>
            </p>
            <p className="max-md:text-sm font-semibold text-foreground/90">{song.name}</p>
            <p className="max-md:hidden text-xs">{song.artists.map(a => a.name).join(', ')}</p>
            <p>
                <Heart className="size-4" />
            </p>
            <p className="max-md:text-xs">{formatDuration(song.duration)}</p>
        </div>
    );
};

export default SongList;
