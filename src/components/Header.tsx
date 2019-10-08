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
    const obj = {
      paragraph: {
        small: {
          "size": "14px",
          "height": "20px",
          "maxWidth": "336px"
        },
        medium: {
          "size": "18px",
          "height": "24px",
          "maxWidth": "732px"
        },
        large: {
          "size": "22px",
          "height": "28px",
          "maxWidth": "732px"
        },
        xlarge: {
          "size": "26px",
          "height": "32px",
          "maxWidth": "624px"
        },
        xxlarge: {
          "size": "34px",
          "height": "40px",
          "maxWidth": "816px"
        }
      },
      anchor: {
        color: 'accent-3',
      },
    };
    let t = deepMerge(generate(24), themes[themeName]);
    t = deepMerge(t, obj);
    dispatch({type: 'theme', payload: t});
  }, [themeName, dark]);

  return (
    <Box direction="row" justify="around" align="center" background="neutral-2">
      <Box direction="row-responsive" width={size} gap="medium" margin="medium">
        <StyledNavLink to="/">Homepage</StyledNavLink>
        <StyledNavLink to="/example/1">Styled Components</StyledNavLink>
        <StyledNavLink to="/example/2">Grommet</StyledNavLink>
        <StyledNavLink to="/example/3">Typescript</StyledNavLink>
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
          options={["v1", "hp", "aruba", "grommet", "hpe", "custom"]}
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