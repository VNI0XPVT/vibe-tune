import { memo, useDeferredValue, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import SongCard from '../components/song/song-card';
import SearchBar from '../components/search-bar';
import { searchSongs } from '@/utils/song';

const SearchResults = memo(({ query }: { query: string }) => {
    const results = searchSongs(query);

    return (
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
    );
});

const SearchPage = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="space-y-6 mt-1">
            <SearchBar onChange={setQuery} />
            {query && <SearchResults query={query} />}
        </div>
    );
};

export default SearchPage;
