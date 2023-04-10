import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
//Material UI import items
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function EditMovie() {

    //useParams in order to grab the id from the url bar. Used to maintain persistance through refresh.
    const { id } = useParams();
    const selectedMovie = useSelector(store => store.selectedMovie);
    const dispatch = useDispatch();
    const history = useHistory()
    console.log('This is selectedMovie', selectedMovie)

    //Set defaults equal to their current values.
    let [movieEdit, setMovieEdit] = useState({ title: selectedMovie?.title, description: selectedMovie?.description, id: '' })

    //Use effect that takes advantage of the id created above to maintain persistance through refresh.
    useEffect(() => {
        dispatch({ type: 'FETCH_SINGLE_MOVIE', payload: id })
    }, [dispatch, id])

    //function to take the user back to home.
    const back = () => {
        history.push('/')
    }

    //function to handle all input changes by making an object and setting name and value properties
    //to the event.target.
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMovieEdit({
            ...movieEdit,
            [name]: value,
            id: id
        })
    }

    //function to dispatch to the put request.
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
        <div className="flex-grid">
            {selectedMovie ? (
                <Card key={selectedMovie.id}
                    className='col'
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
                    <CardMedia
                        sx={{ height: 350, width: 300, justifyContent: "center" }}
                        image={selectedMovie.poster}
                    />
                    <CardContent sx={{ width: '100%' }}>
                        <form onSubmit={(event) => editMovie(movieEdit)}>
                            <Typography gutterBottom variant="h4" component="div">
                                {selectedMovie.title}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                Genres: {selectedMovie.genres}
                            </Typography>
                            <input
                                onChange={handleInputChange}
                                type='text'
                                size="50"
                                placeholder='title'
                                name='title'
                                value={movieEdit?.title}
                            /><br /><br />
                            <textarea
                                onChange={handleInputChange}
                                cols="75"
                                rows="5"
                                type='text'
                                placeholder='description'
                                name='description'
                                value={movieEdit?.description}
                            /><br /><br />
                            <div className='btn-wrapper'>
                                <Button size="small" variant="contained" color='error' onClick={back}>Cancel</Button>
                                <Button size="small" variant="contained" type='submit' >Save</Button>
                            </div>
                        </form>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                    </CardActions>
                </Card>
            ) : (<div>Loading</div>)
            }
        </div>
    );
}

export default EditMovie;