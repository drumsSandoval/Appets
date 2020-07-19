import React, {createContext, useReducer} from 'react';
import Firebase from '../firebase';

export const FirebaseContext = createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const FirebaseProvider = ({children}) => {
  const initialState = {};
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <FirebaseContext.Provider
      value={{
        firebase: Firebase,
      }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
