import React, {useReducer} from "react";

interface Props {
  theme: string;
  dispatch: any;
}

export const CustomContext = React.createContext<Props>({theme: "default", dispatch: () => {}});

const initialState = {
  theme: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'setUser':
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export const CustomContextProvider = ({...rest}) => {
  const [{theme}, dispatch] = useReducer(reducer, initialState);

  return (
    <CustomContext.Provider value={{theme, dispatch}}>
      {rest.children}
    </CustomContext.Provider>
  );
};
