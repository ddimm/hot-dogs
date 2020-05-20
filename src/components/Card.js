import React from 'react';
import { Box, Stack, Text, Button, Anchor } from 'grommet';
import Image from './Image';

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
