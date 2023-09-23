import { createContext , useContext } from "react";
//same as UserContext.js

export const ThemeContext =  createContext({
    themeMode : "light" , 
    darkTheme : () => {},
    lightTheme : () => {},

})
//~~ initial val -- variable , method both we can give //no value before

export const ThemeProvider = ThemeContext.Provider //can be done in the same file also

export default function useTheme(){

    return useContext(ThemeContext)
}