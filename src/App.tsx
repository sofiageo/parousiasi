import React, {useContext, useMemo} from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Grid, Grommet, ResponsiveContext} from "grommet";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Example1} from "./components/example1";
import {Example2} from "./components/example2";
import {Example3} from "./components/example3";
import {Main} from "./components/Main";
import { Header } from './components/Header';
import {CustomContext} from "./contexts/CustomContext";
import defaultTheme from "./themes/DefaultTheme";

const App: React.FC = () => {

  const size = useContext(ResponsiveContext);
  const {theme} = useContext(CustomContext);

  const themeObject = useMemo(() => {
    switch(theme) {
      case 'default':
        return defaultTheme;
      case 'other':
        return {};
    }
  }, [theme]);

  return (
    <Grommet theme={themeObject} full>
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
              <Route exact path="/" component={Main}/>
              <Route path="/example/1" component={Example1}/>
              <Route path="/example/2" component={Example2}/>
              <Route path="/example/3" component={Example3}/>
            </Switch>
          </Box>
        </Grid>
      </BrowserRouter>
    </Grommet>

  );
};

export default App;
