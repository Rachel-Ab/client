import { createContext, useReducer } from 'react';

import { REGISTER, LOGIN, LOGOUT } from './types';
// Définition du state, du context etc etc
const initialState = {
  user: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case LOGIN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: action.payload,
      };
    }
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
