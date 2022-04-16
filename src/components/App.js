import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";

// Import the User provider
import { UserProvider } from "../context/user";

// Import the Theme provider
import { ThemeProvider, ThemeContext } from "../context/theme";

function App() {
  const theme = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <main className={theme}>
        {/* Wrap components that need access to context data in the provider */}
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;
