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

  const components = { "li": { "component": "li", "props": { "size": "medium"}}};

  return (
    <Box margin="medium" justify="center" align="center">
      <Box width="xlarge">
        {state && <Markdown components={components}>{state}</Markdown>}
      </Box>
    </Box>
  );
};