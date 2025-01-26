import _ from 'lodash';
import songs from '../data/songs';

const getAlbums = () => {
    // get album by songs's album.name and then return where smore than 2 songs
    // return _.chain(songs)
    //     .groupBy('album.name')
    //     .map((songs, album) => ({
    //         id: songs[0].album.id,
    //         name: album,
    //         image: songs[0].image,
    //         songs: songs.length,
    //     }))
    //     .filter(album => album.songs > 1)
    //     .value();
        

    // get album by songs's album.id and then return where more than 2 songs
    // also get the first image of the album & the total duration of the album
    // and also get all the artists of the album; You can use _.uniqBy to get unique artists

    return _.chain(songs)
        .groupBy('album.id')
        .map((songs, album) => ({
            id: album,
            name: songs[0].album.name,
            image: songs[0].image,
            // duration: _.sumBy(songs, 'duration'),
            // artists: _.uniqBy(songs, 'artist.id').map(song => song.artists),
            songs: songs.length,
        }))
        .filter(album => album.songs > 1)
        .sortBy('songs')
        .value();

};

const searchAlbumById = (id: string) => {
 const album = _.chain(songs)
        .filter(song => song.album.id === id)
        .groupBy('album.id')
        .map((songs, album) => ({
            id: album,
            name: songs[0].album.name,
            image: songs[0].image,
            duration: _.sumBy(songs, 'duration'),
            artists: _.uniqBy(songs, 'artist.id').map(song => song.artists),
            songs,
        }))
        .value();

    return album[0];
}

const albums = getAlbums();

export { albums, getAlbums, searchAlbumById };
