import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

type Props = {
    onChange?: (e: string) => void;
};

const SearchBar = (props: Props) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (props.onChange) props.onChange(query);
    }, [query]);

    return (
        <form className="flex gap-4 py-2.5 px-4 bg-muted/80 rounded-full max-w-xl mx-auto border focus-within:border-2 focus-within:border-muted-foreground">
            <Search className="text-muted-foreground " />
            <input
                className="font-normal flex-1 bg-transparent outline-none"
                placeholder="What do you want to listen?"
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
        </form>
    );
};

export default SearchBar;
