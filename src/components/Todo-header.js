import React from 'react';


class Header extends React.Component {
    render() {
        const {todos} = this.props
        return (
        <div className = "d-flex justify-content-between align-items-center mt-4">
            <h1>
                Todo App
            </h1>
            <h5 className ='mr-3' style = {{display: 'flex', justifyContent:'flex-end'}}>
                1 more yo do. 1 done
            </h5>
        </div>
        )
        }
}

export default Header