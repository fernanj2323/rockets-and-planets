import React from 'react';
import img2 from '../assets/BFF-2.png';

import AbsoluteWrapper from "./AbsoluteWrapper";

const card1 =() => { 
    return{
    gridColumn: '1/4',
    gridRow: '1/1',
    // height: "25rem",
    margin: "50px",
    padding: '20px',
    size: '0.5',
    }
  }



  const  component =() => { 
    return{
        width: '100%',

        // backgroundColor: 'blue',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
  
   
    }
  }
  

const Arch = () => {
  
    return (
      <AbsoluteWrapper>  
    <div style={component()}>

<div class="card" style={card1()}>
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Planets Side</h5>
    <p class="card-text">This is the Planets side application, if do you want go to Rockets Side, click the next button</p>
    <a href="http://localhost:3000" class="btn btn-primary">Go to Rockets</a>
               
  </div>
</div>

    </div>
     </AbsoluteWrapper>  
    )
  }

  export default Arch;
  