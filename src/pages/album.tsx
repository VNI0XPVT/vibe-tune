import React from 'react';
import { albums, findAlbumById } from '../utils/song';
import AlbumCard from '../components/song/album-card';
import { useParams } from 'react-router';
import { Button } from '../components/ui/button';
import { ListMusicIcon, PlayIcon } from 'lucide-react';
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

    if (!album)
        return (
            <div className="text-center text-muted-foreground my-10">
                Sorry, the album you’re looking for could not be found.
            </div>
        );

    return (
        <div className="space-y-8">
            <Card className="flex flex-col md:flex-row md:justify-start mt-10 gap-5 md:gap-8 md:items-center p-5">
                <img className="w-full md:size-52 rounded-lg border shadow-md" src={album.image} alt={album.name} />

                <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl font-semibold">{album.name}</h1>
                    <p className="text-sm text-muted-foreground">
                        <b>{album.songs.length}</b> {album.songs.length === 1 ? 'song' : 'songs'} -{' '}
                        <b>{album.language}</b>
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
                    <div className="flex gap-4 !mt-10">
                        <Button onClick={() => addToPlaylist(album.songs, true)}>
                            <PlayIcon className="mr-1" /> Play All
                        </Button>

                        <Button variant="secondary" onClick={() => addToPlaylist(album.songs, false)}>
                            <ListMusicIcon className="mr-1" /> Add to Playlist
                        </Button>
                    </div>
                </div>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Track List</CardTitle>
                    <CardDescription>
                        {album.songs.length} {album.songs.length === 1 ? 'track' : 'tracks'} -{' '}
                        {formatDuration(album.duration)} minutes
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    {album.songs.map((song, i) => (
                        <SongList key={song.id} song={song} number={i + 1} />
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Contributing Artists</CardTitle>
                    <CardDescription>
                        Featuring {album.artists.length} {album.artists.length === 1 ? 'artist' : 'artists'}
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-4 md:grid-cols-7 justify-between gap-4 md:gap-8">
                    {album.artists.map(artist => (
                        <AartistCard key={artist.id} artist={artist} />
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recommended Albums</CardTitle>
                    <CardDescription>Discover more albums you might enjoy</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {albums.slice(0, 6).map((relatedAlbum, index) => (
                        <AlbumCard key={index} album={relatedAlbum} />
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default Album;
