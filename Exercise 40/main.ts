function make_album(artist_name: string, album_title: string, tracks?: number){
    let album:{artist:string, title:string, track?:number} = {
        artist:artist_name,
        title:album_title,
    };
    if (tracks !== undefined){
        album.track =tracks;
    }
    return album;

}
//calling three function and making variables.

let album1 = make_album("affan","album title 1");
let album2 = make_album("shayan","album title 2");
let album3 = make_album("ayan","album title 3",10);

console.log(album1);
console.log(album2);
console.log(album3);