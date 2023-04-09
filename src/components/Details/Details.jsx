import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Details() {
    //useParams in order to grab the id from the url bar. Used to maintain persistance through refresh.
    const { id } = useParams();
    const selectedMovie = useSelector(store => store.selectedMovie);
    const dispatch = useDispatch();
    const history = useHistory();

    //Use effect that takes advantage of the id created above to maintain persistance through refresh.
    useEffect(() => {
        dispatch({ type: 'FETCH_SINGLE_MOVIE', payload: id })
    }, [dispatch, id])

    //function to take the user back to home.
    const back = () => {
        history.push('/')
    }

    //function to take the user to the edit movie page and taking advantage of url params
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