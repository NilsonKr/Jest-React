import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import initialState from '../../src/initialState';
import reducer from '../../src/reducers';

const store = createStore(reducer, initialState);

const ProviderStub = props => {
  return (
    <Provider store={store}>
      <MemoryRouter>{props.children}</MemoryRouter>
    </Provider>
  );
};

export default ProviderStub;
