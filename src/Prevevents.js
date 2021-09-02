//import react from 'React';
import img3 from '../src/assets/AbinayaDarpana.jpeg';
import img4 from '../src/assets/HastaPrayoga.jpeg';
import img1 from '../src/assets/Natyashastra.jpeg';
import img2 from '../src/assets/CarnaticMusic.jpeg';
import CadUI from '../src/CardUI';

function Prevevents(){
return(
    <div className="container">
        <h4>In addition to the regular classes, we also offer special coachings for the following:</h4>
        <hr/>
    <div className="row">
        <div className="col-md-4">
            <CadUI image={img1} title="Natyashastra" text="Blablablabjwudwwyuiwywuwuuwvwutvwuytwu hdgiuwfufguwfguw"/>
        </div>

        <div className="col-md-4">
            <CadUI image={img4} title="Hasta Prayoga" text=".... "/>
        </div>

        <div className="col-md-4">
            <CadUI image={img3} title="Abinaya Darpana" text="Blablablabjwudwwyuiwywuwuuwvwutvwuytwu hdgiuwfufguwfguw"/>
        </div>
    </div>
    <hr/>
    <div className="row">
        <div className="col-md-4">
            <CadUI image={img2} title="Carnatic Music" text="Blablablabjwudwwyuiwywuwuuwvwutvwuytwu hdgiuwfufguwfguw"/>
        </div>

        <div className="col-md-4">
            <CadUI image={img4} title="Hasta Prayoga" text=".... "/>
        </div>

        <div className="col-md-4">
            <CadUI image={img3} title="Abinaya Darpana" text="Blablablabjwudwwyuiwywuwuuwvwutvwuytwu hdgiuwfufguwfguw"/>
        </div>
    </div>
    </div>
    )
}

export default Prevevents;