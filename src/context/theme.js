import React, { useState } from "react";

// Create the context
const ThemeContext = React.createContext();

// Create a provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
