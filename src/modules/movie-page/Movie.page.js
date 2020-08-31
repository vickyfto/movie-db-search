import React from 'react';
// import Logo from 'modules/movie-page/assets/movie.png';
import MovieRow from 'modules/movie-page/component/MovieRow.js';
import $ from 'jquery';
// import * as css from 'modules/movie-page/style/main.css';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  performSearch(searchTerm) {
    const urlString =
      'https://api.themoviedb.org/3/search/movie?api_key=f78d2ab56d78ef40fcf00b804e068e73&query=' +
      searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log('fetche data successfully');
        const results = searchResults.results;

        var movieRows = [];

        results.forEach((movie) => {
          // console.log(movie.poster_path);
          movie.poster_path =
            'https://image.tmdb.org/t/p/w500' + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error('failed to fetch data');
      },
    });
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  componentDidMount() {
    this.performSearch('avenger');
  }

  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="input-field col-s12 offset-5 mt-5">
              <input
                autoFocus
                id="email"
                type="email"
                className="validate"
                onChange={this.searchChangeHandler.bind(this)}
              />
              <label for="email">Search Movies</label>
            </div>
          </div>
        </form>
        <div className="mt-5"> {this.state.rows}</div>
      </div>
    );
  }
}

export default Movie;
