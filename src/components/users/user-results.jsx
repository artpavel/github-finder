import React, { useContext } from 'react';
import Spinner from '../layout/spinner';
import UserItem from './user-item';
import GithubContext from '../../context/github/github-context';

const UserResults = () => {
  const { users, isLoading } = useContext(GithubContext);

  if (!isLoading) {
    return (
      <div className="grid grid-col-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {
          users.map(user => <UserItem key={ user.id } user={ user } />)
        }
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;