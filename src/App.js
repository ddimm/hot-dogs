import React from 'react';
import { createStore } from 'redux';
import { reducer } from './reducers/reducers';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { likeDog, dislikeDog, superLikeDog } from './actions/actions';
import Button from './components/Button';
import Card from './components/Card';

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

function DogManager() {
  const currentDog = useSelector((state) => state[0]);
  const dispatch = useDispatch();
  if (currentDog.status) {
    return (
      <div>
        <p>all dogs viewed</p>
      </div>
    );
  }
  return (
    <div>
      <div style={{ flexDirection: 'row' }}>
        <button
          onClick={() => {
            dispatch(dislikeDog());
          }}
        >
          dislike
        </button>
        <button
          onClick={() => {
            dispatch(superLikeDog());
          }}
        >
          superlike
        </button>
        <button
          onClick={() => {
            dispatch(likeDog());
          }}
        >
          like
        </button>
      </div>
      <img src={currentDog.image} alt="a dog" />
    </div>
  );
}
