import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'

export default function Articles(props){
    return(
        <div className='articleBox'>
            <h2 className="bigTitle">{props.title}</h2>
            <img src={props.src} style={{width: '100%', height:'400px'}}/>
            <div className="bigDescription">{props.description}</div>
            <div className="bigComment">{props.commentName}<hr/>{props.сomment}</div>
        </div>
//         <Card>
//     <Card.Img variant="top" src="holder.js/100px180" />
//     <Card.Body>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the bulk
//         of the card's content.
//       </Card.Text>
//     </Card.Body>
//   </Card>

    )
}