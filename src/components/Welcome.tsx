import React, {useContext} from "react";
import {Box, Heading, ResponsiveContext, ThemeContext} from "grommet";
import {NavLink} from "react-router-dom";

export const Welcome: React.FC = () => {

  const size = useContext(ResponsiveContext);
  const theme = useContext(ThemeContext);
  // use console.log to check runtime theme
  // console.log(theme)

  return (
    <Box justify="center" align="center" fill="horizontal">
      <Heading level={2}>
      Welcome to Styled-components / Grommet / Typescript Presentation
      </Heading>
    </Box>
  );
};