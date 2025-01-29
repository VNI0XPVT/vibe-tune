import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useParams } from 'react-router';
import { findArtistById } from '../utils/song';
import { Button } from '../components/ui/button';
import { ListMusicIcon, PlayIcon } from 'lucide-react';
import { useMusicPlayerContext } from '../context/audio-provider';
import SongList from '../components/song/song-list';
import { formatDuration } from '../lib/utils';

type Props = {};

const ArtistPage = (props: Props) => {
    const { addToPlaylist } = useMusicPlayerContext();

    const { id } = useParams();
    if (!id) return null;

    const artist = findArtistById(id);
    console.log(artist);
    if (!artist) return null;

    return (
        <div className="space-y-10">
            <Card className="flex flex-col md:flex-row md:justify-start mt-10 gap-5 md:gap-8 md:items-center p-5">
                <img
                    className="w-10/12 max-md:mx-auto md:size-40 rounded-full border shadow-md"
                    src={artist.image}
                    alt={artist.name}
                />

                <div className="">
                    <h1 className="text-2xl md:text-3xl font-semibold">{artist.name}</h1>
                    <p className="text-sm  text-muted-foreground mt-2">
                        Artist · {artist.songs.length} {artist.songs.length === 1 ? 'song' : 'songs'}
                    </p>
                    <p className="text-sm  text-muted-foreground mt-0.5">
                        <b>Language:</b> {artist.languages.join(', ')}
                    </p>

                    <div className="flex gap-4 mt-8">
                        <Button onClick={() => addToPlaylist(artist.songs, true)}>
                            <PlayIcon className="mr-1" /> Play All
                        </Button>

                        <Button variant="secondary" onClick={() => addToPlaylist(artist.songs, false)}>
                            <ListMusicIcon className="mr-1" /> Add to Playlist
                        </Button>
                    </div>
                </div>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Track List</CardTitle>
                    <CardDescription>
                        {artist.songs.length} {artist.songs.length === 1 ? 'track' : 'tracks'}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    {artist.songs.map((song, i) => (
                        <SongList key={song.id} song={song} showAlbum={true} />
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default ArtistPage;
