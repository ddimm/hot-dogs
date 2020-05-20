export const LIKE_DOG = "LIKE_DOG";
export const DISLIKE_DOG = "DISLIKE_DOG";

export const SUP_LIKE_DOG = "SUP_LIKE_DOG";

export const SET_DOGS = "SET_DOGS";

/**
 *
 *
 * marks the first dog in dogs list as `liked` and moves it to the end of the list
 *
 */
export function likeDog() {
  return {
    type: LIKE_DOG,
  };
}
/**
 * marks the first dog in dogs list as `disliked` and moves it to the end of the list
 */
export function dislikeDog() {
  return {
    type: DISLIKE_DOG,
  };
}
/**
 * marks the first dog in dogs list as `superliked` and moves it to the end of the list
 */
export function superLikeDog() {
  return {
    type: SUP_LIKE_DOG,
  };
}
/**
 *  overwrites all dog data with a new list
 * @param {Array} dogs the new list of dogs to overwrite the current dogs list
 */
export function setDogs(dogs) {
  return {
    type: SET_DOGS,
    dogs,
  };
}
