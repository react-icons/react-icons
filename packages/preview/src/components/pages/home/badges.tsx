import React from "react";

function Badges() {
  return (
    <p>
      <a href="https://www.npmjs.com/package/react-icons" rel="nofollow">
        <img src="https://img.shields.io/npm/v/react-icons.svg" alt="npm" />
      </a>
      &emsp;
      <a href="https://travis-ci.com/react-icons/react-icons" rel="nofollow">
        <img
          src="https://travis-ci.com/react-icons/react-icons.svg?branch=master"
          alt="travis ci"
        />
      </a>
    </p>
  );
}

export default Badges;
