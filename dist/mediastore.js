import Component from "./component";
export default class MediaStore extends Component {
    constructor(id) {
        super(id);
    }
    getAlbumArt(img, id, options) {
        return (prompt(this.id, `Med.GetAlbumArt(\f${img ? img.id : null}\f${id}\f${options}`) === "true");
    }
    getSongArt(img, id, options) {
        return (prompt(this.id, `Med.GetSongArt(\f${img ? img.id : null}\f${id}\f${options}`) === "true");
    }
    getType() {
        return "MediaStore";
    }
    queryAlbums(filter, sort, options) {
        prompt(this.id, `Med.QueryAlbums(\f${filter}\f${sort}\f${options}`);
    }
    queryArtists(filter, sort, options) {
        prompt(this.id, `Med.QueryArtists(\f${filter}\f${sort}\f${options}`);
    }
    queryMedia(filter, sort, options) {
        prompt(this.id, `Med.QueryMedia(\f${filter}\f${sort}\f${options}`);
    }
    setOnAlbumsResult(callback) {
        prompt(this.id, `Med.SetOnAlbumsResult(\f${_Cbm(callback)}`);
    }
    setOnArtistsResult(callback) {
        prompt(this.id, `Med.SetOnArtistsResult(\f${_Cbm(callback)}`);
    }
    setOnMediaResult(callback) {
        prompt(this.id, `Med.SetOnMediaResult(\f${_Cbm(callback)}`);
    }
}
