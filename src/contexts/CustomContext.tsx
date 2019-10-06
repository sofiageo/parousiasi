import React, {useReducer} from "react";

interface Props {
  theme: string;
  dark: boolean;
  dispatch: any;
}

export const CustomContext = React.createContext<Props>({theme: "default", dark: false, dispatch: () => {}});

const initialState = {
  theme: "default",
  dark: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'toggle':
      return {...state, dark: !state.dark}
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
