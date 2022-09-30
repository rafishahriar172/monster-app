import React, { Component } from 'react'
import './search-box.style.css'

export class SearchBox extends Component {
  render() {
    return (
        <input className= {`searh-box ${this.props.className}`}
        type='search' 
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler} 
        />
    )
  }
}

export default SearchBox;

