import React from 'react';
import TodoListItemFunc from '../components/Todo-list-item'

const InputList = ({todos}) => {
    const elements = todos.map((item) =>{
        return (
        <li key ={item.id} className ="list-group-item">
            <TodoListItemFunc {...item}/>
        </li>)
    })

    return (
        <ul className ="list-group">
            {elements}
        </ul>
    )
    }
export default InputList