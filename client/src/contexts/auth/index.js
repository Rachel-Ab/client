import { createContext, useReducer } from 'react';

import { REGISTER, LOGIN, LOGOUT, ERROR } from './types';
// Définition du state, du context etc etc
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case LOGOUT:
    case ERROR: {
      return {
        ...state,
        user: '',
      };
    }
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
