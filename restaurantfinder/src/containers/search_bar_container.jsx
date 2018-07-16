import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRestaurants } from '../actions/index';


export class SearchBar extends Component {

  constructor(props) {
     super(props);
     this.state = {searchTerm: ''};

     this.onInputChange = this.onInputChange.bind(this);
     this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onSearchSubmit}>
        <input 
          id="searchbox"
          className="form-control"
          type="text" 
          placeholder="Enter city"
          autoFocus={true}
          value={this.state.searchTerm}
          onChange={this.onInputChange}
         />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-info">Search</button>        
        </span>                  
      </form>
    );
  }

  onInputChange(event) {
    this.setState( {searchTerm: event.target.value} );
  }

  // 
  onSearchSubmit(event) {
    event.preventDefault();   
    this.props.getRestaurants(this.state.searchTerm);
    this.setState( {searchTerm: ''} );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {
    getRestaurants: getRestaurants
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);