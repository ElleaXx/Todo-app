import React, { Component } from 'react';
import './App.css';
import InputList from './components/Todo-list'
import TodoListHeader from './components/Todo-list-header'
import Header from './components/Todo-header'

class App extends Component {

  state = {
    todoData: [
      {label: 'Drink Coffee',important: false, id: 1, done: false},
      {label: 'Make Awesome App',important: true, id: 2},
      {label: 'Have a lunch',important: false, id: 3}
  ]}

  // удаление
  deletedItem = (id) => {
    console.log(`Deleted in`)
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id == id );

      const newArray = [
        ...todoData.slise(0, idx),
        ...todoData.slise(idx + 1)
      ]
      return{
        todoData: newArray
      }
    })
  }
  render() {
    const {todoData} = this.state
    const {listHroupItem,fasten} = this.props
    let listHroupItemClick = 'list-group-item'
    if(fasten == true) {
      listHroupItemClick += ' bg-primary'
        console.log('sfsf')
    }


    // const todoData = [
    //   {label: 'Drink Coffee',important: false, id: 1, done: false},
    //   {label: 'Make Awesome App',important: true, id: 2},
    //   {label: 'Have a lunch',important: false, id: 3}
    // ]
    return (
      <div className = 'container'>
        <Header />
        <TodoListHeader />
        <InputList todos = {todoData} 
                    listHroupItem = {listHroupItemClick}
                    onDeleed = {this.deletedItem}/>
        <div className = 'd-flex justify-content-center mt-4'>
        <button type="button" class="btn btn-outline-warning">Добавить</button>
        </div>
      </div>
    )
  }
}
export default App;
