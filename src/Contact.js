import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '../src/assets/monideepa_home.jpeg';
//import img2 from '../src/assets/cosmos.jpg';
//import img3 from '../src/assets/calendula.jpg';



function Contact(){
    return(
        <div>
           
           <div className="container">
            <img className="suni" src={img1} alt="Monideepa"/>
            
            </div>
            <div>
                <table className="table table-bordered">
                    
                    <tbody>
                    
                    <tr>
                        Monideepa Srinivas
                    </tr>

                    <tr>
                    <td><span><b>Megumi </b></span><br/>Flat # 2C-304, Green Meadows,<br/> Lokhandwala Township. Kandivali East.<br/>Ph - 9833567745 <br/> Email:<span><b>monideepasrinivas@gmail.com</b></span></td>
                    <td>

                        <form>
                            <div className="form-group container">
                               
                                <div className="container"><label>Name:</label>
                                <input  type="text" id="name" placeholder="Enter name"/> 
                                </div>
                                <br/>

                                <div className="container"></div>
                                <label>Mobile no.:</label>
                                <input type="text" id="phone" placeholder="Enter Phone No."/> 
                            </div>
                                <br/>
                            <div className="container">
                                <label>Query</label>
                                <input type="text" id="query" placeholder="Enter your query" /><br/>
                            </div>
                            <button className="btn btn-small btn-primary" type="submit">Submit</button>
                       
                        </form></td>
                    </tr>
                    <tr>

                    </tr>
                    </tbody>
                </table>
            </div>


        </div>

)
}


export default Contact;