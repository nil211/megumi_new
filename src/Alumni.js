import React from 'react';
import '../src/alu.css';
import img1 from '../src/assets/cosmos.jpg';
import img2 from '../src/assets/calendula.jpg';
import img3 from '../src/assets/chrysanthymum.jpg';

function Alumni(){
    return(
<div className="container">
<table classname="alu">
        <tr>
           <td className="panel-left"><img className="aluimage" src={img1} alt=""/></td>  
           <td className="panel-title"><p className="para">Memories...</p></td> 
           <td className="panel-right"><img className="aluimage" src={img1} alt=""/></td>  
           <td className="panel-title"><p className="para">Memories...</p></td> 
           <td className="panel-right"><img className="aluimage" src={img1} alt=""/></td>  
           <td className="panel-title"><p className="para">Memories...</p></td> 
        </tr>
        <tr>
        <td className="panel-left"><img className="aluimage" src={img2} alt=""/></td>  
           <td className="panel-title"><p className="para">".... excellent experience!!"</p></td> 
           <td className="panel-right"><img className="aluimage" src={img2} alt=""/></td>  
           <td className="panel-title"><p className="para">Memories...</p></td> 
           <td className="panel-right"><img className="aluimage" src={img1} alt=""/></td>  
           <td className="panel-title"><p className="para">Memories...</p></td> 
        </tr>
        <tr>
        <td className="panel-left"><img className="aluimage"src={img3} alt=""/></td>  
           <td className="panel-title"><p className="para">... wish we could join again!!</p></td> 
           <td className="panel-right"><img className="aluimage"src={img3} alt=""/></td>  
           <td className="panel-title"><p className="para">Memories...</p></td> 
           <td className="panel-right"><img className="aluimage" src={img1} alt=""/></td>  
           <td className="panel-title"><p className="para">Memories...</p></td> 
        </tr>
</table>

</div>

    )
}



export default Alumni;