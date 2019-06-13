import React from 'react';

const SearchCountry = props => {

    return (
        <option
            value={props.name}
        >
            {props.name}
        </option>
    )
}

export default SearchCountry