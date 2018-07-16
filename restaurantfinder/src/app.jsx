import React, { Component } from 'react';

import './app.css';
import SearchBar from './containers/search_bar_container';
import RestaurantList from './containers/restaurant_list_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="searchbar-container">
          <SearchBar />           
        </div>

        <div className="restaurant-list-container">
          <RestaurantList />
        </div>
          
      </div>
    );
  }
}

export default App;
