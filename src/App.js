import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Button from './components/Button';
import Card from './components/Card';
import DogManager from './DogManager';
import { reducer } from './reducers/reducers';
import { grommet } from 'grommet/themes';
import { Grommet } from 'grommet';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
function App() {
  return (
    <Grommet theme={grommet}>
      <Provider store={store}>
        <div>
          <DogManager />
        </div>
      </Provider>
    </Grommet>
  );
}

export default App;
