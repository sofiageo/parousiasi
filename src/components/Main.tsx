import React, {useContext} from "react";
import {Box, Heading, ResponsiveContext} from "grommet";
import {NavLink} from "react-router-dom";

export const Main: React.FC = () => {

  const size = useContext(ResponsiveContext);

  return (
    <Box justify="center" align="center" fill="horizontal">
      <Heading level={2}>
      Welcome to Styled-components / Grommet / Typescript Presentation
      </Heading>
    </Box>
  );
};