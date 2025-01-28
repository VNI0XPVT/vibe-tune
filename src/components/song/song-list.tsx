import { Heart, PlayCircle } from 'lucide-react';
import { cn, formatDuration } from '../../lib/utils';
import songs from '../../data/songs-data';
import { useMusicPlayerContext } from '../../context/audio-provider';

type Props = {
    number: number;
    song: (typeof songs)[number];
    withAlbum?: boolean;
};

const SongList = ({ song, number, withAlbum: showAlbum = false }: Props) => {
    const {
        playSong,
        playerState: { currentSong },
    } = useMusicPlayerContext();

    const isCurrentSong = currentSong?.id === song.id;

    const SongWithoutAlbum = () => (
        <>
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
        </>
    );

    return (
        <div
            className={cn(
                'flex justify-between gap-2 md:gap-6 group',
                'text-sm p-2 rounded-md text-muted-foreground hover:bg-muted'
            )}
            onClick={() => playSong(song)}
        >
            <SongWithoutAlbum />
        </div>
    );
};

export default SongList;
