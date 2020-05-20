import {
  LIKE_PET,
  DISLIKE_PET,
  SUP_LIKE_PET,
  SET_PETS,
  ADD_PETS,
} from '../actions/actions';

const initState = [];

export function reducer(state = initState, action) {
  switch (action.type) {
    case LIKE_PET: {
      const currentDog = { ...[...state].reverse().pop(), status: 'liked' };
      return [...state.slice(1), currentDog];
    }
    case DISLIKE_PET: {
      const currentDog = { ...[...state].reverse().pop(), status: 'disliked' };

      return [...state.slice(1), currentDog];
    }
    case SUP_LIKE_PET: {
      const currentDog = {
        ...[...state].reverse().pop(),
        status: 'superliked',
      };
      return [...state.slice(1), currentDog];
    }
    case SET_PETS: {
      return action.dogs;
    }
    case ADD_PETS: {
      return [...state, action.animal];
    }
    default: {
      return state;
    }
  }
}
