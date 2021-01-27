import 'react-native-gesture-handler';
import React from 'react';
import {RootNavigation} from './src/routes/rootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import {CartModal} from './src/modals/Cart/cart.modal';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </>
  );
};

export default App;
