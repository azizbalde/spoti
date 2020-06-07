import axios from 'axios'
export const DISPLAY_MUSICS = 'DISPLAY_MUSICS'


export const displayMusics = musics => ({
    type: DISPLAY_MUSICS,
    payload: musics
})

export const getMusics = () => (dispatch, getState) => {
    const genres = getState().genres.genres
    const idGenre = genres.map(genre => ({ id: genre.id }))
    const stringID = idGenre.map(({id}) => `${[id].join(', ')}`).join(', ')
    axios({
      method: 'get',
      url: `http://api.napster.com/v2.2/genres/${stringID}/tracks/top`,
      params: {
        apikey: 'YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4',
      }
    }).then(res => {
        dispatch(displayMusics(res.data.tracks))
    }).catch(err => err)
}

