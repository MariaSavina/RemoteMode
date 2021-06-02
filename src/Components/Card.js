import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

export default function OneCard(props){
    const { id, imageUrl, title } = props.data;
    return(
        <NavLink id="card" to={`/articles/${id}`}>
            <Card style={{ border: 'none'}}>
                <Card.Img variant="top" style={{borderRadius:'0'}} src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
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
    );
}