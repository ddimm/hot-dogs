import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Button from './components/Button';
import Card from './components/Card';
import DogManager from './DogManager';
import { reducer } from './reducers/reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
function App() {
  return (
    <Provider store={store}>
      <div>
        <DogManager />
        <Card />
        <Button />
      </div>
    </Provider>
  );
}

export default App;
