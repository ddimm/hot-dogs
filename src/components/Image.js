import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { likePet, dislikePet, superLikePet } from '../actions/actions';
import { Image as GrommetImage, Box } from 'grommet';

const Image = () => {
  const currentDog = useSelector((state) => state[0]);
  const dispatch = useDispatch();
  return (
    <Box align="center" gap="medium">
      <Box height="medium" width="medium" border>
        <GrommetImage src={currentDog.image} alt="a dog" fit="contain" />
      </Box>
    </Box>
  );
};

export default Image;
