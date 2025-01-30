import { albums } from '../utils/song';
import AlbumCard from '../components/song/album-card';

const Albums = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center mt-6">Explore Albums</h2>

            <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6">
                {albums.map((album, index) => (
                    <AlbumCard key={index} album={album} />
                ))}
            </div>
        </div>
    );
};

export default Albums;
