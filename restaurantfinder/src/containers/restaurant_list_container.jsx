import React, {Component} from 'react';
import {connect} from 'react-redux';


export class RestaurantList extends Component {
	constructor(props) {
		super(props);
		this.renderRestaurants.bind(this);
}

	render() {
		return (
			<table>

				<thead>
					<tr>
						<th>Name</th>
						<th>Address</th>
						<th>City</th>
						<th>Price</th>                        
					</tr>
				</thead>

				<tbody>
					{this.props.restaurants.map(this.renderRestaurants)}
				</tbody>

			</table>
		);
}

	// renders the table of restaurants and provides a link to the opentable page for each restaurant
	renderRestaurants(data) {
		return data.restaurants.map(restaurant => (
				<tr key={restaurant.name}>
						<td><a href={restaurant.reserve_url} target="_blank">{restaurant.name}</a></td> 
						<td>{restaurant.address}</td>
						<td>{restaurant.city}</td>
						<td>{restaurant.price}</td>                
				</tr>
		));
	}
}


function mapStateToProps({restaurants}) {  //{restaurants} === state.restaurants
	return {restaurants}; //{restaurants} === {restaurants: restaurants}
}

export default connect(mapStateToProps)(RestaurantList);