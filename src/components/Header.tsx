import React, {useContext} from "react";
import {Box, BoxProps, CheckBox, Paragraph, ResponsiveContext} from "grommet";
import {NavLink} from "react-router-dom";
import {CustomContext} from "../contexts/CustomContext";
import {StyledNavLink} from "./common/StyledNavLink";

export const Header: React.FC<BoxProps> = () => {

  const size = useContext(ResponsiveContext);
  const {dispatch, dark} = useContext(CustomContext);

  return (
    <Box direction="row" justify="around" align="center" background="neutral-2">
      <Box direction="row-responsive" width={size} gap="medium" margin="medium">
        <StyledNavLink to="/">Homepage</StyledNavLink>
        <StyledNavLink to="/example/1">Example 1</StyledNavLink>
        <StyledNavLink to="/example/2">Example 2</StyledNavLink>
        <StyledNavLink to="/example/3">Example 3</StyledNavLink>
        <StyledNavLink to="/example/4">Example 4</StyledNavLink>
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