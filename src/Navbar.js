//import react from 'React';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/Navbar.css';

function Navbar(){
    return(
        <div className="menubar">
        <div className="container">
    <nav className="navbar navbar-light bg-light container">
           <h4><Link to="/home"> Home</Link></h4> 
            <h4><Link to="/current">Course details</Link></h4>
            <h4><Link to="/events">Events</Link></h4>
            <h4><Link to="/faculty">Faculty</Link></h4>
            <h4><Link to="/contactus">Contact Us</Link></h4>
            <h4><Link to="/alumni">Alumni</Link></h4>
            <button className="btn btn-primary btn-small">Login</button>
        </nav>
        </div>  
        </div>
    )
}

export default Navbar;

