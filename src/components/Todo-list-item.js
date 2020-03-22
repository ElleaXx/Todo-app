import React from 'react'

class TodoListItemFunc extends React.Component {

    state = {
        done: false
    };

    click = () => {
        console.log(`Yes ${this.props.label}`)
        this.setState({
            done: true
        })

//         let elements = document.getElementsByClassName("todoListItem");
//         for (var i = 0; i < elements.length; i++) {
//         elements[i].classList.add("done")
//         ;
// }
    }

    render() {

        const {label, important = false} = this.props
        const {done} = this.state

        let classNames = 'todoListItem';
        if(done) {
            classNames += ' done'
        }

        const style = {color: important ? 'tomato' : 'black'}
        return (
            <div className = {classNames} onClick = {this.click}>
                <span style = {style} >
                    {label}
                </span>
                <div>
                    <button type="button" className="btn btn-danger mr-3">Удалить</button>
                    <button type="button" className="btn btn-success">Пометить</button>
                </div>
            </div>
            )
    }
}

export default TodoListItemFunc;

