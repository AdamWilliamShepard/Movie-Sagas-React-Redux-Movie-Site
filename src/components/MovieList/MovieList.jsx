import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' })
    }, []);

    return (
        <main>
            <div class="flex-grid-quarters">
                <section className="movies">
                    {movies.map((movie, i) => {
                        return (
                            <div class="col">
                                <MovieItem key={i} movie={movie} />
                            </div>)
                    })}
                </section>
            </div>
        </main>

    );
}

export default MovieList;