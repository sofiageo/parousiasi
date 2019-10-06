import { css } from 'styled-components';
import { deepFreeze } from "../utils";

export const grommetTheme = (dark: boolean) => {

  return deepFreeze({
    dark: dark,
    global: {
      colors: {
        background: '#ffffff',
      },
      font: {
        family: `-apple-system,
         BlinkMacSystemFont, 
         "Segoe UI", 
         Roboto, 
         Oxygen, 
         Ubuntu, 
         Cantarell, 
         "Fira Sans", 
         "Droid Sans",  
         "Helvetica Neue", 
         Arial, sans-serif,  
         "Apple Color Emoji", 
         "Segoe UI Emoji", 
         "Segoe UI Symbol"`,
      },
    },
    button: {
      extend: css`
      ${props => !props.plain && 'font-weight: bold;'}
    `,
    },
  });
}
