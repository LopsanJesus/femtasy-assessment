import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from './CharacterList';

describe('CharacterList', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CharacterList />);
    expect(wrapper).toMatchSnapshot();
  });
});
