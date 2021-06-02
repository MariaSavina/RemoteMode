import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Nav(){
    return(
        <Navbar expand="lg" variant="dark" bg="#112B3E">
            <NavLink to="/articles">
                <Navbar.Brand href="SHARETRADE.COM">SHARETRADE.COM</Navbar.Brand>
            </NavLink> 
        </Navbar>
    );
}