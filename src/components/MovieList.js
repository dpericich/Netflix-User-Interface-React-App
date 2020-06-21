import React from 'react';

const MovieList = ({movies}) => {
    return(
        <div className="movie-list">
            {movies.map(movie => {
                return(
                <div>
                    <h3>{movie.title}</h3>
                    <img 
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                        alt={movie.title} 
                    />
                    <p>{movie.release_date}</p>
                </div>
            )})}
        </div>
    );
};

export default MovieList;