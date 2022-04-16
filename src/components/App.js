import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";

// Import the User provider
import { UserProvider } from "../context/user";

// Import the Theme provider
import { ThemeContext } from "../context/theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      {/* Wrap components that need access to context data in the provider */}
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
    </main>
  );
}

export default App;
