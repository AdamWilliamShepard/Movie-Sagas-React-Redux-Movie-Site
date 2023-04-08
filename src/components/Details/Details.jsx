import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details() {

    const selectedMovie = useSelector(store => store.selectedMovie);
    const history = useHistory()
    const back = () => {
        history.push('/')
    }

    return (
        <main>
            {selectedMovie ? (
                <div key={selectedMovie.id} >
                    <h3>{selectedMovie.title}</h3>
                    <img src={selectedMovie.poster} alt={selectedMovie.title} />
                    <h4>Genres: {selectedMovie.genres}</h4>
                    <p>{selectedMovie.description}</p>
                </div>
            ) : (<div>Loading</div>)}
            <button onClick={back}>Back to Home</button>
        </main>
    );
}

export default Details;