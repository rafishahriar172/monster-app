import React, { Component } from 'react'
import CardComponent from '../card/card.component';
import './card-list.style.css'

export default class CardList extends Component {
  render() {    
    const {monsters} = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => { 

          return(
            <CardComponent monster = {monster} />
        )
        ;})}
      </div>
    )
  }
}
