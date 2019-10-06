import React, {useContext, useMemo} from 'react';
import './App.css';
import {Box, Grid, grommet, Grommet, ResponsiveContext, ThemeContext} from "grommet";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Example1} from "./components/example1";
import {Example2} from "./components/example2";
import {Example3} from "./components/example3";
import {Welcome} from "./components/welcome/Welcome";
import { Header } from './components/Header';
import {CustomContext} from "./contexts/CustomContext";
import { defaultTheme } from './themes/DefaultTheme';
import { Example4 } from './components/styled-live/Example4';
import {dark as darktheme} from 'grommet';
import {grommetTheme} from "./themes/grommet";

const App: React.FC = () => {

  const size = useContext(ResponsiveContext);
  const {dark} = useContext(CustomContext);
  const theme = useMemo(() => defaultTheme(dark), [dark]);
  const grommet = useMemo(() => grommetTheme(dark), [dark]);

  return (
    <Grommet theme={theme} full>
      <BrowserRouter>
        <Grid
          areas={[
            {name: "header", start: [0, 0], end: [0, 0]},
            {name: "main", start: [0, 1], end: [0, 1]},
            {name: "foot", start: [0, 2], end: [0, 2]}
          ]}
          columns={["flex"]}
          rows={["auto", "flex", "auto"]}
          fill="vertical"
        >
          <Box tag="header" gridArea="header">
            <Header/>
          </Box>
          <Box gridArea="main">
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route path="/example/1" component={Example1}/>
              <Route path="/example/2" component={Example2}/>
              <Route path="/example/3" component={Example3}/>
              <Route path="/example/4" component={Example4}/>
            </Switch>
          </Box>
        </Grid>
      </BrowserRouter>
    </Grommet>

  );
};

export default App;
