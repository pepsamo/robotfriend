import React from 'react';

const SearchBox = ({toInput}) => (
        <div>
            <input
            className = 'bg-lightest-blue bn pa2'
            type = 'search'
             placeholder="Search robot..."
             onChange = {toInput} />
        </div>
    );

export default SearchBox;