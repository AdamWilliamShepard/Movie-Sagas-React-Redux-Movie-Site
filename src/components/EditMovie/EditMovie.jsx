import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function EditMovie() {

    const dispatch = useDispatch();
    const history = useHistory()

    let [movieToAdd, setMovieToAdd] = useState({ title: '', description: '' })

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' })
    }, []);

    const back = () => {
        history.push('/')
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMovieToAdd({
            ...movieToAdd,
            [name]: value,
        })
    }

    const addMovie = (movieToAdd) => {
        console.log('Inside of addMovie function. Here is movieToAdd:', movieToAdd)
        if (movieToAdd.title === '' && movieToAdd.description === '') {
            alert('You must complete at least one input field')
        }
        else {
            dispatch({
                type: 'ADD_NEW_MOVIE',
                payload: movieToAdd
            })
        }
    }

    return (
        <main>
            <form onSubmit={(event) => addMovie(movieToAdd)}>
                <input
                    onChange={handleInputChange}
                    type='text'
                    placeholder='title'
                    name='title'
                    value={movieToAdd.title}
                />

                <input
                    onChange={handleInputChange}
                    type='text'
                    placeholder='description'
                    name='description'
                    value={movieToAdd.description}
                />
               

                <button type='submit'>Save</button>
            </form>
            <button onClick={back}>Cancel</button>
        </main>
    );
}

export default EditMovie;