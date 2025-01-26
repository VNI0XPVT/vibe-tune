import React from 'react';
import { albums, searchAlbumById } from '../utils/song';
import AlbumCard from '../components/song/album-card';
import { useParams } from 'react-router';
import { Button } from '../components/ui/button';
import { Heart, PlayCircle, PlayIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import SongCard from '../components/song/song-card';
import { formatDuration } from '../lib/utils';

type Props = {};

const Album = (props: Props) => {
    const { id } = useParams();
    const album = searchAlbumById(id as string);

    console.log(album);
    return (
        <div className="space-y-10">
            {/* <h2 className="text-2xl font-semibold text-center">Explore Album</h2> */}
            <Card className="flex flex-col md:flex-row md:justify-start mt-10 gap-5 md:gap-8 md:items-center p-5">
                <img className="w-full md:size-52 rounded-lg border shadow-md" src={album.image} alt={album.name} />

                <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl font-semibold">{album.name}</h1>
                    <p className="text-sm text-muted-foreground">
                        {album.songs.length} songs - {album.duration} minutes
                    </p>
                    <p className="text-sm text-muted-foreground">
                        <b>Artists:</b> {album.artists[0]?.map((artist, index) => artist.name).join(', ')}
                    </p>
                    <Button className=" !mt-14">
                        <PlayIcon /> Play All
                    </Button>
                </div>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Songs</CardTitle>
                    <CardDescription>
                        {album.songs.length} songs - {album.duration} minutes
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-1.5">
                    {album.songs.map((song, i) => (
                        <div className="grid group grid-cols-[1.25rem_1fr_1.5rem_2rem] items-center md:grid-cols-[1.5rem_1fr_1fr_1.5rem_2rem] gap-1.5 md:gap-3 text-sm p-2.5 rounded-md text-muted-foreground [&>*]:bg-green-500/0 hover:bg-muted">
                            <p className="opacity-80">
                                <span className="group-hover:hidden">{i + 1}</span>
                                <span className="hidden group-hover:inline">
                                    <PlayCircle className="size-4 md:size-5" />
                                </span>
                            </p>
                            <p className="max-md:text-sm font-semibold text-foreground/90">{song.name}</p>
                            <p className="max-md:hidden text-xs">{song.artists.map(a => a.name).join(', ')}</p>
                            <p>
                                <Heart className="size-4" />
                            </p>
                            <p className='max-md:text-xs'>{formatDuration(song.duration)}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* <div className='mt-12 grid grid-cols-6 md:gap-5'>
            {
                albums.map((album, index) => (
                    <AlbumCard key={index} album={album} />
                ))
            }
        </div> */}
        </div>
    );
};

export default Album;
