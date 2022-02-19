import React from 'react';
import { shallow } from 'enzyme';
import CharacterListItem from './CharacterListItem';

describe('CharacterListItem', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CharacterListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
