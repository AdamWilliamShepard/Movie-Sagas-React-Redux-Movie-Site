import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Details() {
    const { id } = useParams();
    const selectedMovie = useSelector(store => store.selectedMovie);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({type: 'FETCH_SINGLE_MOVIE', payload:id})
    }, [dispatch, id])

    const back = () => {
        history.push('/')
    }

    const editMovie = () => {
        history.push(`/editmovie/${selectedMovie.id}`)
    }

    return (
        <main>
            {selectedMovie ? (
                <div key={selectedMovie.id} >
                    <h3>{selectedMovie.title}</h3>
                    <img src={selectedMovie.poster} alt={selectedMovie.title} />
                    <button onClick={editMovie}>Edit Movie</button>
                    <h4>Genres: {selectedMovie.genres}</h4>
                    <p>{selectedMovie.description}</p>
                </div>
            ) : (<div>Loading</div>)}
            <button onClick={back}>Back to Home</button>
        </main>
    );
}

export default Details;