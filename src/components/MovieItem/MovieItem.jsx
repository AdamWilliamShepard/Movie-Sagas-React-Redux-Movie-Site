import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//Material UI import items
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alignProperty } from '@mui/material/styles/cssUtils';


function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory()

    const showDescription = () => {
        dispatch({
            type: "FETCH_SINGLE_MOVIE",
            payload: movie.id
        })
        history.push(`/details/${movie.id}`)
    }

    return (<>
        <Card sx={{
            maxWidth: 500,
            backgroundColor: 'rgba(32, 119, 212, 0.3)',
            cursor: 'grab',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                backgroundColor: 'rgba(32, 119, 212, 0.6)',
                boxShadow: '0px 0px 20px 5px rgba(0,0,0,0.5)',
                transform: 'scale(1.05)'
            }
        }}>
            <CardMedia
                sx={{ height: 325, width: "auto", justifyContent: "center" }}
                image={movie.poster}
                title={movie.title}
                onClick={showDescription}
            />
            <CardContent sx={{ width: '100%' }}>
                <form onSubmit=''>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                    </Typography>
                </form>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>

            </CardActions>
        </Card>

    </>
    );
}

export default MovieItem;