import React from 'react';
import UserResults from '../components/users/user-results';
import UserSearch from '../components/users/user-search';

const Home = () => {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
};

export default Home;