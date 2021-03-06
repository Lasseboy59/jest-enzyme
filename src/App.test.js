import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/*
* Factory function to create aShallowWrapper for the App component 
* @function setup
* @param {object} props - Component props spcific to this setup
* @param {any} state - Initial state for setup
* @returns {ShallowWrapper}
*/

const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />)
}

/*
* Return ShallowWrapper containing node(s) with the given dat-test value
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
* @param {string} val - Value of data-test attribute for search.
* @returns {ShallowWrapper}
*/

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without crashing', () => {
  // const wrapper = shallow(<App />);
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1)
});

test('renders increment button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1)
})

test('test counter starts at 0', () => {

})

test('clicking butoon increments counter display', () => {

})
