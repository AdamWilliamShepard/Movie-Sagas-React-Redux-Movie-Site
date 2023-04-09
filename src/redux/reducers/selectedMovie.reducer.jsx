//Reducer used to store the selected movie
const selectedMovie = (state = '', action) => {
    switch (action.type) {
        case 'SET_SELECTED_MOVIE':
            return action.payload;
        case 'SHOW_SELECTED_MOVIE':
            return state;
        default:
            return state;
    }
}

export default selectedMovie;
