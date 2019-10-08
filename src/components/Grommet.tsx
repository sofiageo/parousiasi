import React, {useEffect, useState} from "react";
import {Box, Markdown} from "grommet";
// @ts-ignore
import GrommetMD from './docs/Grommet.md';

export const GrommetDemo: React.FC = () => {

  const [state, setState] = useState('');
  
  useEffect(() => {
    fetch(GrommetMD)
      .then((res) => res.text())
      .then(data => setState(data));  
  }, []);
  
  return (
    <Box margin="medium" justify="center" align="center">
      <Box width="xlarge">
        {state && <Markdown>{state}</Markdown>}
      </Box>
    </Box>
  );
};