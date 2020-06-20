import React from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';

const App = () => {
    return (
        <div className="MovieApp">
            <MovieList />
            <SearchBar />
        </div>
    );
};

export default App;