import React from "react";

// Create the context
const UserContext = React.createContext();

// Create a provider component
function UserProvider({ children }) {
  // The value prop of the provider will be our context data
  // This value will be available to child components of this provider
  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
