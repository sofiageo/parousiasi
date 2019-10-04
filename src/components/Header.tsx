import React, {useContext} from "react";
import {Box, BoxProps, ResponsiveContext} from "grommet";
import {NavLink} from "react-router-dom";

export const Header: React.FC<BoxProps> = () => {

  const size = useContext(ResponsiveContext);

  return (
    <Box direction="row" width={size} gap="medium" margin="medium">
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/example/1">Example 1</NavLink>
      <NavLink to="/example/2">Example 2</NavLink>
      <NavLink to="/example/3">Example 3</NavLink>
    </Box>
  );
};