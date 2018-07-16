import React from 'react';
import { shallow } from 'enzyme';

import { SearchBar } from './containers/search_bar_container';
import { RestaurantList } from './containers/restaurant_list_container';

//SearchBar tests
it('searchbox is empty initially', () => {
  const wrapper = shallow(<SearchBar />);
  expect(wrapper.find('#searchbox').text()).toEqual('');
});

it('when user submits search, the text in the searchbox is used for the query', () => {
  const wrapper = shallow(<SearchBar />);
  const searchbox = wrapper.find('#searchbox');
  const searchButton = wrapper.find('button').at(0);
  searchbox.simulate("change", { target: { value: "Toronto" }});
  searchButton.simulate("click");
  expect(wrapper.state().searchTerm).toEqual('Toronto');
});

