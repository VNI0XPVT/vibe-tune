import _ from 'lodash';
import songs from '../data/songs';

const getAlbums = () => {
    // get album by songs's album.name and then return where smore than 2 songs
    return _.chain(songs)
        .groupBy('album.name')
        .map((songs, album) => ({
            id: songs[0].album.id,
            name: album,
            image: songs[0].image,
            songs: songs.length,
        }))
        .filter(album => album.songs > 2)
        .value();
};

export { getAlbums };
