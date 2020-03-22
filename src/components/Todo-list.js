import React from 'react';
import TodoListItemFunc from '../components/Todo-list-item'

class InputList extends React.Component {
    render(){

        const {todos,listHroupItem,onDeleed} = this.props
        const elements = todos.map((item) =>{
        return (
        <li key ={item.id} className ={listHroupItem}>
            <TodoListItemFunc {...item}
            onDeleed ={() =>onDeleed(item.id)}/>
        </li>
        )
    })

    return (
        <ul className ="list-group">
            {elements}
        </ul>
    )
    }
}

export default InputList