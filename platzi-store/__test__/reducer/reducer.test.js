import ProductStub from '../__mocks__/ProductStub';
import actions from '../../src/actions/index';
import reducer from '../../src/reducers/index';
import { expect } from '@jest/globals';

describe('Main Reducer', () => {
  test('Return initial state', () => {
    const expected = {};

    expect(reducer({}, '')).toEqual(expected);
  });

  test('Action addToCart', () => {
    const expected = {
      cart: [ProductStub],
    };

    expect(reducer({ cart: [] }, actions.addToCart(ProductStub))).toEqual(
      expected
    );
  });

  test('Action removeFromCart', () => {
    const initialState = {
      cart: [ProductStub],
    };
    const expected = {
      cart: [],
    };

    expect(reducer(initialState, actions.removeFromCart(ProductStub))).toEqual(
      expected
    );
  });
});
