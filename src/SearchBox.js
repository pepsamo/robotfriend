import React from 'react';

const SearchBox = ({searchValue ,toInput}) => (
        <div>
            <input
            className = 'bg-lightest-blue bn pa2'
            type = 'search'
             placeholder="Search robot..."
             onCnhange = {toInput} />
        </div>
    );

export default SearchBox;