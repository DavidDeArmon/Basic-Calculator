import React, { Component } from 'react';
import PeopleList from "./components/PeopleList.js"
import PickedList from "./components/Picked.js"
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      people:['Jon','Bob','Tom','Sam','Jim'],
      picked:[]
    }
    // this.handleConfirm=this.handleConfirm.bind(this)
  }

  handleConfirm=(person)=>{
    console.log(this.state.people)
    const peopleCopy = this.state.people.slice();
    const index = peopleCopy.indexOf(person);
    peopleCopy.splice(index,1);

    const pickedCopy = this.state.picked.slice();
    pickedCopy.push(person);
    this.setState({picked:pickedCopy});

  }
  
  render() {
    const {people,picked} = this.state;
    // console.log(this.state.people)
    let peopleList = people.map((e,i,arr)=>{
      return <PeopleList 
        key={i} 
        name={e} 
        confirmMethod={this.handleConfirm}
        />;
    });
    let pickedList = picked.map((e,i,arr)=>{
      return <PickedList key={i} name={e}/>;
    });



    return (
      <div>
       <h3>General List</h3>
        {peopleList}
       <h3>Picked List</h3>
        {pickedList}
      </div>
    );
  }
}

export default App;
