import React, { Component } from 'react';
import './App.css';
import InputList from './components/Todo-list'
import TodoListHeader from './components/Todo-list-header'
import Header from './components/Todo-header'

class App extends Component {
  render() {
    const todoData = [
      {label: 'Drink Coffee',important: false, id: 1, done: false},
      {label: 'Make Awesome App',important: true, id: 2},
      {label: 'Have a lunch',important: false, id: 3}
    ]
    return (
      <div className = 'container'>
        <Header />
        <TodoListHeader />
        <InputList todos = {todoData}/>
      </div>
    )
  }
}
export default App;
