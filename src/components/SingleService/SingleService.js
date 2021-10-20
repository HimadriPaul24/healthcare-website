import React from 'react';
import { NavLink } from 'react-router-dom';
import './SingleService.css'

const SingleService = (props) => {

    const {name,description,img,id} = props.service;


    return (
        <div>
            
  <div className="m-2">
  <div class="card single-card">
    <img className="img-service w-50" src={img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <p class="card-text">{description}</p>
      <br />
      <NavLink to={`/services/${id}`}>
      <button className="btn btn-primary">Details</button>
      </NavLink>
    </div>
    
  </div>
  </div>
  
  
</div>
        
    );
};

export default SingleService;