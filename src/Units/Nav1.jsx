import React from 'react'
import { Link } from 'react-router-dom';
export default function Nav1(){

 return (
    <div>
 <nav>
       <ul className='d-flex justify-content-around list-unstyled my -5'>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/Addbloglink">Add bloglink</Link>
          </li>
        
       </ul>
 </nav>
 </div>
 );
};