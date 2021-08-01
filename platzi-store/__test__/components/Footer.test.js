import React from 'react';
import Footer from '../../src/components/Footer';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { expect } from '@jest/globals';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  test('Should Render ', () => {
    expect(wrapper.length).toBe(1);
  });

  test('There is right Info', () => {
    expect(wrapper.find('p').length).toBeGreaterThanOrEqual(2);
  });

  test('Right Title', () => {
    expect(wrapper.find('.Footer-title').text()).toBe('Platzi Store');
  });

  test('Footer Snapshot', () => {
    const footerSnap = create(<Footer />);

    expect(footerSnap.toJSON()).toMatchSnapshot();
  });
});
