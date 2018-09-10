import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
     name:'',
     list:[]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event){
    this.setState({name:event.target.value})
  }

  handleClick(){
    const {list,name} = this.state
    let newList = list.slice()
    newList.push(name)
    this.setState({list:newList,name:''})
  }

  render() {
    console.log(this.state.name)

    let people = this.state.list.map((e,i,arr)=>{
      return <li>{e}</li>
    })

    return (
      <div>
      <h1>Welcome to my App</h1>
      <h1>Hello, my name is {this.state.name}</h1>
      <input placeholder="Enter your name..." onChange={(event)=>this.handleChange(event)} value={this.state.name}/>
      <button onClick={this.handleClick}> Submit </button>
      {/* <div>{this.state.list}</div> */}
      <ul>{people}</ul>
      </div>
      
    );
  }
}
export default App;
