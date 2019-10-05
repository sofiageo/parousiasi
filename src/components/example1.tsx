import React, {useContext} from "react";
import {Text, Box, Heading, ThemeContext} from "grommet";
import {CustomContext} from "../contexts/CustomContext";

export const Example1: React.FC = () => {

  return (
    <Box justify="center" align="center" fill="horizontal">
      <Heading level={2}>Theming</Heading>
      <Box background="#7D4CDB" fill="horizontal" justify="center" pad="medium">
        <Text>Static Background</Text>
      </Box>
      <Box background="brand" fill="horizontal" justify="center" pad="medium">
        <Text>Dynamic Background</Text>
      </Box>
      <Box>
        TEST
      </Box>
    </Box>
  );
};