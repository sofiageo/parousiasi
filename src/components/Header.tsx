import React, {useContext} from "react";
import {Box, BoxProps, CheckBox, Paragraph, ResponsiveContext} from "grommet";
import {NavLink} from "react-router-dom";
import {CustomContext} from "../contexts/CustomContext";

export const Header: React.FC<BoxProps> = () => {

  const size = useContext(ResponsiveContext);
  const {dispatch, dark} = useContext(CustomContext);

  return (
    <Box direction="row" justify="around" align="center">
      <Box direction="row" width={size} gap="medium" margin="medium">
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/example/1">Example 1</NavLink>
        <NavLink to="/example/2">Example 2</NavLink>
        <NavLink to="/example/3">Example 3</NavLink>
      </Box>
      <Box align="center">
        <Paragraph>Current screen size is: {size}</Paragraph>
      </Box>
      <Box direction="row">
        <CheckBox
          checked={dark}
          label="Dark mode"
          toggle={true}
          onChange={() => dispatch({type: 'toggle'})}
        />
      </Box>
    </Box>
  );
};