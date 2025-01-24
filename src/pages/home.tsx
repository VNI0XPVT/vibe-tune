import { ScrollArea } from '../components/ui/scroll-area';
import artists from '../data/artists';
import songs from '../data/songs';
import { getAlbums } from '../utils/song';

type Props = {};

const Home = (props: Props) => {
    return (
        <div className="space-y-6 pb-16">
            <h2 className="text-2xl md:hidden md:text-3xl font-bold text-foreground/90">
                Good Afternoon <span className="text-gradient">User</span>
            </h2>

            <div className=" bg-gradient-to-b rounded-md py-6 from-neutral-800/60 to-card w-full relative box-border ">
                <h3 className="pl-6 text-xl mb-5 font-bold text-foreground/90 ">Populare Artists</h3>

                <div className="max-md:w-[calc(100vw-2rem)]">
                    <div className="whitespace-nowrap overflow-x-auto w-full space-x-4 px-6">
                        {artists.slice(0, 6).map(artist => (
                            <div key={artist.id} className="p-1.5 inline-block">
                                <img
                                    className="size-32 block rounded-full shadow-lg  shadow-black/50"
                                    src={artist.image}
                                    alt={artist.name}
                                />

                                <h4 className="mt-4 font-medium text-sm">{artist.name}</h4>
                                <p className="text-xs text-muted-foreground">Artist</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=" bg-gradient-to-b rounded-md py-6 from-neutral-800/60 to-card w-full relative box-border ">
                <h3 className="pl-6 text-xl mb-5 font-bold text-foreground/90 ">Populare Albums</h3>

                <div className="max-md:w-[calc(100vw-2rem)]">
                    <div className="whitespace-nowrap overflow-x-auto w-full space-x-4 px-6">
                        {getAlbums()
                            .slice(0, 6)
                            .map(album => (
                                <div key={album.id} className="p-1.5 inline-block">
                                    <img
                                        className="size-32 block rounded-md shadow-lg  shadow-black/50"
                                        src={album.image}
                                        alt={album.name}
                                    />

                                    <h4 className="mt-4 font-medium text-sm max-w-[6rem] text-ellipsis overflow-hidden">
                                        {album.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">{album.songs} songs</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <div className=" bg-gradient-to-b rounded-md from-neutral-800/60 to-card w-full relative box-border p-4 md:p-6">
                <h3 className="text-xl mb-5 font-bold text-foreground/90 ">Top Songs</h3>

                <div className="w-full grid md:grid-cols-3 gap-x-6 gap-y-4">
                    {songs.slice(0, 18).map(song => (
                        <div
                            id={song.id}
                            className="bg-card p-2 gap-4 border rounded-md grid grid-cols-[2.5rem_1fr] shadow-md"
                        >
                            <img src={song.image} className="rounded-md size-10" />

                            <div>
                                <h3 className="font-medium text-primary/90 line-clamp-1 text-ellipsis">{song.name}</h3>
                                <p className="text-xs text-muted-foreground line-clamp-1 text-ellipsis">
                                    {song.album.name} - {song.artists[0].name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
