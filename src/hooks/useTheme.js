import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
/** custom hook for grabbing ThemeContext value */
export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error("useTheme() must be used inside a themeProvider")
    }

    return context
}