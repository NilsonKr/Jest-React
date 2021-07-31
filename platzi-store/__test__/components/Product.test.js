import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderStub from '../__mocks__/ProviderStub';
import ProductStub from '../__mocks__/ProductStub';
import Product from '../../src/components/Product';
import { expect } from '@jest/globals';

describe('<Product />', () => {
  test('Render Product Card', () => {
    const wrapper = shallow(
      <ProviderStub>
        <Product />
      </ProviderStub>
    );

    expect(wrapper.length).toBe(1);
  });

  test('Simulate Click in Add Product', () => {
    const handleAddStub = jest.fn();
    const wrapper = mount(
      <ProviderStub>
        <Product product={ProductStub} handleAddToCart={handleAddStub} />
      </ProviderStub>
    );

    wrapper.find('button').simulate('click');
    expect(handleAddStub).toHaveBeenCalledTimes(1);
  });

  test('Check Props', () => {
    const handleAddStub = jest.fn();
    const wrapper = mount(
      <Product product={ProductStub} handleAddToCart={handleAddStub} />
    );

    expect(wrapper.props().product).toBeTruthy();
  });
});
