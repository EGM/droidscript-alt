import Component from "./component";
import Image from "./image";
export default class MediaStore extends Component {
    constructor(id: string);
    getAlbumArt(img: Image, id: string, options?: string): boolean;
    getSongArt(img: Image, id: string, options?: string): boolean;
    getType(): string;
    queryAlbums(filter: string, sort?: string, options?: string): void;
    queryArtists(filter: string, sort?: string, options?: string): void;
    queryMedia(filter: string, sort?: string, options?: string): void;
    setOnAlbumsResult(callback: Function): void;
    setOnArtistsResult(callback: Function): void;
    setOnMediaResult(callback: Function): void;
}
