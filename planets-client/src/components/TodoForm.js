// ./react-redux-client/src/components/TodoForm.js
import React from 'react';
import { FormGroup,FormControl } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

// estilos 
const Container = () => {
return { 
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  marginBottom:'20px',
  gridGap: '8px',
  backgroundColor: "#17202A ",
  opacity: '0.8',
  padding: '5px'

}

}


const header = () => {
  return{
 
  background:'#799f0c',
  color: 'azure',
  gridColumn: '1/4',
  gridRow: '1/2',
  alignContent: 'center',
 'text-align': 'center',
  padding: '6px'
  // backgroundColor:'red'
  }
}


// name
const  item1 = () =>{
  return {
    gridColumn: '1/2',
    gridRow: '2/3',
  }

}

// mass
const  item2 = () =>{
  return {
    gridColumn: '1/2',
    gridRow: '3/4',
  }

}

// diameter
const  item3 = () =>{
  return {

    gridColumn: '2/3',
    gridRow: '2/3',
  }

}


// height
const  item4 = () =>{
  return {
    gridColumn: '2/3',
    gridRow: '3/4',
  }

}


// stages
const  item5 = () =>{
  return {
    gridColumn: '3/4',
    gridRow: '2/3',
    'text-align': 'center'
  }

}

// button
const  item6 = () =>{
  return {
     gridColumn: '3/4',
     gridRow: '4/5',
  }
}










const TodoForm = (props) => {
  
  return (
    <form className="form form-horizontal" id="addTodoForm" onSubmit={props.addTodo}>
    <div  style={Container()}>
          <h3 style={header()} className="table-dark" > Create Planet </h3>

              <FormGroup style={item1()}>
                      <FormControl type="text" placeholder="Name"name="name"/>
              </FormGroup>

              <FormGroup style={item2()}>
                          <FormControl type="number" placeholder="Distance to Earth (light years)" name="distance"/>
              </FormGroup>

              <FormGroup  style={item3()}>
                      <FormControl type="number" placeholder="Radius (mi)" name="radius"/>
              </FormGroup> 

              <FormGroup  style={item4()}>       
                  <FormControl type="number" placeholder="Orbital period (Days)" name="orbital"/>
              </FormGroup>

              <FormGroup  style={item5()}>  
                <FormControl type="number" placeholder="Temperature (°C)" name="temperature"/>
              </FormGroup>

              <FormGroup  style={item6()}>
              <Button type="submit" class="list-group-item list-group-item-action">Submit</Button>
              

            
              </FormGroup>
       
  </div>

    </form>
  );
}

export default TodoForm;
