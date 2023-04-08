import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory()

    const showDescription = () => {
        dispatch({
            type: "FETCH_SINGLE_MOVIE",
            payload: movie.id
        })
        history.push(`/details/${movie.id}`)
    }

    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={showDescription} />
        </div>

    );
}

export default MovieItem;