import spotify from './Spotify';

import renderAlbums from './AlbumList';

const albums = spotify.search.albums('MC Kevinho');
const element = document.getElementById("album-list");
albums.then(data => renderAlbums(data.albums.items, element));
