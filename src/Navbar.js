//import react from 'React';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/Navbar.css';

function Navbar(){
    return(
        <div className="menubar">
        <div className="container">
    <nav className="navbar navbar-light bg-light container">
           <h4><Link to="/home"> <span><b>Home</b></span></Link></h4> 
            <h4><Link to="/current"> <span><b>Course details</b></span></Link></h4>
            <h4><Link to="/events"> <span><b>Events</b></span></Link></h4>
            <h4><Link to="/faculty"> <span><b>Gallery</b></span></Link></h4>
            <h4><Link to="/contactus"> <span><b>Contact Us</b></span></Link></h4>
            <h4><Link to="/alumni"> <span><b>Alumni</b></span></Link></h4>
            
        </nav>
        </div>  
        </div>
    )
}

export default Navbar;

