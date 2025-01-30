import { Link } from 'react-router';
import { albums } from '../../utils/song';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
    album: (typeof albums)[number];
};

const AlbumCard = ({ album }: Props) => {
    return (
        <Link
            to={`/albums/${album.id}`}
            className="p-1.5 md:p-2 inline-block hover:bg-muted/75 hover:shadow-md hover:shadow-background/75 rounded-md transition-all group"
        >
            {/* @ts-ignore */}
            <LazyLoadImage
                className="w-full block rounded-md shadow-md border shadow-black/50"
                src={album.image}
                alt={album.name}
                // placeholderSrc="/placeholder.png"
                effect="blur"
            />

            <h4 className="mt-3  text-sm max-w-[6rem] text-ellipsis line-clamp-1 group-hover:text-primary">
                {album.name}
            </h4>
            <p className="text-xs text-muted-foreground">{album.songs} songs</p>
        </Link>
    );
};

export default AlbumCard;
