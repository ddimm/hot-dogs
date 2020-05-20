export const LIKE_PET = 'LIKE_DOG';
export const DISLIKE_PET = 'DISLIKE_DOG';

export const SUP_LIKE_PET = 'SUP_LIKE_DOG';

export const SET_PETS = 'SET_DOGS';
export const ADD_PETS = 'ADD_ANIMAL';

/**
 *
 *
 * marks the first dog in dogs list as `liked` and moves it to the end of the list
 *
 */
export function likePet() {
  return {
    type: LIKE_PET,
  };
}
/**
 * marks the first dog in dogs list as `disliked` and moves it to the end of the list
 */
export function dislikePet() {
  return {
    type: DISLIKE_PET,
  };
}
/**
 * marks the first dog in dogs list as `superliked` and moves it to the end of the list
 */
export function superLikePet() {
  return {
    type: SUP_LIKE_PET,
  };
}
/**
 *  overwrites all dog data with a new list
 * @param {Array} dogs the new list of dogs to overwrite the current dogs list
 */
export function setPets(dogs) {
  return {
    type: SET_PETS,
    dogs,
  };
}
/**
 * adds a new animal to the end of the list
 *
 * @param  animal new animal/dog to add to the list
 *
 */
export function addAnimal(animal) {
  return {
    type: ADD_PETS,
    animal,
  };
}
