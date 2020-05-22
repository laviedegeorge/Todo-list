import React from 'react'
//import { render } from '@testing-library/react';
import ColorModeSwitch from './ColorModeSwitch'
import AddTodo from './AddTodo'

class Header extends React.Component {
    
    render(){
        return(
            <header>
                <div>
                    <h1>Todo List</h1>
                    <ColorModeSwitch/>
                </div>
                <div>
                    <AddTodo
                    edit= {this.props.edit}
                    btnText='Add'
                    />
                </div>
            </header>
        )
    }
}

export default Header