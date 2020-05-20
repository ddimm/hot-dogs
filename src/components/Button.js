import React from 'react';
import { Close, Send, User } from 'grommet-icons';
import { Box, Button as GrommetButton, Grommet, Text } from 'grommet';

const Button = () => {
  return (
    <div>
      <Box align="center" pad="large">
        <Text margin="small"> plain=false (includes padding and border)</Text>
        <Box direction="row">
          <Button plain={false} icon={<Close />} onClick={() => {}} primary />
          <Button plain={false} icon={<Send />} onClick={() => {}} />
          <Button plain={false} icon={<User />} onClick={() => {}} />
        </Box>
      </Box>
    </div>
  );
};

export default Button;
