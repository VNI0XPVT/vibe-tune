import artists from '../../data/artists';

type Props = {
    artist: (typeof artists)[number];
};

const AartistCard = ({ artist }: Props) => {
    return (
        <div key={artist.id} className="p-1.5">
            <img
                className="w-full mx-auto block rounded-full shadow-lg  shadow-black/50"
                src={artist.image}
                alt={artist.name}
            />

            <h4 className="mt-2 text-sm text-ellipsis line-clamp-1">{artist.name}</h4>
            <p className="text-xs text-muted-foreground">Artist</p>
        </div>
    );
};

export default AartistCard;
