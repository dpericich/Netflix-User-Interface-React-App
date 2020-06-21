import React from 'react';

class SearchBar extends React.Component {

    state={term: ''};

    onSearchSubmit = (event) => {
        event.preventDefault();
        this.props.onMovieTitleSubmit(this.state.term);
    }

    onSearchChange = (event) => {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <div className="search-bar">
                    <form className="ui form" onSubmit={this.onSearchSubmit}>
                        <div className="ui icon input">
                            <input 
                            type="text" 
                            placeholder="Search..." 
                            value={this.state.term}
                            onChange={this.onSearchChange}/>
                            <i className="circular search link icon" onClick={this.onSearchSubmit}/>
                        </div>
                    </form>
            </div>            
        );
    };
};

export default SearchBar;