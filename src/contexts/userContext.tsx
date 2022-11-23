import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";
import { createAction } from '../utils/reducer/reducer'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
  UPDATE_USER: 'UPDATE_USER'
}

//@ts-ignore
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.UPDATE_USER:
      return {
        currentUser: payload
      }
    default:
      throw new Error('Error type!');
  }
}

const INITIAL_STATE = {
  currentUser: null
}

// @ts-ignore
export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)
  
  //@ts-ignore
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.UPDATE_USER, user))
  }
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user: any) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // @ts-ignore
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
