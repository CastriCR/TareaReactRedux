import { IAction } from "../../../models/IAction";
import { ACTUALIZAR_DETALLES } from "../../actions";

export interface IAlbumDetailReducerState {
    albumDetail: IAlbumDetail[];
}

const initialState = {
    albumDetail: []
};

export default (state = initialState, { type, payload }: IAction) => {
    switch (type) {
        case ACTUALIZAR_DETALLES:
            return { ...state, albumDetail: payload }
        default:
            return state;
    }
}