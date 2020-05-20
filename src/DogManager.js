import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { likeDog, dislikeDog, superLikeDog } from './actions/actions';
import Image from './components/Image';
import Card from './components/Card';

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
      <Card />

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
    </div>
  );
}
