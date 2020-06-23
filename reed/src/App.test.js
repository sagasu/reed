import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Elements testing", () => {
  test('renders Search button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('form').text()).toContain('Search');
  });

  test('render input with text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#search-btn').text()).toBe('Search');
  });
});
