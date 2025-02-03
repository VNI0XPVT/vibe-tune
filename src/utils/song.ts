import _ from 'lodash';
import songsData from '../data/songs-data';

const findAlbums = () => {
    const albums = _.chain(songsData)
        .groupBy('album.id')
        .map((songs, album) => ({
            id: album,
            name: songs[0].album.name,
            image: songs[0].image,
            songs: songs.length,
        }))
        .filter(album => album.songs > 1)
        .orderBy('songs', 'desc')
        .value();

    return albums;
};

const findAlbumById = (id: string) => {
    const albumSong = _.find(songsData, song => song.album.id === id);
    if (!albumSong) return null;

    const albumSongs = _.filter(songsData, song => song.album.id === id);

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

const findSongs = (count = 75) => {
    return _.sampleSize(songsData, count);
};

const findArtists = () => {
    return _.chain(songsData)
        .flatMap('artists')
        .groupBy('id')
        .map((artists, id) => ({
            id,
            name: artists[0].name,
            image: artists[0].image,
            songs: artists.length,
        }))
        .orderBy('songs', 'desc')
        .value()
        .filter(artist => artist.songs > 2 && ['459880', '677149', '455669'].indexOf(artist.id) === -1);
};

const findArtistById = (id: string) => {
    const artist = songsData
        .find(song => song.artists.some(artist => artist.id === id))
        ?.artists.find(artist => artist.id === id);

    if (!artist) return null;

    const artistSongs = _.filter(songsData, song => _.find(song.artists, { id }));

    return {
        id: artist.id,
        name: artist.name,
        image: artist.image,
        duration: _.sumBy(artistSongs, 'duration'),
        albums: _.uniqBy(_.flatMap(artistSongs, 'album'), 'id'),
        languages: _.uniq(_.map(artistSongs, 'language')),
        songs: artistSongs,
    };
};

const searchSongs = (value: string) => {
    const query = value.trim().toLowerCase();
    if (!query) return [];

    const results = _.chain(songsData)
        .filter(song => song.name.toLowerCase().includes(query) || song.album.name.toLowerCase().includes(query))
        .slice(0, 14)
        .value();

    return results;
};

const albums = findAlbums();
const songs = findSongs();

export { albums, songs, findAlbums, searchSongs, findSongs, findAlbumById, findArtistById, findArtists };
