import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${ GITHUB_TOKEN }` }
});

// Get search results. Token on 60 days
export const searchUsers = async text => {

  const params = new URLSearchParams({
    q: text
  });

  const response = await github.get(`/search/users?${ params }`);
  return response.data.items;
};

// Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${ login }`),
    github.get(`/users/${ login }/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

// Get single User. Token on 60 days
// export const getUser = async login => {
//   const res = await fetch(`${ GITHUB_URL }/users/${ login }`, {
//     headers: {
//       Authorization: `token ${ GITHUB_TOKEN }`
//     }
//   });
//
//   if (res.status === 404) {
//     window.location = '/notfound';
//   } else {
//     return await res.json();
//   }
// };

// Get user repos
// export const getUserRepos = async login => {
//   const res = await fetch(`${ GITHUB_URL }/users/${ login }/repos`, {
//     headers: {
//       Authorization: `token ${ GITHUB_TOKEN }`
//     }
//   });
//
//   return await res.json();
// };