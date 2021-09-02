import React from 'react';
//import img1 from '../src/assets/cosmos.jpg';
import '../src/CadUI.css';

const CadUI = props=>{
return(
    <div className="card text-center">
        <div className="overflow">
            <img src={props.image} alt="Cosmos" className="card-img-top"/>
        </div>

        <div className="card-body text-dark">
            <h4 className="card-title">{ props.title }</h4>
            <p className="card-text text-secondary">{ props.text }</p>
            <button className="btn btn-lg btn-success">Join</button>
        </div>
    </div>
);
}

export default CadUI;