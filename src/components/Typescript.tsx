import React, {useContext, useEffect, useState} from "react";
import {Text, Box, Heading, ThemeContext, Markdown} from "grommet";
import {CustomContext} from "../contexts/CustomContext";
// @ts-ignore
import Typed from './docs/Typescript.md';

export const Typescript: React.FC = () => {

  const [state, setState] = useState('');
  
  useEffect(() => {
    fetch(Typed)
      .then((res) => res.text())
      .then(data => setState(data));
  }, []);

  return (
    <Box justify="center" align="center" fill="horizontal">
      {state && <Markdown>{state}</Markdown>}
    </Box>
  );
};