import {createContext,useContext} from "react";

export const ThemeContext = createContext(
//     default value
    {
        themeMode: "light",
        darkTheme:()=>{},
        lightTheme:()=>{}
    }
);

//Creating provider
export const ThemeProvider = ThemeContext.Provider;

//custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}