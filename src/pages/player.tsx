import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import songs from '../data/songs';
import { HeartIcon, PlayIcon, RepeatIcon, ShuffleIcon, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';
import { searchAlbumById } from '../utils/song';
import SongList from '../components/song/song-list';
import { formatDuration } from '../lib/utils';
import AartistCard from '../components/song/artist-card';

type Props = {};

const Player = (props: Props) => {
    const song = songs[0];
    const album = searchAlbumById(song.album.id);

    if (!album) return <p></p>;

    return (
        <div className="space-y-6 md:space-y-10">
            <Card className="flex flex-col md:flex-row overflow-hidden mx-auto p-6 md:p-6 gap-10 mt-8">
                <div className=" md:h-56">
                    <img
                        className="size-full aspect-[5/4] border rounded-lg shadow-lg shadow-background/80 "
                        src={song.image}
                    />
                </div>

                <div className="flex-1 flex flex-col justify-between gap-8">
                    <div className="flex items-center">
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-semibold">{song.name}</h3>

                            <p className="text-sm md:text-base text-muted-foreground md:mt-1">
                                {song.album.name} • {song.releaseDate}
                            </p>
                        </div>

                        <HeartIcon className="size-6" />
                    </div>

                    <div>
                        <Slider defaultValue={[120]} max={300} step={1} />

                        <div className="flex text-xs md:text-sm justify-between items-center mt-1.5 md:mt-2 text-muted-foreground">
                            <span>02:39</span>
                            <span>04:24</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-6">
                        <ShuffleIcon className="size-4 text-muted-foreground" />
                        <div className="flex items-center justify-center gap-8">
                            <Button size={'icon'} variant={'ghost'}>
                                <SkipBack className="size-5" />
                            </Button>

                            <Button size={'icon'} variant={'default'} className="rounded-full p-5">
                                <PlayIcon className="md:size-6 " />
                            </Button>

                            <Button size={'icon'} variant={'ghost'}>
                                <SkipForward className="size-5" />
                            </Button>
                        </div>
                        <RepeatIcon className="size-4 text-muted-foreground" />
                    </div>
                </div>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Album Songs</CardTitle>
                    <CardDescription>Explore all the songs from the album {album.name}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    {album.songs.map((song, i) => (
                        <SongList song={song} number={i + 1} />
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Artists</CardTitle>
                    <CardDescription>
                        Explore all the artists who contributed in this song
                    </CardDescription>
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
