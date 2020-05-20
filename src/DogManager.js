import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dislikePet, likePet, setPets, superLikePet } from './actions/actions';
import Card from './components/Card';
const shuffle = require('lodash/shuffle');
const dogNames = require('dog-names');
const catNames = require('cat-names');

export default function DogManager() {
  const currentDog = useSelector((state) => state[0]);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then((dogResp) => {
        return dogResp.json();
      })
      .then((dogObj) => {
        const { message } = dogObj;
        return message.map((value) => {
          return { image: value, name: dogNames.allRandom() };
        });
      })
      .then((dogList) => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
          .then((catResp) => {
            return catResp.json();
          })
          .then((catObj) => {
            return catObj.map((value) => {
              return {
                name: catNames.random(),
                image: value.url,
              };
            });
          })
          .then((catList) => {
            dispatch(setPets(shuffle([...dogList, ...catList])));
          });
      });
  }, [dispatch]);
  if (!currentDog) {
    return <h1>loading</h1>;
  }
  if (currentDog.status) {
    return (
      <div>
        <p>all animals viewed</p>
      </div>
    );
  }
  return (
    <div>
      <Card />

      <div style={{ flexDirection: 'row' }}>
        <button
          onClick={() => {
            dispatch(dislikePet());
          }}
        >
          dislike
        </button>
        <button
          onClick={() => {
            dispatch(superLikePet());
          }}
        >
          superlike
        </button>
        <button
          onClick={() => {
            dispatch(likePet());
          }}
        >
          like
        </button>
      </div>
    </div>
  );
}
