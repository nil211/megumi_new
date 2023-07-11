//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap';
import { Carousel } from 'react-bootstrap';
import img1 from '../src/assets/stagesongcontest2018.jpeg';
import img3 from '../src/assets/trophy.jpeg';
import img2 from '../src/assets/senbonzakura2016.jpeg';
require('popper.js');
//global.jQuery= require('jquery');


function Slider(){
return(
   <div>
      <div className="container">
     <Carousel>
           <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="frame slide"/>
            <Carousel.Caption>
                <h3>Faculty</h3>
                <p>Sunitha Sivadas</p>
            </Carousel.Caption>
           </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="frame slide" />
            <Carousel.Caption>
            <h3>Faculty</h3>
            <p>Sunitha Sivadas</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="frame slide"/>
            <Carousel.Caption>
            <h3>Faculty</h3>
            <p>Sunitha Sivadas</p>
            </Carousel.Caption>
            </Carousel.Item>
           
       </Carousel>
       </div>
   </div>
  
    
)
}


export default Slider;

