import React, {useEffect, useReducer, useState} from "react";
import {Box, Markdown} from "grommet";
// @ts-ignore
import * as Styled from './docs/Styled.md';

export const StyledComponents: React.FC = () => {

  const [state, setState] = useState('');

  useEffect(() => {
    fetch(Styled)
      .then((res) => res.text())
      .then(data => setState(data));
  }, []);

  return (
    <Box fill>
      {state && <Markdown>{state}</Markdown>}
    </Box>
  );
};