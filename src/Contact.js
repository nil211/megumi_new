import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '../src/assets/Sunithanew.jpeg';
//import img2 from '../src/assets/cosmos.jpg';
//import img3 from '../src/assets/calendula.jpg';



function Contact(){
    return(
        <div>
           
           <div className="container">
            <img className="suni" src={img1} alt="Sunitha"/>
            <h2>Any Queries... Please contact us ..</h2>
            </div>
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    <tr>
                        <th>Address: </th>
                        <th>In case of any query please submit and we will call you back.</th>
                        
                    </tr>
                    <tr>
                    <td>Dhwani <br/> Mhada, 1st Lane., Shop no. 33<br/>9320020304 <br/> Email:<span><b>sunitha123@gmail.com</b></span></td>
                    <td>
                        <form>
                            <div className="form-group container">
                               
                            <div className="container"><label>Name:</label>
                        <input  type="text" id="name" placeholder="Enter name"/> </div>
                        <br/>
                        <div className="container"></div><label>Mobile no.:</label>
                        <input type="text" id="phone" placeholder="Enter Phone No."/> </div>
                        <br/>
                        <div className="container">
                        <label>Query</label>
                        <input type="text" id="query" placeholder="Enter your query" /><br/>
                        </div>
                        <button className="btn btn-small btn-primary" type="submit">Submit</button>
                       
                        </form></td>
                    </tr>
                    <tr>
                        <td><span><b>Residence:</b></span><br/>2D-304, Green Meadows,<br/> Lokhandwala Township.<br/>Kandivali(E)</td>
                    </tr>
                    </tbody>
                </table>
            </div>


        </div>

)
}


export default Contact;