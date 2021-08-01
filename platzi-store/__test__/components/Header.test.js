import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderStub from '../__mocks__/ProviderStub';
import Header from '../../src/components/Header';
import { expect } from '@jest/globals';

describe('<Header />', () => {
  const wrapper = mount(
    <ProviderStub>
      <Header />
    </ProviderStub>
  );

  test('Test Render', () => {
    expect(wrapper.length).toBeTruthy();
  });

  test('Rigth Title', () => {
    expect(wrapper.find('.Header-title').text()).toBe('Platzi Store');
  });

  test('Anchor Elements', () => {
    expect(wrapper.find('a').length).toBeGreaterThanOrEqual(2);
  });

  test('Header Snapshot', () => {
    const snapHeader = create(
      <ProviderStub>
        <Header />
      </ProviderStub>
    );

    expect(snapHeader.toJSON()).toMatchSnapshot();
  });
});
