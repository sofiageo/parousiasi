import React, { useEffect, useState } from 'react';
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  withTheme,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';
// import stylisRTLPlugin from 'stylis-rtl';
import rem from './rem';
import { darkGrey, red } from './colors';
import { phone } from './media';
import { headerFont, monospace } from './fonts';

// import '../utils/prismTemplateString';

import {LiveProvider, LiveEditor, LiveError, LivePreview, LiveEditorProps, LiveProviderProps} from 'react-live';
import {Language, PrismTheme} from "prism-react-renderer";
import * as Icons from 'grommet-icons';
import * as Grommet from 'grommet';
import * as Themes from 'grommet/themes';
import {Box} from "grommet";

const scope = {
  ...Grommet,
  Icons,
  Themes,
  styled,
  css,
};

const StyledProvider = styled(LiveProvider)`
  box-shadow: ${rem(1)} ${rem(1)} ${rem(20)} rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin: ${rem(35)} 0;
  text-align: left;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;

  ${phone(css`
    flex-direction: column;
  `)};
`;

const columnMixin = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;

  ${phone(css`
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
    height: auto;
  `)};
`;

export const editorMixin = `
  background: ${darkGrey};
  font-size: 0.8rem;
  font-family: ${monospace};
  font-weight: 300;
  height: ${rem(800)};
  overflow-y: auto !important;
  overflow-x: hidden;
  cursor: text;
  caret-color: white;
  white-space: pre-wrap;
  position: relative;
`;

const StyledEditor = styled(LiveEditor)`
  ${editorMixin};
  ${columnMixin};
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  white-space: normal;

  ${columnMixin};
`;

export const StyledError = styled(LiveError)`
  display: block;
  width: 100%;
  padding: ${rem(8)};
  background: ${red};
  color: white;
  font-size: 0.8rem;
  font-family: ${headerFont};
  white-space: pre;
`;

const MyStyledProvider: React.FunctionComponent<LiveProviderProps> = ({ noInline, code, scope = {} }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <StyledProvider
      code={code}
      noInline={noInline}
      mountStylesheet={false}
      scope={{
        ...scope,
        createGlobalStyle,
        css,
        keyframes,
        styled,
        ThemeProvider,
        StyleSheetManager,
        withTheme,
        // stylisRTLPlugin,
      }}
    >
      <Row>
        <StyledEditor />
        {/* because react-live uses a different babel compiler, the classnames it generates aren't stable and a remount is needed after SSR */}
        <StyledPreview key={mounted ? 'preview-client' : 'preview-ssr'} />
      </Row>

      <StyledError />
    </StyledProvider>
  );
};

export const Example4: React.FunctionComponent = () => {
  // const code = `<Box>Test</Box>`;
  const code = `
const Button = styled.button\`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
\`;

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

render(
  <div>
    <Button>Normal Button</Button>
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
  </div>
);`

  return (
    <Box fill>
      <MyStyledProvider code={code} noInline={true} language="jsx" theme={undefined} scope={scope} />
    </Box>
  )
};