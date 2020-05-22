import React from 'react'
import ls from 'local-storage'

class ColorModeSwitch extends React.Component {
    constructor(){
        super()
        this.state= {
            checked: false
        }
    }

    handleChange = (e)=>{
        this.setState((prevState)=>{
            return({
                checked: !prevState.checked
            })
        })
        
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            ls.set('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            ls.set('theme', 'light');
        }    
    }

    componentDidMount(){
        if (ls('theme')) {
          const theme = ls('theme');
          if (theme === 'dark') {
            this.setState({
                checked: true
            })
            document.documentElement.setAttribute('data-theme', 'dark');
          }
        } else {
          this.setState({
            checked: false
          })
        }
      }


    render(){
        return(
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
                <input 
                    type="checkbox" 
                    id="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChange}
                />
                <div className="slider round"></div>
            </label>
        <em> {this.state.checked ? 'Light Mode' : 'Dark Mode'}</em>
        </div>
         
        )
    }
}
export default ColorModeSwitch