import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Details() {

    const dispatch = useDispatch();
    const selectedMovie = useSelector(store => store.selectedMovie);

    return (
        <main>
            {selectedMovie ? (<div key={selectedMovie.id} >
            <h3>{selectedMovie.title}</h3>
            <img src={selectedMovie.poster} alt={selectedMovie.title} />
            <h4>Genres: {selectedMovie.genres}</h4>
            <p>{selectedMovie.description}</p>
        </div>) : (<div>Loading</div>)}
        </main>
    );
}

export default Details;