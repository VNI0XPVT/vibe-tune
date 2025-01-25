import songs from '../data/songs';
import artists from '../data/artists';
import { getAlbums } from '../utils/song';
import { Card } from '../components/ui/card';

type Props = {};
export interface Artwork {
    artist: string;
    art: string;
}
export const works: Artwork[] = [
    {
        artist: 'Ornella Binni',
        art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
    },
    {
        artist: 'Tom Byrom',
        art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
    },
    {
        artist: 'Vladimir Malyavko',
        art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
    },
];

const Home = (props: Props) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl md:hidden md:text-3xl font-bold text-foreground/90">
                Good Afternoon <span className="text-gradient">User</span>
            </h2>

            <Card className="bg-gradient w-full relative p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground/90">Top Artists</h3>

                <div className="grid grid-cols-3 gap-3 md:grid-cols-6 place-items-center items-center mt-5">
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
                </div>
            </Card>

            <Card className="bg-gradient w-full relative p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground/90 ">Top Albums</h3>

                <div className="grid grid-cols-2 gap-3 md:gap-1 md:grid-cols-8 place-items-center items-center mt-5">
                    {getAlbums()
                        .slice(0, 8)
                        .map(album => (
                            <div key={album.id} className="p-1 inline-block">
                                <img
                                    className="size-36 md:size-28 block rounded-md shadow-lg border shadow-black/50"
                                    src={album.image}
                                    alt={album.name}
                                />

                                <h4 className="mt-3  text-sm max-w-[6rem] text-ellipsis line-clamp-1">{album.name}</h4>
                                <p className="text-xs text-muted-foreground">{album.songs} songs</p>
                            </div>
                        ))}
                </div>
            </Card>

            <Card className="bg-gradient w-full relative p-4 md:p-6">
                <h3 className="text-lg md:text-xl mb-5 font-semibold text-foreground/90 ">Top Songs</h3>

                <div className="w-full grid md:grid-cols-3 gap-x-6 gap-3 gap-y-2 md:gap-y-3">
                    {songs.slice(0, 3 * 5).map(song => (
                        <div id={song.id} className="p-2 rounded-md gap-3  grid grid-cols-[2.5rem_1fr]">
                            <img src={song.image} className="rounded-full size-10" />

                            <div>
                                <h3 className=" text-primary/90 line-clamp-1 text-ellipsis">{song.name}</h3>
                                <p className="text-xs text-muted-foreground line-clamp-1 text-ellipsis">
                                    {song.album.name} - {song.artists[0].name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Home;
