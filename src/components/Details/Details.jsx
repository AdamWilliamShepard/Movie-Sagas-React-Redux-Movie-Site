import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './Details.css'
//Material UI import items
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        <>
            <div class="flex-grid">
                    {selectedMovie ? (
                        <Card className='col'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            maxWidth: 1200,
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                            }
                        }}>
                            <CardMedia
                                sx={{
                                    height: 550,
                                    width: 425,
                                }}
                                image={selectedMovie.poster}
                                title={selectedMovie.title}
                            />
                            <CardContent sx={{ width: '100%' }}>
                                <form onSubmit=''>
                                    <Button size="small" variant="contained" onClick={editMovie}>Edit Movie</Button>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Genres: {selectedMovie.genres}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {selectedMovie.description}
                                    </Typography>
                                </form>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "center" }}>
                                <Button size="small" variant="contained" onClick={back}>Back to Home</Button>
                            </CardActions>
                        </Card>) : (<div>Loading</div>)}
            </div>
        </>
    );
}

export default Details;