import React, { Component } from 'react'

import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.component';
import './App.css'

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ''
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }      
      ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();          
    this.setState(() => {
      return { searchField };
    })
  }

  render() {

    const { monsters , searchField } = this.state;
    const { onSearchChange } = this;


    const filterdMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
          });


    return (
      <div className='App'>
        <h1 className='app-title'>Monster Roladex</h1>


        <SearchBox 
        className = 'monsters search-box'
        onChangeHandler ={onSearchChange}
        placeholder = 'search monster'
         />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}
