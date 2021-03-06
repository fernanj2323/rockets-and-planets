// ./react-redux-client/src/components/App.js
import React from 'react';
import {  Alert } from 'react-bootstrap';

import './App.css';
import TodoForm from './TodoForm';
import {Button, Modal} from 'react-bootstrap';

import AbsoluteWrapper from "./AbsoluteWrapper";


export default class App extends React.Component {

  todoState = this.props.mappedTodoState;
  btn1Status = this.todoState.btnfilter1;
  btn2Status = this.todoState.btnfilter2;
  btn3Status = this.todoState.btnfilter3;
  btn4Status = this.todoState.btnfilter4; 


  state = {
      hover1:  this.btn1Status,
      hover2:  this.btn2Status,
      hover3:  this.btn3Status,
      hover4:  this.btn4Status,
      showClose: 0, 
    }
   



constructor(props){
  //console.log(props)
  super(props);
  this.toggleAddTodo = this.toggleAddTodo.bind(this);
  this.addTodo = this.addTodo.bind(this);
  this.cofirmDeleteTodo = this.cofirmDeleteTodo.bind(this);
}



componentWillMount(){

this.props.fetchTodos();
 }
 

 container = () => {
  return {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: '10px',
      marginTop:'20px',
  }
}

boxHeader = () => {
  return {

      padding: '10px',
      gridColumn: '1/3',
      gridRow: '1/2',
      background:  "#573FE8" ,
      color: "azure"
}}

boxPrincipal = () => {
return {

  gridColumn: '1/3',
  gridRow: '2/6',
  maxWidth:'100%',
  maxHeight:'100%'
}}

boxLateral = () => {
  return {

    gridColumn: '3/4',
    gridRow: '2/6',
    maxWidth:'100%',
    maxHeight:'100%'
}}

gray(){
    return {
      background: '#C0BFC1'
    }
}
  
dark(){
    return {
      background: '#444350'
    }
}
  
tabeRow(){
    return {
      background:  "#573FE8" ,
  
    }
}
  
thead(){
    return {
      background:  "#573FE8" ,
      color: "azure"
    }
}

colort(){
    return {
      color:  "azure" ,
  
    }
}
  
button = ()=>{
  return {
    gridColumn: '1/4',
    gridRow: '6/6'
  }
}

button2 = () => {
  return {
    position:'absolute',
    left: '52%',
    top: '221px',
    zIndex: '5',

  }
}

//tomamos lo que se escribio en el formulario 
addTodo(e){
    console.log(e)
      e.preventDefault();
      const form = document.getElementById('addTodoForm');
      console.log(form);
    
        const data = new FormData();



        data.append('name', form.name.value);
        data.append('mass', form.mass.value);
        data.append('diameter', form.diameter.value);
        data.append('height', form.height.value);
        data.append('stages', form.stages.value);
        this.props.mappedAddTodo(data);
      form.reset();

}

btn1() {
 // console.log(this.state)
  return {
    background: this.state.hover1 ? "#573FE8" : '#C0BFC1',
    color: this.state.hover1 ? "azure" : ""
  }
}
btn2() {
  return {
    background: this.state.hover2 ? "#573FE8" : '#C0BFC1',
    color: this.state.hover2 ? "azure" : ""
  }
}
btn3() {  
  return {
      background: this.state.hover3 ? "#573FE8" : '#C0BFC1',
      color: this.state.hover3 ? "azure" : ""
  }
}
btn4() {
  return {
    background: this.state.hover4 ? "#573FE8" : '#C0BFC1',
    color: this.state.hover4 ? "azure" : ""
  }
}


showDeleteModal(RocketDelete){
  this.props.mappedshowDeleteModal(RocketDelete);
}

cofirmDeleteTodo(){
  this.props.mappedDeleteTodo(this.props.mappedTodoState.todoToDelete);
}
hideDeleteModal(){
  this.props.mappedhideDeleteModal();
}


  

toggleAddTodo(e){
    e.preventDefault();
    if ( this.state.showClose === 1){
      this.setState({showClose:0})
    }else{ 
      this.setState({showClose:1})
    }

     this.props.mappedToggleAddTodo();
}
  

filterSelected(c){
 //  console.log('filtro numero:', c)
 
  if (c === 1){
    this.setState({hover1:1})
    this.setState({hover2:0})
    this.setState({hover3:0})
    this.setState({hover4:0})

    //this.btn1()

  }
  if (c === 2){
    this.setState({hover1:0})

    this.setState({hover2:1})
    this.setState({hover3:0})
    this.setState({hover4:0})

  }

  if (c === 3){
    this.setState({hover1:0})

    this.setState({hover2:0})
    this.setState({hover3:1})
    this.setState({hover4:0})
  }

  if (c === 4){
    this.setState({hover1:0})

    this.setState({hover2:0})
    this.setState({hover3:0})
    this.setState({hover4:1})

  }

   this.componentWillMount()
}



