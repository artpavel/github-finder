import { createContext, useReducer } from 'react';
import githubReducer from './github-reducer';

const GithubContext = createContext({
  users: [],
  user: {},
  repos: [],
  isLoading: false,
  dispatch: () => {}
});

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // VALUE
  const value = {
    ...state,
    dispatch
  };

  return <GithubContext.Provider value={ value }>
    { children }
  </GithubContext.Provider>;
};

export default GithubContext;