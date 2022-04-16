import React, { useState } from "react";

// Create the context
const UserContext = React.createContext();

// Create a provider component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // The value prop of the provider will be our context data
  // This value will be available to child components of this provider
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
