import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom';

export default function OneCard(props){
    return(
        // <div>
        //     <img src={props.src}/>
        //     <div>{props.title}</div>
        //     <div>jugyuyglih</div>
        // </div>
        <NavLink id="card" to={`/articles/${props.id}`}>
            <Card style={{ border: 'none'}}>
                <Card.Img variant="top" style={{borderRadius:'0'}} src={props.src} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    <a
                    className="App-link"
                    href={props.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    > 
                        {props.href}
                    </a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </NavLink>
        // <Card style={{ width: '30%', border: 'none'}}>
        //     <Card.Img variant="top" style={{borderRadius:'0'}} src={props.src} />
        //     <Card.Body>
        //         <Card.Title>{props.title}</Card.Title>
        //         <Card.Text>
        //         <a
        //         className="App-link"
        //         href={props.href} 
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         > 
        //             {props.href}
        //         </a>
        //         </Card.Text>
        //     </Card.Body>
        // </Card>
    )
}