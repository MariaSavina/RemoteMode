import React from 'react';
import OneCard from './Card';

export default function AllCards(props){
    const createCard = () => {
        return props.data.map(el => <OneCard data={el} key={el.description} />);
      };
    return(
        <div className="cardBox">
            {createCard()}
        </div>
    );
}