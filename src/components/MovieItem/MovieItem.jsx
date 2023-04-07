import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieItem() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            
        </main>
    );
}

export default MovieItem;