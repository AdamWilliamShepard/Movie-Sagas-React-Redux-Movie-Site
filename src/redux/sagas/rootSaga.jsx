import { all } from 'redux-saga/effects';
import moviesSaga from './movies.saga';
import genresSaga from './genres.saga';

function* rootSaga() {
    yield all([
        moviesSaga(),
        genresSaga()
    ]);
}

export default rootSaga;
