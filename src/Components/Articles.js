import React from 'react'


export default function Articles(props){
    return(
        <div className='articleBox'>
            <h2 className="bigTitle">{props.title}</h2>
            <img src={props.src} alt="imageUrl" style={{width: '100%', height:'400px'}}/>
            <div className="bigDescription">{props.description}</div>
            <div className="bigComment">{props.сomment}</div>
        </div>
    )
}