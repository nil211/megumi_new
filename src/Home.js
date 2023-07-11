//import react from 'React';
import img4 from '../src/assets/meg_home.jpeg';
import img1 from '../src/assets/monideepa_home.jpeg';
import '../src/Home.css';

function Home(){
    return(
        <div className="container">
        <div className="row">
            <div className="col md-3">
                <img className="dhlogo" src={img4} alt="megumi logo"></img>
            </div>
           
            <div className="col md-3">
                <div className="row">
                <p className="intro"><hr/><span><b>Express yourself in  an exciting new language.<br/>Enrich your mind through learning and enhancing your language skills.<br/>Located in Lokhandwala, Kandivali East in Mumbai this institute is a perfect place to nurture yourself in Japanese speaking, listening, reading and writing skills.
                Learn Hiragana, Katakana, Kanji and develop a holistic Japanese skill by participating in Song contest, Speech contest and Bunkasai(Japanese Festival) under the able mentorship of Mrs. Monideepa Srinivas.<hr></hr>
                </b></span></p>
                
                <hr/>
            </div>

            <div className="row">
            <h4 className="sunip">Monideepa Srinivas</h4>
            <p className="pal1"> Degree:<br/>Specialised in: <br/><br/>Experience: 10 years</p>
            <img className="suni" src={img1} alt="Sunitha Sivadas"/>
            </div>
            </div>

            </div> 
            
        </div>
    )


}


export default Home;