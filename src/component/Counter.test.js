import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Counter from './Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create shallow wrapper to the component
 * @function setup
 * @param {object} props - Component props specifi to this setup 
 * @param {any} state - Initial state for setup
 * @returns {ShallowComponent}
 */
const setup = (props = {}, state = null) => {
    return shallow(<Counter {...props} />)
}

/**
 * Return shallow Wrapper containing the node(s) with the given data-test value
 * @function findByTestAttr
 * @param {shallowWrapper} wrapper - Enzyme shallow wrapper to serch within
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

const wrapper = setup();

test('Counter renders without errors', () => {
   const counterComponent = findByTestAttr(wrapper, 'component-counter');
    expect(counterComponent.length).toBe(1);
});

test('renders increment button', () => {
    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    expect(incrementButton.length).toBe(1);
});

test('render counter display', () => {
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1)
});

test('counter starts at 0', () => {
    const initialCounterState = wrapper.state('count')
    expect(initialCounterState).toBe(0)
});

test('clicking the button increments the counter display', () => {

});