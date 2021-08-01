import IAlbum from "./IAlbum";
import IAlbumDetail from "./IAlbumDetail";

export interface IAction {
    type: string;
    payload?: string | number | IAlbum[] | IAlbumDetail[];
}