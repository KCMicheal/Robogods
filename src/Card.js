import React from 'react';

const Card = ({name, email, id}) => { 
    return (
        <div className="bg-light-red link b black pv2 db bg-animate hover-bg-transparent tc dib br3 pa3 ma2 grow bw2 shadow-5 ">
            <img src={`https://robohash.org/${id}?set=set2`} alt="robogods" />
            <div>
               <h2>{name}</h2>
               <p>{email}</p> 
            </div>
        </div>
    );
}

export default Card;