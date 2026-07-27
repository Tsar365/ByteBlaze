// import React from 'react';

import { useLoaderData } from "react-router";

const Author = () => {
  const blog=useLoaderData()
  return (
    <div>
      I am a author{blog.user.name}
    </div>
  );
};

export default Author;