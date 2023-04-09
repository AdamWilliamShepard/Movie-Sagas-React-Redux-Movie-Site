import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    }
}

function* fetchSingleMovieDetail(action) {
    //get selected movie from the db
    console.log('In fetchSingleMovieDetail', action)
    try {
        const getSingleMovie = yield axios.get(`/api/movie/${action.payload}`)
        console.log(getSingleMovie)
        yield put({ type: 'SET_SELECTED_MOVIE', payload: getSingleMovie.data[0] })
    } catch (error) {
        console.log('Error in fetchSingleMovie generator', error)
    }
}

function* addNewMovie(action) {
    //Add new movie to the db
    console.log('In addNewMovies', action)
    try {
        yield axios.post('/api/movie', action.payload)
        yield put({ type: 'FETCH_MOVIES' })
    } catch (error) {
        console.log('Error in addNewMovie generator', error)
    }
}

function* modifyMovie(action) {
    //modify an existing movie
    console.log('In modifymovie generator', action)
    try {
        yield axios.put(`/api/movie/${action.payload.id}`, action.payload)
        yield put({ type: 'FETCH_MOVIES' })
    } catch (error) {
        console.log('Error in modifyMovie generator', error)
    }
}


export default function* moviesSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_SINGLE_MOVIE', fetchSingleMovieDetail);
    yield takeEvery('ADD_NEW_MOVIE', addNewMovie);
    yield takeEvery('MODIFY_MOVIE', modifyMovie);
}