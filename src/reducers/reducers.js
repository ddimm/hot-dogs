import {
  LIKE_DOG,
  DISLIKE_DOG,
  SUP_LIKE_DOG,
  SET_DOGS,
  ADD_ANIMAL,
} from '../actions/actions';

const initState = [];

export function reducer(state = initState, action) {
  switch (action.type) {
    case LIKE_DOG: {
      const currentDog = { ...[...state].reverse().pop(), status: 'liked' };
      return [...state.slice(1), currentDog];
    }
    case DISLIKE_DOG: {
      const currentDog = { ...[...state].reverse().pop(), status: 'disliked' };

      return [...state.slice(1), currentDog];
    }
    case SUP_LIKE_DOG: {
      const currentDog = {
        ...[...state].reverse().pop(),
        status: 'superliked',
      };
      return [...state.slice(1), currentDog];
    }
    case SET_DOGS: {
      return action.dogs;
    }
    case ADD_ANIMAL: {
      return [...state, action.animal];
    }
    default: {
      return state;
    }
  }
}
