import React from 'react';
import Image from './Image';
import Button from './Button';

import { Stack, Box, Button as GrommetButton, Grommet, Text } from 'grommet';

const Card = () => {
  return (
    <div>
      <Stack anchor="center">
        <Box background="dark-2" pad="medium" round gap="small">
          <Box
            background={{ color: 'gray', dark: true }}
            pad="medium"
            round
            gap="small"
          >
            <Image />
          </Box>
          <Button />
        </Box>
      </Stack>
    </div>
  );
};

export default Card;
