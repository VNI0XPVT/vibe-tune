import _ from 'lodash';
import songs from '../data/songs';

const getAlbums = () => {
 
    return _.chain(songs)
        .groupBy('album.id')
        .map((songs, album) => ({
            id: album,
            name: songs[0].album.name,
            image: songs[0].image,
            songs: songs.length,
        }))
        .filter(album => album.songs > 1)
        .sortBy('songs', 'desc')
        .value();

};


const searchAlbumById = (id: string) => {
    const albumSong = _.find(songs, song => song.album.id === id);
    if (!albumSong) return null;
    
    const albumSongs = _.filter(songs, song => song.album.id === id);
    
    return {
        id: albumSong.album.id,
        name: albumSong.album.name,
        url: albumSong.album.url,
        releaseDate: albumSong.releaseDate,
        language: albumSong.language,
        image: albumSong.image,
        duration: _.sumBy(albumSongs, 'duration'),
        artists: _.uniqBy(_.flatMap(albumSongs, 'artists'), 'id'),
        songs: albumSongs,
    };
};

const albums = getAlbums();

export { albums, getAlbums, searchAlbumById };
