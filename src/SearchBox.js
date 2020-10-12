import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input 
            className='pa2 ba b--red bg-lightest-red' 
            type='search' 
            placeholder='search robogods'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;