import React, { Component } from 'react';
import Calculate from './Calculate'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      inputOne:'',
      inputTwo:'',
      select:'Add'
    }
  }
 
  handleInput(e,state){
    this.setState({[state]:e})
  }
  handleOption(e){
    this.setState({select:e.target.value})
  }

  render() {
    return (
      <div className="App">
        <header><h1>Calculator</h1></header>
        <div className="Entry">
          <input placeholder="First Number" value={this.state.inputOne} onChange={event=>this.handleInput(event.target.value, "inputOne")} />
          <select value={this.state.select} onChange={e=>this.handleOption(e)}>
            <option value ="Add">Add</option>
            <option value ="Subtract">Subtract</option>
            <option value ="Multiply">Multiply</option>
            <option value ="Divide">Divide</option>
         </select>
          <input placeholder="Second Number" value={this.state.inputTwo} onChange={event=>this.handleInput(event.target.value, "inputTwo")}/>
          
        </div>
        <div className="Boxes">
          <h3>Box One:{this.state.inputOne} </h3>
          <h3>Box Two:{this.state.inputTwo} </h3>
          <Calculate boxOne={this.state.inputOne} boxTwo={this.state.inputTwo} selection={this.state.select} updateDisplay={this.updateDisplay}/>    
        </div>
        <footer>Made by: David DeArmon</footer>
      </div>

    );
    
  }
}

export default App;
