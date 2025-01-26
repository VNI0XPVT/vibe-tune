import songs from '../data/songs';
import artists from '../data/artists';
import { getAlbums } from '../utils/song';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import SongCard from '../components/song/song-card';
import AlbumCard from '../components/song/album-card';
import { useWindowSize } from 'react-use';

type Props = {};
const Home = (props: Props) => {
    const { width: windowWidth } = useWindowSize();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl md:hidden md:text-3xl font-bold text-foreground/90">
                Good Afternoon <span className="text-gradient">User</span>
            </h2>

            <Card className="bg-gradient">
                <CardHeader>
                    <CardTitle>Top Artists</CardTitle>
                    <CardDescription>Discover the most popular artists</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-3 md:grid-cols-6 place-items-center items-center">
                    {artists.slice(0, 6).map(artist => (
                        <div key={artist.id} className="p-1.5">
                            <img
                                className="size-16 md:size-32 mx-auto block rounded-full shadow-lg  shadow-black/50"
                                src={artist.image}
                                alt={artist.name}
                            />

                            <h4 className="mt-2  text-sm  text-ellipsis line-clamp-1">{artist.name}</h4>
                            <p className="text-xs text-muted-foreground">Artist</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="bg-gradient">
                <CardHeader>
                    <CardTitle>Top Albums</CardTitle>
                    <CardDescription>Discover the most popular albums</CardDescription>
                </CardHeader>

                <CardContent className="grid grid-cols-3 gap-2 md:gap-5 md:grid-cols-7 place-items-center">
                    {getAlbums()
                        .slice(0, windowWidth < 768 ? 3 * 3 : 7)
                        .map(album => (
                            <AlbumCard key={album.id} album={album} />
                        ))}
                </CardContent>
            </Card>

            <Card className="bg-gradient ">
                <CardHeader>
                    <CardTitle>Top Songs</CardTitle>
                    <CardDescription>Discover the most popular songs</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-x-6 gap-3 gap-y-2 md:gap-y-3">
                    {songs.slice(0, 3 * 5).map(song => (
                        <SongCard key={song.id} song={song} />
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default Home;
