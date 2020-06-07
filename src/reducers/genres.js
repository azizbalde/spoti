import { DISPLAY_GENRES, DELATE_GENRES } from '../actions/genres'
import { DISPLAY_MUSICS } from '../actions/musics'

const initialState = {
    genres: [],
    musics: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case DISPLAY_MUSICS:
            return {
                ...state,
                musics: action.payload
            }
        case DELATE_GENRES:
            return {
                ...state,
                genres: state.genres.filter(genres => genres !== action.payload)
            }
        default:
            return state
    }
}