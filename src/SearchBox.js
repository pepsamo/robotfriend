import React from 'react';

const SearchBox = ({ searchValue, toInput}) => (
        <div>
            <input
            className = 'bg-lightest-blue bn pa2'
            type = 'search'
             placeholder="Search robot..."
             onChange = {toInput}
             value = { searchValue} />
        </div>
    );

export default SearchBox;