import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchGenres(action) {
    //get selected movie from the db
    console.log('In fetchGenres', action)
    try {
        const getGenres = yield axios.get(`/api/genre`)
        console.log(getGenres)
        yield put({ type: 'SET_GENRES', payload: getGenres.data })
    } catch (error) {
        console.log('Error in fetchGenres generator', error)
    }
}

export default function* genresSaga() {
    yield takeEvery('FETCH_GENRES', fetchGenres)
}