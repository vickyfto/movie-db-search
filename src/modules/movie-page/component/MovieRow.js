import React from 'react';

class movieRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  viewMovie() {
    // console.log("view movie");
    // console.log(this.props.movie.title);
    const url = 'https://www.themoviedb.org/movie/' + this.props.movie.id;
    window.location.href = url;
  }
  render() {
    return (
      <div style={{ marginLeft: '15%', width: '70%' }}>
        <ul key={this.props.movie.id}>
          <li>
            <img
              src={this.props.movie.poster_path}
              alt="tidak bisa di muat"
              width=" 230px;"
            ></img>
            <h3>{this.props.movie.title}</h3>
            <span> {this.props.movie.overview}</span>
          </li>
          <br></br>
          <input
            type="button"
            onClick={this.viewMovie.bind(this)}
            value="View"
          ></input>
        </ul>
      </div>
    );
  }
}

export default movieRow;
