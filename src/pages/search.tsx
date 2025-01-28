import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import songs from '../data/songs-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import SongCard from '../components/song/song-card';
import SearchBar from '../components/search-bar';

type Props = {};

const SearchPage = (props: Props) => {
    const [results, setResults] = useState<typeof songs>([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        setResults(
            songs
                .filter(
                    song =>
                        song.name.toLowerCase().includes(query.toLowerCase()) ||
                        song.album.name.toLowerCase().includes(query.toLowerCase())
                )
                .slice(0, 14)
        );
    }, [query]);

    return (
        <div className="space-y-6">
            <SearchBar onChange={setQuery} />

            {query.length > 0 && (
                <Card className="max-w-screen-md mx-auto">
                    <CardHeader>
                        <CardTitle>Search Results</CardTitle>
                        <CardDescription>
                            {results.length} {results.length === 1 ? 'result' : 'results'} found for &quot;{query}&quot;
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-2 md:grid-cols-2">
                        {results.map(song => (
                            <SongCard key={song.id} song={song} />
                        ))}

                        {results.length === 0 && (
                            <p className="text-center col-span-2 text-muted-foreground py-10">
                                No results found for &quot;{query}&quot;
                            </p>
                        )}
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default SearchPage;
