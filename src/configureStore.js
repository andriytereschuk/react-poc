
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

function configureStore() {
  return createStore(
    rootReducer,
    devToolsEnhancer()
  );
}

const store = configureStore();

export default store;
