import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  likeDog,
  dislikeDog,
  superLikeDog,
  setDogs,
  addAnimal,
} from './actions/actions';
const dogNames = require('dog-names');
const pokemon = require('pokemon');
export default function DogManager() {
  const currentDog = useSelector((state) => state[0]);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then((resp) => {
        return resp.json();
      })
      .then(({ message }) => {
        dispatch(
          setDogs(
            message.map((value) => {
              return {
                image: value,
                name: dogNames.allRandom(),
              };
            })
          )
        );
      })
      .then(() => {
        fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.getId(
            pokemon.random()
          )}/`
        )
          .then((pokeResp) => {
            return pokeResp.json();
          })
          .then((pokeObj) => {
            dispatch(
              addAnimal({
                name: pokeObj.name,
                image: pokeObj.sprites.front_default,
              })
            );
          });
      });
  }, [dispatch]);
  if (!currentDog) {
    return <h1>loading</h1>;
  }
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
