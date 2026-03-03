import React from "react";

// Note: Default value is provided
const UserContext = React.createContext({username: 'NA', age: 0});

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer }
export default UserContext;