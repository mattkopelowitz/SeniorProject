import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const initialState = {
  user: null,
  token: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      // Handle setting user data and token upon successful login
      return { user: action.user, token: action.token };
    case 'LOGOUT':
      // Handle logging out and clearing user data and token
      return initialState;
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
