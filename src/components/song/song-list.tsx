import { Heart, ListPlusIcon, MinusCircleIcon, PlayCircle, PlusCircle } from 'lucide-react';
import { cn, formatDuration } from '../../lib/utils';
import songs from '../../data/songs-data';
import { useMusicPlayerContext } from '../../context/audio-provider';

type Props = {
    number?: number;
    song: (typeof songs)[number];
    showAlbum?: boolean;
    showArtist?: boolean;
};

const SongList = ({ song, number, showAlbum = false }: Props) => {
    const {
        playSong,
        playerState: { currentSong, playlist },
        addToPlaylist,
        removeFromPlaylist,
    } = useMusicPlayerContext();

    const isCurrentSong = currentSong?.id === song.id;
    const isInPlaylist = playlist.some(s => s.id === song.id);

    const Artist = () => (
        <p className="flex-1 max-md:hidden text-xs line-clamp-1 text-ellipsis">
            {song.artists.map(a => a.name).join(', ')}
        </p>
    );

    const QueueBtn = () => (
        <p
            role="button"
            className="w-6 transition-all duration-300 text-foreground"
            title={isInPlaylist ? 'Remove from Playlist' : 'Add to Playlist'}
            onClick={e => {
                if (isInPlaylist) removeFromPlaylist(song);
                else addToPlaylist([song]);
                e.stopPropagation();
            }}
        >
            {isInPlaylist ? (
                <MinusCircleIcon className="size-4 md:size-5 opacity-20 group-hover:opacity-100  group-hover:text-red-500" />
            ) : (
                <PlusCircle className="size-4 md:size-5 opacity-20 group-hover:opacity-100  group-hover:text-green-500" />
            )}
        </p>
    );

    const Duration = () => <p className="text-xs md:text-sm pr-1">{formatDuration(song.duration)}</p>;

    const SongWithoutAlbum = () => (
        <>
            <p className="opacity-80 w-4 text-center">
                {number && <span className="group-hover:hidden">{number}</span>}
                <span className="hidden group-hover:inline">
                    <PlayCircle className="size-5 md:size-5" />
                </span>
            </p>

            <p className="flex-1 max-md:text-sm font-semibold text-foreground/90">{song.name}</p>
            <Artist />
            <QueueBtn />
            <Duration />
        </>
    );

    const SongWithAlbum = () => (
        <>
            <img src={song.image} className="border rounded-md size-11 md:size-11 " />

            <div className="flex-1 flex flex-col justify-evenly">
                <h4 className="font-semibold text-foreground/90 line-clamp-1 text-ellipsis">{song.name}</h4>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-1 text-ellipsis">{song.album.name}</p>
            </div>

            <Artist />
            <QueueBtn />
            <Duration />
        </>
    );

    return (
        <div
            // role="button"
            className={cn(
                'flex justify-between gap-2 p-2 md:gap-4 group cursor-pointer items-center',
                'rounded-md text-muted-foreground hover:bg-muted hover:shadow-md transition-all duration-300',
                showAlbum ? 'p-1.5' : ''
                // 'bg-red-950'
            )}
            onClick={() => playSong(song)}
        >
            {showAlbum ? <SongWithAlbum /> : <SongWithoutAlbum />}
        </div>
    );
};

export default SongList;
