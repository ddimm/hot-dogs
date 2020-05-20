import React from 'react';
import { useSelector } from 'react-redux';
import Card from './components/Card';

export default function DogManager() {
  const currentDog = useSelector((state) => state[0]);
  if (currentDog.status) {
    return (
      <div>
        <p>all dogs viewed</p>
      </div>
    );
  }
  return <Card />;
}
