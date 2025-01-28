import SongList from '../components/song/song-list';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useMusicPlayerContext } from '../context/audio-provider';

type Props = {};

const QueuePage = (props: Props) => {
    const {
        playerState: { playlist },
    } = useMusicPlayerContext();

    return (
        <div className="w-full space-y-6">
            <h2 className="text-2xl font-semibold text-center mt-6">Your Playlist</h2>

            <Card className="w-full mx-auto">
                <CardHeader>
                    <CardTitle>Now Playing</CardTitle>
                    <CardDescription>
                        {playlist.length} {playlist.length === 1 ? 'song' : 'songs'} in the queue
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-1">
                    {playlist.length > 0 ? (
                        playlist.map(song => <SongList key={song.id} song={song} showAlbum={true} />)
                    ) : (
                        <p className="text-center text-gray-500 my-20">
                            Your playlist is currently empty. Add some songs to start listening!
                        </p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default QueuePage;
