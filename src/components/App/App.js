import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import EditMovie from '../EditMovie/EditMovie';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>

        <Router>
          <Link to="/"> Home</Link>
        </Router>

        <Router>
          <Link to="/details"> Details</Link>
        </Router>

        <Router>
          <Link to="/addmovie"> Add Movie</Link>
        </Router>

        {/* Home Page */}
        <Route path="/" exact component={MovieList} />

        {/* Details page */}
        <Route path="/details/:id" component={Details} />

        {/* Add Movie page */}
        <Route path="/addmovie" component={AddMovieForm} />

        {/* Edit Movie page */}
        <Route path="/editmovie" component={EditMovie} />

      </Router>
    </div>
  );
}


export default App;
