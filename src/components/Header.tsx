import React, {useContext, useEffect, useMemo, useState} from "react";
import {Box, BoxProps, CheckBox, generate, grommet, Paragraph, ResponsiveContext, Select, Text} from "grommet";
import {NavLink} from "react-router-dom";
import {CustomContext} from "../contexts/CustomContext";
import {StyledNavLink} from "./common/StyledNavLink";
import {deepMerge} from "grommet/utils";
import {hpe} from "grommet-theme-hpe";
import { aruba } from "grommet-theme-aruba";
import { hp } from "grommet-theme-hp";
import { v1 } from "grommet-theme-v1";
import {defaultTheme} from "../themes/DefaultTheme";


export const Header: React.FC<BoxProps> = () => {

  const size = useContext(ResponsiveContext);
  const {dispatch, dark} = useContext(CustomContext);
  const custom = useMemo(() => defaultTheme(dark), [dark]);
  const [themeName, setThemeName] = useState('v1');

  console.log(custom.dark);

  const themes = {
    custom,
    grommet,
    hpe,
    aruba,
    hp,
    v1
  };

  useEffect(() => {
    dispatch({type: 'theme', payload: deepMerge(generate(24), themes[themeName])});
  }, [themeName, dark]);

  return (
    <Box direction="row" justify="around" align="center" background="neutral-2">
      <Box direction="row-responsive" width={size} gap="medium" margin="medium">
        <StyledNavLink to="/">Homepage</StyledNavLink>
        <StyledNavLink to="/example/1">Typescript</StyledNavLink>
        <StyledNavLink to="/example/2">Grommet</StyledNavLink>
        <StyledNavLink to="/example/3">Styled Components</StyledNavLink>
        <StyledNavLink to="/example/4">Live edit</StyledNavLink>
      </Box>
      <Box align="center">
        <Paragraph>Current screen size is: {size}</Paragraph>
      </Box>

      <Box basis="small" direction="row" align="center">
        <Text>Theme: </Text>
        <Select
          plain
          size="small"
          options={["v1", "aruba", "grommet", "hpe", "hp", "custom"]}
          value={themeName}
          onChange={event => setThemeName(event.option)}
        />
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