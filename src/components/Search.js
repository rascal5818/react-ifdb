import React from 'react';

function Search({ handleInput, search }) {
    return (
        <section className="searchBox-wrap">
            <input
                type="text"
                placeholder="Search for media..."
                className="searchbox"
                onChange={handleInput}
                onKeyPress={search}
            ></input>
        </section>
    );
}

export default Search;
