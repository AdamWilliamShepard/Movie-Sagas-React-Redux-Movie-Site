import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovieForm() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);

    let [movieToAdd, setMovieToAdd] = useState({ title: '', poster: '', description: '' })
    let [genreToAdd, setGenreToAdd] = useState({ id: '', name: '' })


    const handleTitleChange = (event) => {
        setMovieToAdd({
            ...movieToAdd,
            title: event.target.value,
        });
    }

    const handlePosterChange = (event) => {
        setMovieToAdd({
            ...movieToAdd,
            poster: event.target.value,
        });
    }

    const handleDescriptionChange = (event) => {
        setMovieToAdd({
            ...movieToAdd,
            description: event.target.value,
        });
    }

    const handleGenreChange = (event) => {
        setGenreToAdd({
            ...genreToAdd,
            name: event.target.value,
        });
    }

    

    return (
        <main>
            <form onSubmit={(event) => addMovie(event)}>
                <input
                    onChange={handleTitleChange}
                    type='text'
                    placeholder='title'
                    value={movieToAdd.title}
                />
                <input
                    onChange={handlePosterChange}
                    type='text'
                    placeholder='poster'
                    value={movieToAdd.poster}
                />
                <input
                    onChange={handleDescriptionChange}
                    type='text'
                    placeholder='description'
                    value={movieToAdd.description}
                />
                <select id="genres" name="genres"
                    onChange={handleGenreChange}
                    value={genreToAdd.name}>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
                </select>


                <button type='submit'>Submit</button>
            </form>
        </main>
    );
}

export default AddMovieForm;