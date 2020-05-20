import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducers/reducers';
import DogManager from './DogManager';
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
