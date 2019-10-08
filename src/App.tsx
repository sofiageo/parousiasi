import React, {useContext, useMemo} from 'react';
import './App.css';
import {Box, Grid, grommet, Grommet, ResponsiveContext, ThemeContext} from "grommet";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Typescript} from "./components/Typescript";
import {GrommetDemo} from "./components/Grommet";
import {StyledComponents} from "./components/StyledComponents";
import {Welcome} from "./components/welcome/Welcome";
import { Header } from './components/Header';
import {CustomContext} from "./contexts/CustomContext";
import { defaultTheme } from './themes/DefaultTheme';
import { Example4 } from './components/styled-live/Example4';
import {dark as darktheme} from 'grommet';
import {grommetTheme} from "./themes/grommet";

const App: React.FC = () => {

  const size = useContext(ResponsiveContext);
  const {theme, dark} = useContext(CustomContext);

  return (
    <Grommet theme={theme} full>
      <BrowserRouter>
        <Box>
          <Box tag="header" gridArea="header">
            <Header/>
          </Box>
          <Box gridArea="main">
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route path="/example/1" component={StyledComponents}/>
              <Route path="/example/2" component={GrommetDemo}/>
              <Route path="/example/3" component={Typescript}/>
              <Route path="/example/4" component={Example4}/>
            </Switch>
          </Box>
        </Box>
      </BrowserRouter>
    </Grommet>

  );
};

export default App;
