import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { likeDog, dislikeDog, superLikeDog } from './actions/actions';

export default function DogManager() {
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
