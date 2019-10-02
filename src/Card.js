import React from 'react';
import './Card.css';

const Card = ({id, name, email}) => { 
    return (
    <div className="tc dib br3 pa3 ma3 grow bw3 shadow-5" id="robots">
        <img src={`https://robohash.org/${id}?200x200`} alt="Robot" />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
)
};

export default Card;