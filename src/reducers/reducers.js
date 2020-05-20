import {
  LIKE_DOG,
  DISLIKE_DOG,
  SUP_LIKE_DOG,
  SET_DOGS,
} from "../actions/actions";

const initState = [
  {
    name: "Cooper",
    animal: "dog",
    breed: "Dalmatian",
    image: "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg",
  },
  {
    name: "Wrigley",
    animal: "dog",
    breed: "Dingo",
    image: "https://images.dog.ceo/breeds/dingo/n02115641_4265.jpg",
  },
  {
    name: "Rosie",
    animal: "dog",
    breed: "Golden Retriever",
    image: "https://images.dog.ceo/breeds/retriever-golden/n02099601_5188.jpg",
  },
  {
    name: "Casper",
    animal: "dog",
    breed: "Boxer",
    image: "https://images.dog.ceo/breeds/boxer/n02108089_11074.jpg",
  },
  {
    name: "Juniper",
    animal: "dog",
    breed: "Swiss Mountain",
    image: "https://images.dog.ceo/breeds/mountain-swiss/n02107574_1059.jpg",
  },
  {
    name: "Pablo",
    animal: "dog",
    breed: "Cocker Spaniel",
    image: "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_959.jpg",
  },
];

export function reducer(state = initState, action) {
  switch (action.type) {
    case LIKE_DOG: {
      const currentDog = { ...[...state].reverse().pop(), status: "liked" };
      return [...state.slice(1), currentDog];
    }
    case DISLIKE_DOG: {
      const currentDog = { ...[...state].reverse().pop(), status: "disliked" };

      return [...state.slice(1), currentDog];
    }
    case SUP_LIKE_DOG: {
      const currentDog = {
        ...[...state].reverse().pop(),
        status: "superliked",
      };
      return [...state.slice(1), currentDog];
    }
    case SET_DOGS: {
      return action.dogs;
    }
    default: {
      return state;
    }
  }
}
