import React from "react";

// Create the context
const UserContext = React.createContext();

// Create a provider component
function UserProvider({ children }) {
  // The value prop of the provider will be our context data
  // This value will be available to child components of this provider
  const currentUser = {
    name: "Duane",
    interests: ["Coding", "Biking", "Words ending in 'ing'"],
  };
  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
