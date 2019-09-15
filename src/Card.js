import React from 'react';

const Card = ({id, name, email}) => { 
    return (
    <div className="tc bg-light-green dib br3 pa3 ma3 grow bw3 shadow-5">
        <img src={`https://robohash.org/${id}?200x200`} alt="Robot" />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
)
};

export default Card;