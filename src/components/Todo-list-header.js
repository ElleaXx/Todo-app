import React from 'react'

class TodoListHeader extends React.Component {
    render() {
        return (
        <div className = "todoListHeader">
            <div className = 'btnMain'>
                <button type="button" className="btn btn-outline-primary active">All</button>
                <button type="button" className="btn btn-outline-success">Active</button>
                <button type="button" className="btn btn-outline-secondary">Done</button>
            </div>
            <div >
            <label for="exampleInputEmail1">Поиск</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            </div>
        )
    }
}

export default TodoListHeader;