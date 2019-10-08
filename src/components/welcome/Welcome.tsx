import React, {useContext, useEffect, useReducer, useState} from "react";
import {Accordion, AccordionPanel, Box, Heading, Markdown, ResponsiveContext, Text, ThemeContext} from "grommet";
import {NavLink} from "react-router-dom";
// @ts-ignore
import * as Styled from '../../introduction/Styled.md';
// @ts-ignore
import Grommet from '../../introduction/Grommet.md';
// @ts-ignore
import Typed from '../../introduction/Typescript.md';
// @ts-ignore
import ESlint from '../../introduction/ESLint.md';
// @ts-ignore
import Langserver from '../../introduction/Langserver.md';

import {IceCream, Trigger} from "grommet-icons";
import {CustomContext} from "../../contexts/CustomContext";


function reducer(state, action) {
  switch (action.type) {
    case 'styled':
      return {...state, styled: action.payload};
    case 'grommet':
      return {...state, grommet: action.payload};
    case 'typed':
      return {...state, typed: action.payload};
    case 'eslint':
      return {...state, eslint: action.payload};
    case 'langserver':
      return {...state, langserver: action.payload};
    default:
      return state;
  }
}

export const Welcome: React.FC = () => {

  const size = useContext(ResponsiveContext);
  const theme = useContext(ThemeContext);
  const {dark} = useContext(CustomContext);
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

    fetch(ESlint)
      .then((res) => res.text())
      .then(data => dispatch({type: 'eslint', payload: data}));

    fetch(Langserver)
      .then((res) => res.text())
      .then(data => dispatch({type: 'langserver', payload: data}));
  }, []);

  const icon = <IceCream size="large" color="accent-2"/>;
  const hover = dark ? 'light-4' : 'dark-3';
  const IconLabel = ({label}) => {

    return (
      <Box direction="row" align="center" pad={{ horizontal: 'xsmall' }}>
        <Trigger/>
        <Heading level={4} color="white">{label}</Heading>
      </Box>
    );
  };

  return (
    <Box justify="center" align="center" fill background="brand">
      <Heading level={2}>
      Welcome to {icon} Ice-cream Tuesday {icon}
      </Heading>
      <Heading level={6}>Styled-components / Grommet / Typescript Presentation</Heading>

      <Accordion multiple animate margin="large">
        <AccordionPanel label={<IconLabel label="Styled-components"/>}>
          {state.styled && <Markdown>{state.styled}</Markdown>}
        </AccordionPanel>
        <AccordionPanel label={<IconLabel label="Grommet"/>}>
          {state.grommet && <Markdown>{state.grommet}</Markdown>}
        </AccordionPanel>
        <AccordionPanel label={<IconLabel label="Typescript"/>}>
          {state.typed && <Markdown>{state.typed}</Markdown>}
        </AccordionPanel>
        <AccordionPanel label={<IconLabel label="ESlint"/>}>
          {state.eslint && <Markdown>{state.eslint}</Markdown>}
        </AccordionPanel>
        <AccordionPanel label={<IconLabel label="Langserver"/>}>
          {state.langserver && <Markdown>{state.langserver}</Markdown>}
        </AccordionPanel>
      </Accordion>
    </Box>
  );
};