import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//Material UI import items
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './AddMovieForm.css'

function AddMovieForm() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);
    const history = useHistory()

    let [movieToAdd, setMovieToAdd] = useState({ title: '', poster: '', description: '', genre_id: '' })

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

    const handleSelectChange = (event) => {
        setMovieToAdd({
            ...movieToAdd,
            genre_id: event.target.value,
        })
    }

    const addMovie = (movieToAdd) => {
        console.log('Inside of addMovie function. Here is movieToAdd:', movieToAdd)
        if (movieToAdd.title === '' || movieToAdd.poster === '' || movieToAdd.description === '') {
            alert('You must complete all input fields!')
        }
        else {
            dispatch({
                type: 'ADD_NEW_MOVIE',
                payload: movieToAdd
            })
        }
    }

    return (<>
        <div className="flex-grid">

            <Card className='col'
                sx={{
                    maxWidth: "50%",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    cursor: 'grab',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                    }
                }}>
                <CardContent sx={{ width: '100%' }}>
                    <form onSubmit={(event) => addMovie(movieToAdd)}>
                        <Typography gutterBottom variant="h4" component="div">
                            Film to Add
                        </Typography>

                        <input
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Movie Title'
                            name='title'
                            size="50"
                            value={movieToAdd.title}
                        /><br /><br />
                        <input
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Poster URL'
                            name='poster'
                            size="50"
                            value={movieToAdd.poster}
                        /><br /><br />
                        <input
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Movie Description'
                            name='description'
                            size="50"
                            className='oversizedInput'
                            value={movieToAdd.description}
                        /><br /><br />
                        <select
                            id="genres"
                            name="genre_id"
                            onChange={handleSelectChange}
                            value={movieToAdd.genre_id}>
                            {genres.map((genre) => (
                                <option key={genre.id} value={genre.id}>
                                    {genre.name}
                                </option>
                            ))}
                        </select><br /><br />
                        <div className='btn-wrapper'>
                        <Button size="small" variant="contained" color='error' onClick={back}>Cancel</Button>
                        <Button size="small" variant="contained" type='submit' >Save</Button>
                        </div>
                    </form>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                </CardActions>
            </Card>
        </div>


    </>
    );
}

export default AddMovieForm;