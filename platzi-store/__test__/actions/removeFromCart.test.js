import { expect } from '@jest/globals';
import actions from '../../src/actions/index';
import ProductStub from '../__mocks__/ProductStub';

describe('removeFromCart Action', () => {
  test('Return expected payload', () => {
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload: ProductStub,
    };

    expect(actions.removeFromCart(ProductStub)).toEqual(expected);
  });
});
