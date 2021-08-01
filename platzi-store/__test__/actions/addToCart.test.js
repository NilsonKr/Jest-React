import actions from '../../src/actions';
import { expect } from '@jest/globals';
import ProductStub from '../__mocks__/ProductStub';

describe('addToCart Action', () => {
  test('Should Return Expected Payload ', () => {
    const expected = {
      type: 'ADD_TO_CART',
      payload: ProductStub,
    };

    expect(actions.addToCart(ProductStub)).toEqual(expected);
  });
});
