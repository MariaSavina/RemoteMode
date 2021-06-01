import React from 'react'
import OneCard from './Card'
import data from '../data.json'

export default function AllCards(props){
    const card=data.map(el=><OneCard src={el.img} title={el.description} href={el.link} id={el.id} key={el.id}/>)
    return(
        <div className="cardBox">
            {card}
        </div>
    )
}