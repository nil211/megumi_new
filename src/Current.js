import '../src/Current.css';


function Current(){
return(
<div className="container">

    <div className="courses">
    <h1>Current Courses</h1>
    <h2>Year : 2021-22</h2>
    </div>
   
<table className="table table-striped">
    <div className="my_table">
    <thead className="my-table-head">
        <tr>
            <th scope="col"><span background-color="red">Name</span></th>
            <th scope="col">Content</th>
            <th scope="col">Duration</th>
            <th scope="col">Class timings</th>

            
        </tr>
    </thead>
    <tbody>
        <tr>
            
            <td>Basic</td>
            <td>Basic steppings, body and hand movements</td>
            <td>Duration: 1 yr</td>
            <td>Sat & Sun : 9-10 am</td>
            
        </tr>
        <tr>
        
            <td>Bal Junior</td>
            <td>Adavus- Basic steppings,Tattadavu, Kuttadavu</td>
            <td>Duration: 1 yr</td>
            <td>Sat & Sun : 10-11 am</td>
           
        </tr>
        <tr>
       
            <td>Bal Senior</td>
            <td>Basic</td>
            <td>Duration: 1 yr</td>
            <td>Sat & Sun : 12-1 pm</td>
            
        </tr>
        <tr>
     
            <td>1st Yr. Diploma</td>
            <td>Basic</td>
            <td>Duration: 1 yr</td>
            <td>Sat & Sun : 5-6:30 pm</td>
        </tr>
        <tr>
      
            <td>2nd Yr. Diploma</td>
            <td>Basic</td>
            <td>Duration: 1 yr</td>
            <td>Sat & Sun : 6:30-8 pm</td>
        </tr>
    </tbody>
    </div>  
</table>




</div>
)
}


export default Current;