  render(){
 
    //state de app 
    
     const appState = this.props.mappedAppState;
     const todoState = this.props.mappedTodoState;
     const todos = todoState.todos;
     this.hideDeleteModal = this.hideDeleteModal.bind(this);
     this.cofirmDeleteTodo = this.cofirmDeleteTodo.bind(this);
     



     if (this.state.hover1 === 1){

      todos.sort(function (a,b){return (a.mass - b.mass)})
      
    }
    if (this.state.hover2){

      todos.sort(function (a,b){return (a.diameter - b.diameter)})

    }
    if (this.state.hover3){

      todos.sort(function (a,b){return (a.height - b.height)})
    }
    if (this.state.hover4){

      todos.sort(function (a,b){return (a.stages - b.stages)})
    }


    return(


<>

<AbsoluteWrapper>  
  <div style={this.container()}>

    
    <div style={this.button()}> 
       {this.state.showClose === 0 &&
          <Button onClick={this.toggleAddTodo}>
           <div eventKey={1}>
             Add Rocket
            </div>
          </Button>
        }
    </div>

    <div style={this.button2()}> 
      {this.state.showClose === 1 &&
        <Button onClick={this.toggleAddTodo}>
            <div eventKey={1}>
              Close
              </div>
        </Button>
      }
    </div>
    
      
    {this.state.showClose === 0 &&
      <div style={this.boxHeader()}>Rockets List</div>  }


      <div style={this.boxLateral()}>

          <div className="list-group">
                    <button  disabled className="table-dark"> Order By  </button>

                      <button style={this.btn1()} onClick={() => this.filterSelected(1)} type="button" class="list-group-item list-group-item-action">Mass </button>
                      <button style={this.btn2()}  onClick={() => this.filterSelected(2)} type="button" class="list-group-item list-group-item-action">Diameter</button>
                      <button style={this.btn3()}  onClick={() => this.filterSelected(3)} type="button" class="list-group-item list-group-item-action">Height</button>
                      <button style={this.btn4()}  onClick={() =>this.filterSelected(4)} type="button" class="list-group-item list-group-item-action" >stages</button>
          </div>
      </div>



      <div style={this.boxPrincipal()}>
           
       
            <div> 
                   {appState.showAddTodo && <TodoForm addTodo={this.addTodo} />}
            </div>
          

          {<div className="table-responsive">
    <table className="table table-dark" >


      <thead style={this.thead()}>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mass</th>
            <th scope="col">Diameter</th>
            <th scope="col">Height</th>
            <th scope="col">Stages</th>
            <th scope="col">Actions</th>
        </tr>
    </thead>



      <tbody>
        {todos.map((rocket,i) => 
    <tr key={i}>
        <td> {i} </td>
        <td>{rocket.name}</td>
        <td>{rocket.mass}</td>
        <td>{rocket.diameter}</td>
        <td>{rocket.height}</td>
        <td>{rocket.stages}</td>
        


 
        <td>

           <Button onClick={() => this.showDeleteModal(rocket)} bsStyle="danger" bsSize="xsmall">
                   Delete
           </Button>
          </td>
     </tr> )
      }
      </tbody>
    </table>
</div> }
      </div>

 </div>
 </AbsoluteWrapper>  







<Modal
show={todoState.showDeleteModal}
aria-labelledby="contained-modal-title"
>
<Modal.Header>
  <Modal.Title id="contained-modal-title">Delete Rocket</Modal.Title>
</Modal.Header>
<Modal.Body>

{todoState.todoToDelete && !todoState.error && !todoState.isFetching &&
<div>
Are you sure you want to delete the rocket <strong>{todoState.todoToDelete.name} </strong> ?
</div>
}

{todoState.todoToDelete && todoState.error &&
  <div bsStyle="warning">
Failed. <strong>{todoState.error} </strong>
</div>
}

{todoState.todoToDelete && !todoState.error && todoState.isFetching &&
  <div bsStyle="success">
<strong>Deleting.... </strong>
</div>
}

{!todoState.todoToDelete && !todoState.error && !todoState.isFetching&&
  <Alert bsStyle="success">
 Deleted succefull
</Alert>
}
</Modal.Body>
<Modal.Footer>
 {!todoState.successMsg && !todoState.isFetching &&
   <div>
   <Button onClick={this.cofirmDeleteTodo}>Yes</Button>
   <Button onClick={this.hideDeleteModal}>No</Button>
   </div>
}

  <Button onClick={this.hideDeleteModal}>Close</Button>
 
</Modal.Footer>
</Modal>



</>
    );
  }
}
