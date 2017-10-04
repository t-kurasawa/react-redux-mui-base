import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoComponent from '../components/AddTodoComponents'

// container
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text));
    }
  }
};

const AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodoComponent);

export default AddTodo;
