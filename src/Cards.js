import React from 'react';
import CadUI from '../src/CardUI';

function Cards(){
<div className="container-fluid d-flex justify-content-center">
    <div className="row">
        <div className="col-md-4">
            <CadUI />
        </div>
        <div className="col-md-4">
            <CadUI />
        </div>
        <div className="col-md-4">
            <CadUI />
        </div>
    </div>
</div>
}

export default Cards;