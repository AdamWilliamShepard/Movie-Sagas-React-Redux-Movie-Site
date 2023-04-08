import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({ movie }) {

    const dispatch = useDispatch();
    // const movies = useSelector(store => store.movies);
    const history=useHistory()

    const showDescription = () => {
        dispatch({
            type: "FETCH_SINGLE_MOVIE",
            payload: movie.id
        })
        // history.push('/details')
    }

    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={showDescription} />
        </div>

    );
}

export default MovieItem;