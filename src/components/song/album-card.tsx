import { albums } from '../../utils/song';

type Props = {
    album: (typeof albums)[number];
};

const AlbumCard = ({ album }: Props) => {
    return (
        <div key={album.id} className="p-1 inline-block">
            <img
                className="w-full md:w-36 block rounded-md shadow-lg border shadow-black/50"
                src={album.image}
                alt={album.name}
            />

            <h4 className="mt-3  text-sm max-w-[6rem] text-ellipsis line-clamp-1">{album.name}</h4>
            <p className="text-xs text-muted-foreground">{album.songs} songs</p>
        </div>
    );
};

export default AlbumCard;
