import React, {useMemo, useReducer} from "react";
import {defaultTheme} from "../themes/DefaultTheme";
import {grommetTheme} from "../themes/grommet";

interface Props {
  theme: object;
  dark: boolean;
  dispatch: any;
}

export const CustomContext = React.createContext<Props>({theme: {}, dark: false, dispatch: () => {}});

const initialState = {
  theme: defaultTheme(false),
  dark: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'toggle':
      return {...state, dark: !state.dark};
    case 'theme':
      return {...state, theme: action.payload};
    default:
      return state;
  }
};

export const CustomContextProvider = ({...rest}) => {
  const [{theme, dark}, dispatch] = useReducer(reducer, initialState);

  return (
    <CustomContext.Provider value={{theme, dark, dispatch}}>
      {rest.children}
    </CustomContext.Provider>
  );
};
