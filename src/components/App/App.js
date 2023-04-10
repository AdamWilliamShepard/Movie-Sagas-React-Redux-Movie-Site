import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import EditMovie from '../EditMovie/EditMovie';
import MiniDrawer from '../Drawer/MiniDrawer';

function App() {
  return (
    <div className="App">
<img src="images/PrimeMovieSaga.png" width="550"/>
      <Router>
        <MiniDrawer />

        {/* Home Page */}
        <Route path="/" exact component={MovieList} />

        {/* Details page */}
        <Route path="/details/:id" component={Details} />

        {/* Add Movie page */}
        <Route path="/addmovie" component={AddMovieForm} />

        {/* Edit Movie page */}
        <Route path="/editmovie/:id" component={EditMovie} />

      </Router>
    </div>
  );
}


export default App;
