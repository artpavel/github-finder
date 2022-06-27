import React, { useState, useContext, } from 'react';
import githubContext from '../../context/github/github-context';
import alertContext from '../../context/alert/alert-context';
import { searchUsers } from '../../context/github/github-actions';

const UserSearch = () => {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(githubContext);
  const { setAlert } = useContext(alertContext);

  // Input
  const handleChange = e => setText(e.target.value);

  // Button GO
  const handleSubmit = async e => {
    e.preventDefault();
    if (!text) {
      setAlert('Please enter something', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: users });
      setText('');
    }
  };

  // Clear input
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={ handleSubmit }>
          <div className="form-control">
            <div className="relative">
              <input type="text"
                     className="w-full pr-40 bg-gray-200 input input-lg text-black"
                     placeholder="Search"
                     value={ text }
                     onChange={ handleChange }
              />
              <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                      type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {
          users.length > 0 &&
          (<button className="btn btn-ghost btn-lg" onClick={ clearUsers }>
            Clear
          </button>)
        }
      </div>
    </div>
  );
};

export default UserSearch;