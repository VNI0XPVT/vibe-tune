import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { MinusCircle, PlusCircle } from 'lucide-react';
import { findAlbumById } from '../utils/song';
import SongList from '../components/song/song-list';
import AartistCard from '../components/song/artist-card';
import { useMusicPlayerContext } from '../context/audio-provider';
import { Link } from 'react-router';
import ProgressBar from '@/components/progress-bar';
import PlaybackControls from '@/components/playback-controls';

const PlaylistStatus = ({ currentIndex = 0, totalSongs = 0 }) => (
    <div className="text-xs text-muted-foreground/75 text-center">
        Playing <b>{currentIndex + 1}</b> of{' '}
        <b>
            {totalSongs} {totalSongs === 1 ? 'song' : 'songs'}
        </b>{' '}
        in the playlist
    </div>
);

const Player = () => {
    const { playerState, addToPlaylist, removeFromPlaylist } = useMusicPlayerContext();
    const { currentSong: song, playlist } = playerState;

    if (!song) return <p></p>;
    const album = findAlbumById(song?.album.id);

    if (!album) return <p></p>;

    const isInPlaylist = playlist.some(s => s.id === song.id);

    return (
        <div className="grid gap-6 md:gap-10">
            <Card className="flex flex-col md:flex-row overflow-hidden mx-auto p-6 md:p-6 gap-10 w-full mt-6">
                <div className=" md:h-56">
                    <img
                        className="size-full aspect-[5/4] border rounded-lg shadow-lg shadow-background/80 "
                        src={song.image}
                    />
                </div>

                <div className="flex-1 flex flex-col justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-semibold line-clamp-1 text-ellipsis">
                                {song.name}
                            </h3>

                            <p className="text-sm md:text-base text-muted-foreground ">
                                <Link className="text-primary hover:underline" to={`/albums/${song.album.id}`}>
                                    {song.album.name}
                                </Link>{' '}
                                • {song.releaseDate}
                            </p>
                        </div>

                        <div
                            role="button"
                            onClick={e => {
                                if (isInPlaylist) removeFromPlaylist(song);
                                else addToPlaylist([song]);
                                e.stopPropagation();
                            }}
                        >
                            {isInPlaylist ? (
                                <MinusCircle className="size-6  text-red-500" />
                            ) : (
                                <PlusCircle className="size-6   text-green-500" />
                            )}
                        </div>
                    </div>

                    <ProgressBar />
                    <PlaybackControls />
                    <PlaylistStatus currentIndex={playerState.currentSongIndex} totalSongs={playlist.length} />
                </div>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Album Songs</CardTitle>
                    <CardDescription>Explore all the songs from the album {album.name}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    {album.songs.map((song, i) => (
                        <SongList song={song} key={song.id} number={i + 1} />
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Artists</CardTitle>
                    <CardDescription>Explore all the artists who contributed in this song</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-4 md:grid-cols-7 justify-between gap-4 md:gap-8">
                    {song.artists.map(artist => (
                        <AartistCard key={artist.id} artist={artist as any} />
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default Player;
