import React from 'react';

const About = () => {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This project of creations by
        <strong className='ml-2'>
          <a href="https://app.netlify.com/teams/artpavel/sites"
             className="underline"
             target="_blank"
             rel="noreferrer"
          >
             Pavel Art.
          </a>
        </strong>
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white pl-2"
           href="https://github.com/artpavel"
           target="_blank"
           rel="noreferrer"
        >
          Pavel Art
        </a>
      </p>
    </>
  );
};

export default About;