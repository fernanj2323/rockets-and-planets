// ./react-redux-client/src/containers/App.js
import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import * as todoActions from '../actions/todoActions';
import App from '../components/App';
import Navbah from '../components/Navbah';
import TodoForm from '../components/TodoForm';


// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
     mappedAppState: state.appState,
    mappedTodoState: state.todoState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchTodos: () => dispatch(todoActions.fetchTodos()),
    mappedToggleAddTodo: () => dispatch(appActions.toggleAddTodo()),
    mappedAddTodo: todo => dispatch(todoActions.addNewTodo(todo)),
    mappedDeleteTodo: todoToDelete => dispatch(todoActions.deleteTodo(todoToDelete)),
    mappedshowDeleteModal: todoToDelete => dispatch(todoActions.showDeleteModal(todoToDelete)),
    mappedhideDeleteModal: () => dispatch(todoActions.hideDeleteModal())
  }
}


//enviamos a app component 
export default connect(mapStateToProps,mapDispatchToProps)(App, Navbah, TodoForm);
