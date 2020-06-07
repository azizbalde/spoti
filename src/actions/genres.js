import axios from 'axios'
export const DISPLAY_GENRES = 'DISPLAY_GENRES'
export const DELATE_GENRES = 'DELATE_GENRES'

export const displayGenres = genres => ({
    type: DISPLAY_GENRES,
    payload: genres
})

export const getGenres = () => dispatch => {
    axios({
      method: 'get',
      url: 'http://api.napster.com/v2.2/genres',
      params: {
        apikey: 'YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4',
      }
    }).then(res => {
        dispatch(displayGenres(res.data.genres))
    }).catch(err => err)
}

export const delateGenres = genres => ({
    type: DELATE_GENRES,
    payload: genres
})
