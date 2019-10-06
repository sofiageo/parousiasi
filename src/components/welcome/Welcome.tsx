import React, {useContext, useEffect, useReducer, useState} from "react";
import {Accordion, AccordionPanel, Box, Heading, Markdown, ResponsiveContext, ThemeContext} from "grommet";
import {NavLink} from "react-router-dom";
// @ts-ignore
import * as Styled from '../../docs/Styled.md';
// @ts-ignore
import Grommet from '../../docs/Grommet.md';
// @ts-ignore
import Typed from '../../docs/Typescript.md';

import {IceCream} from "grommet-icons";


function reducer(state, action) {
  switch (action.type) {
    case 'styled':
      return {...state, styled: action.payload};
    case 'grommet':
      return {...state, grommet: action.payload};
    case 'typed':
      return {...state, typed: action.payload};
    default:
      return state;
  }
}

export const Welcome: React.FC = () => {

  const size = useContext(ResponsiveContext);
  const theme = useContext(ThemeContext);
  // use console.log to check runtime theme
  // console.log(theme)

  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    fetch(Styled)
      .then((res) => res.text())
      .then(data => dispatch({type: 'styled', payload: data}));

    fetch(Grommet)
      .then((res) => res.text())
      .then(data => dispatch({type: 'grommet', payload: data}));

    fetch(Typed)
      .then((res) => res.text())
      .then(data => dispatch({type: 'typed', payload: data}));
  }, []);

  const icon = <IceCream size="large" color="accent-2"/>;

  return (
    <Box justify="center" align="center" fill="horizontal" background="brand">
      <Heading level={2}>
      Welcome to {icon} Ice-cream Tuesday {icon}
      </Heading>
      <Heading level={6}>Styled-components / Grommet / Typescript Presentation</Heading>

      <Accordion multiple>
        <AccordionPanel label="Why styled-components" >
          {state.styled && <Markdown>{state.styled}</Markdown>}
        </AccordionPanel>
        <AccordionPanel label="Why Grommet">
          {state.grommet && <Markdown>{state.grommet}</Markdown>}
        </AccordionPanel>
        <AccordionPanel label="Why Typescript">
          {state.typed && <Markdown>{state.typed}</Markdown>}
        </AccordionPanel>
      </Accordion>
    </Box>
  );
};