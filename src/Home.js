//import react from 'React';
import img4 from '../src/assets/dhwanilogo.jpeg';
import img1 from '../src/assets/Sunithanew.jpeg';
import '../src/Home.css';

function Home(){
    return(
        <div className="container">
        <div className="row">
            <div className="col md-3">
            <img className="dhlogo" src={img4} alt="Dhwani logo"></img>
            
            </div>
           
            <div className="col md-3">
            <div className="row">
            <p className="intro">"My tryst with the Shastras and Theory of Indian Classical dances started in 2014 when I joined for MFA from Sastra University, Tanjavur. I am blessed  that the lamp of that knowledge was lit inside me by non other than the living Goddess Saraswathi of Indian classical dance Padmabhushan <span><b>Dr. Padma Subrahmanyam</b></span>. The yearning for more knowledge and learning under eminent Gurus continued... I realised that knowledge will grow only if it's shared and sharing is such a satisfying and enriching process. 
            Very happy that I completed taking 'ABHINAYA DARPANAM' sessions for 2 batches and 'NATYASASTRAM' sessions for 1 batch. Looking forward for more to spread the knowledge of our Invaluable Shastras on Indian Classical dances."
            </p>
            
            <h4 className="sunip">.... Sunitha Sivadas</h4>
            <hr/>
            
            </div>
            <div className="row">
            <p className="pal1">" Mahaanata samaarambam <br/>Bharataacharya madhyamam <br/>Asmadaacharya paryantam<br/>Vande Guru paramparaam"</p>
            <img className="suni" src={img1} alt="Sunitha Sivadas"/>
            </div>
            </div>

            </div> 
            
        </div>
    )


}


export default Home;