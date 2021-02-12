import './App.css';
import Person from './Person/Person'
import React, { Component } from "react";
import DropDownWithChage from './DropDown/DropDownWithChange';
import DropDownWithoutChange from './DropDown/DropDown';

class App extends Component {

  // reserved keyword
  state = {
    person: [
      { id: 'ab1', name: "ashish", age: 23 },
      { id: 'ab2', name: "Piyush Bhanderi", age: 24 },
      { id: 'ab3', name: "Maxmilian", age: 30 }
    ],
    isVisible: false,
    my_states: ['Gujarat', 'Maharastra', 'Panjab', 'Karnataka'],
    selectedState: 'Select one',
    my_city: [
      { "Gujarat": ['Surat', 'Ahmedabad'] },
      { "Maharastra": ['Mumbai'] },
      { "Panjab": ['Amritsar'] },
      { "Karnataka": ['Banglore'] }
    ],
    currentCity: []
  };

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { id: 'ab1', name: "ashish", age: 23 },
        { id: 'ab2', name: "Piyush Bhanderi", age: 24 },
        { id: 'ab3', name: "Maxmilian", age: 30 }
      ]
    });
  };

  onChangeHandler = (e, id) => {

    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });

    const cur = {
      ...this.state.person[personIndex]
    };
    cur.name = e.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = cur;

    this.setState({
      person: persons
    });
  }

  toggleHandler = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  deletepersonHandler = (index) => {
    const person = this.state.person;
    person.splice(index, 1);
    this.setState({
      person: person
    });
  };

  chnageState_ignore = (e) => {
    alert(e.target.value);
    this.setState({ selectedState: e.target.value });
    this.setState({ currentCity: this.state.my_city[this.state.my_states.indexOf(e.target.value)][[e.target.value]] }
      , () => { console.log(this.state.currentCity) });
    console.log(e.target.value);
  }

  chnageState = (e) => {
    let val = e.target.value;
    alert(val);
    if (val !== 'Select') {
      this.setState({ selectedState: val });
      this.setState({ currentCity: this.state.my_city[this.state.my_states.indexOf(e.target.value)][[e.target.value]] }
        , () => { console.log(this.state.currentCity) });
    } else {
      this.setState({ selectedState: '' });
      this.setState({ currentCity: [] });
    }

  }

  render() {

    let city = null;
    if (this.state.currentCity.length !== 0) {
      city = <DropDownWithoutChange data={this.state.currentCity} />
    }

    let person = null;

    if (this.state.isVisible) {
      person = (
        <div>
          {
            this.state.person.map((p, index) => {
              return <Person changed={(e) => this.onChangeHandler(e, p.id)} key={p.id} click={() => this.deletepersonHandler(index)} name={p.name} age={p.age} />
            })
          }
        </div>

      );
    }

    return (
      <div className="App" >
        <h1>Hi, I am React App</h1>
        <p>This is my world!</p>
        <button onClick={this.toggleHandler}>Toggle Me</button>
        {person}

        <br />
        <DropDownWithChage changed={this.chnageState} data={this.state.my_states} />
        <br />
        {city}
      </div>
    );
  };
}

export default App;

/*
<div>
          <p>Currently selected : {this.state.selectedState} </p>
          <select onChange={this.chnageState}>
            <option>Select one</option>
            {
              this.state.my_states.map((st) => {
                return (<option value={st} key={st}> {st} </option>)
              })
            }
          </select>
        </div>
*/