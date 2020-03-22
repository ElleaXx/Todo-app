import React from 'react'

class TodoListItemFunc extends React.Component {

    state = {
        done: false,
        fasten: false
    };
    click = () => {
        console.log(`Yes ${this.props.label}`)
        this.setState(({done}) => {
            // done: true
            return{
                done: !done
            }
        })
    }
    fastenBtn = () => {
        this.setState(({fasten}) =>{
            return {
                fasten: !fasten
            }
        })
    }
    render() {
        const {label, important = false,onDeleed} = this.props
        const {done, fasten} = this.state
        let classNames = 'todoListItem';
        if(done) {
            classNames += ' done'
        }
        const style = {color: important ? 'tomato' : 'black'
    }
        let classNamesBtnFasten = 'btn btn-success';
        if(fasten == true) {
            classNamesBtnFasten += ' bg-primary'
        }
        return (
            <div className = {classNames} >
                <span style = {style} onClick = {this.click}>
                    {label}
                </span>
                <div>
                    <button type="button" className="btn btn-danger mr-3" onClick = {onDeleed}>Удалить</button>
                    <button type="button" className={classNamesBtnFasten} onClick = {this.fastenBtn}>Закрепить</button>
                </div>
            </div>
            )
    }
}

export default TodoListItemFunc;

