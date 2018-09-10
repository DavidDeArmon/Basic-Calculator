import React, {Component} from 'react'
import "./nav.css"

class Nav extends Component{
    constructor(){
        super()

        this.state = {
            toggle: false,
            color:'black'

        }
        this.toggleState = this.toggleState.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }
    
    toggleState(){
        this.setState({toggle:!this.state.toggle})
    }
    changeColor(){
        let color = '#' +(((1<<24) * Math.random())|0).toString(16)
        this.setState({color})
    }
    render(){
        return(

        <div style = {{background:this.state.color}}className="nav">
            <input type="button" style={{fontSize:16,marginRight:20,borderRadius:4}} value={this.state.toggle===true?'Sign Out':'Sign In'} onClick={this.toggleState}/>
            <button style={{fontSize:16,marginRight:20,borderRadius:4}}onClick={this.changeColor}>Change Color</button>
            <input type="text" placeholder="Enter Color"/>
        </div>

        )
    }

}

export default Nav