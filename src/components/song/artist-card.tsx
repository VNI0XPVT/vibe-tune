import { Link } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

type Props = {
    artist: any;
};

const AartistCard = ({ artist }: Props) => {
    return (
        <Link to={`/artists/${artist.id}`} key={artist.id} className="p-1.5 cursor-pointer group">
            {/* @ts-ignore */}
            <LazyLoadImage
                className="w-full mx-auto block aspect-square rounded-full shadow-lg hadow-black/50 group-hover:scale-105 transition-all"
                src={artist.image}
                alt={artist.name}
                effect="blur"
            />

            <h4 className="mt-2 text-sm text-ellipsis line-clamp-1 group-hover:text-primary transition-colors">
                {artist.name}
            </h4>
            <p className="text-xs text-muted-foreground">Artist</p>
        </Link>
    );
};

export default AartistCard;
