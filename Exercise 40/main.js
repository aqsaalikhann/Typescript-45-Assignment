function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.track = tracks;
    }
    return album;
}
//calling three function and making variables.
var album1 = make_album("affan", "album title 1");
var album2 = make_album("shayan", "album title 2");
var album3 = make_album("ayan", "album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
