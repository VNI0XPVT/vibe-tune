import React from 'react';
import { albums, findAlbumById } from '../utils/song';
import AlbumCard from '../components/song/album-card';
import { useParams } from 'react-router';
import { Button } from '../components/ui/button';
import { Heart, PlayCircle, PlayIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import SongCard from '../components/song/song-card';
import { formatDuration } from '../lib/utils';
import SongList from '../components/song/song-list';
import AartistCard from '../components/song/artist-card';
import { useMusicPlayerContext } from '../context/audio-provider';

type Props = {};

const Album = (props: Props) => {
    const { id } = useParams();
    const { addToPlaylist } = useMusicPlayerContext();
    const album = findAlbumById(id!);

    if (!album) return <div>Album not found</div>;

    return (
        <div className="space-y-10">
            <Card className="flex flex-col md:flex-row md:justify-start mt-10 gap-5 md:gap-8 md:items-center p-5">
                <img className="w-full md:size-52 rounded-lg border shadow-md" src={album.image} alt={album.name} />

                <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl font-semibold">{album.name}</h1>
                    <p className="text-sm text-muted-foreground">
                        {album.songs.length} songs - {formatDuration(album.duration)} - {album.language}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        <b>Release:</b> {album.releaseDate}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        <b>Artists: </b>
                        {album.artists
                            .slice(0, 5)
                            .map(a => a.name)
                            .join(', ')}
                    </p>
                    <Button className=" !mt-10" onClick={() => addToPlaylist(album.songs, true)}>
                        <PlayIcon /> Play All
                    </Button>
                </div>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Songs</CardTitle>
                    <CardDescription>
                        {album.songs.length} songs - {formatDuration(album.duration)} minutes
                    </CardDescription>
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
                    <CardDescription>{album.artists.length} artists</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-4 md:grid-cols-7 justify-between gap-4 md:gap-8">
                    {album.artists.map(artist => (
                        <AartistCard key={artist.id} artist={artist} />
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Related Albums</CardTitle>
                    {/* <CardDescription>{album.artists.length} artists</CardDescription> */}
                </CardHeader>
                <CardContent className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-5">
                    {albums.slice(0, 6).map((album, index) => (
                        <AlbumCard key={index} album={album} />
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
