
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/Home';
import Navbar from '../src/Navbar';
import Current from '../src/Current';
import Prevevents from '../src/Prevevents';
import Alumni from '../src/Alumni';
import Contact from '../src/Contact';
import Faculty from '../src/Faculty';
import home_new from '../src/home_new';
import '../src/App.css';
import img4 from '../src/assets/meg_home.jpeg';



function App(){
return(  
<div>
     
    <div className="jumbotron mb-0 text-center">
    <h1 className="brand">恵</h1>
        <h1 className="brand">Megumi Academy</h1>
       
        <Router>

        <Navbar />

        <Route path="/home">
            <Home />
        </Route>

        <Route path="/current">
            <Current />
       </Route>

       <Route path="/events">
            <Prevevents />
       </Route>

       <Route path="/contactus">
            <Contact />
       </Route>

       <Route path="/alumni">
            <Alumni />
       </Route>

       <Route path="/faculty">
            <Faculty />
       </Route>

      </Router>

    </div>
    
</div>
)

}

export default App