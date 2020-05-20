import React from 'react';
import { Dislike, Like, Favorite } from 'grommet-icons';
import { Box, Button as GrommetButton } from 'grommet';

import { useDispatch } from 'react-redux';
import { likePet, dislikePet, superLikePet } from '../actions/actions';

const Button = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Box
        direction="row"
        align="center"
        justify=" between"
        // display="flex"
        // justify-content="center"
      >
        <GrommetButton
          plain={false}
          icon={<Dislike />}
          onClick={() => {
            dispatch(dislikePet());
          }}
          primary
        />
        <GrommetButton
          plain={false}
          icon={<Like />}
          onClick={() => {
            dispatch(likePet());
          }}
        />
        <GrommetButton
          plain={false}
          icon={<Favorite />}
          onClick={() => {
            dispatch(superLikePet());
          }}
        />
      </Box>
    </div>
  );
};

export default Button;
