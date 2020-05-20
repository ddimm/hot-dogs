import React from 'react';
import { useSelector } from 'react-redux';
import { Image as GrommetImage, Box } from 'grommet';

const Image = () => {
  const currentDog = useSelector((state) => state[0]);
  return (
    <Box align="center" gap="medium">
      <Box height="medium" width="medium" border>
        <GrommetImage src={currentDog.image} alt="a dog" fit="contain" />
        {/* <img
          width="100%"
          maxheight="150px"
          src={currentDog.image}
          alt="a dog"
        /> */}
        <h1 align="center">{currentDog.name}</h1>
      </Box>
    </Box>
  );
};

export default Image;
