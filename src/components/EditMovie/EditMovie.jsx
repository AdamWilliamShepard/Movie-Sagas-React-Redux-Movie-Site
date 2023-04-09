import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function EditMovie() {

    const { id } = useParams();
    const selectedMovie = useSelector(store => store.selectedMovie);
    const dispatch = useDispatch();
    const history = useHistory()

    let [movieEdit, setMovieEdit] = useState({ title: '', description: '', id: '' })

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' })
    }, []);

    const back = () => {
        history.push('/')
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMovieEdit({
            ...movieEdit,
            [name]: value,
            id: id
        })
    }

    const editMovie = (movieEdit) => {
        console.log('Inside of addMovie function. Here is movieToAdd:', movieEdit)
        if (movieEdit.title === '' && movieEdit.description === '') {
            alert('You must complete at least one input field')
        }
        else {
            dispatch({
                type: 'MODIFY_MOVIE',
                payload: movieEdit
            })
        }
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

            <form onSubmit={(event) => editMovie(movieEdit)}>
                <input
                    onChange={handleInputChange}
                    type='text'
                    placeholder='title'
                    name='title'
                    value={movieEdit.title}
                />

                <input
                    onChange={handleInputChange}
                    type='text'
                    placeholder='description'
                    name='description'
                    value={movieEdit.description}
                />


                <button type='submit'>Save</button>
            </form>
            <button onClick={back}>Cancel</button>
        </main>
    );
}

export default EditMovie;