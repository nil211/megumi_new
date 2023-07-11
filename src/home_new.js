import React from "react";
import img4 from '../src/assets/meg_home.jpeg';

function home_new(){
return(
    <div className="container">
        <div className="row">
            <div className="col md-3">
                    <img className="dhlogo" src={img4} alt="megumi logo"></img>
            </div>
           
            <div className="col md-3">
                <p className="intro"><hr/><span><b>Express yourself in  an exciting new language.<br/>Enrich your mind through learning and enhancing your language skills.<br/>Located in Lokhandwala, Kandivali East in Mumbai this institute is a perfect place to nurture yourself in Japanese speaking, listening, reading and writing skills.
                Learn Hiragana, Katakana, Kanji and develop a holistic Japanese skill by participating in Song contest, Speech contest and Bunkasai(Japanese Festival) under the able mentorship of Mrs. Monideepa Srinivas.<hr/>
                </b></span></p>
                <hr/>
            </div>
         
        </div>
   
    </div>
)



}
export default home_new;