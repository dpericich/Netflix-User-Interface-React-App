import React from 'react';

import tmbd from '../apis/tmdb';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class App extends React.Component{

    state={ movies: [], selectedMovid:null}

    defaultLoadTopMovies = async() => {
        let response = await tmbd.get(`movie/top_rated?api_key=${this.my_api_key}&language=en-US`)
        .then(res => {
            this.setState({movies: res.data.results.slice(0,10)})
        })
    };

    componentDidMount() {
        this.defaultLoadTopMovies();
    }


    onMovieTitleSubmit = async (term) => {
        let movieSearch = term.split(' ').join('%20');
        let response = await 
        tmbd.get(`search/movie?api_key=${this.my_api_key}&language=en-US&query=${movieSearch}&page=1`)
        .then(res => {
            this.setState({movies: res.data.results.slice(0,10)})
        })
        console.log(this.state.movies)
    }

    render() {
        return (
            <div className="MovieApp">
                <div className='header-search'>
                    <h1 style={headerStyle}>Netflux</h1>
                    <SearchBar onMovieTitleSubmit={this.onMovieTitleSubmit}/>
                </div>
                <div className="ui grid">
                    <div className="five wide column">
                            <MovieList movies={this.state.movies} />
                    </div>
                </div>
            </div>
        );
    };
};

//Styling for app

const headerStyle = {
    backgroundColor: '#141414',
    textAlign: 'center',
    borderRadius: '0 0 5px 5px',
    color: '#E50914',
    fontSize: '50px',
}



export default App;