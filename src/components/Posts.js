import React from 'react';
import Post from './Post.js';
import { POSTS } from '../data';

const Posts = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '50px',
      }}
    >
      {POSTS.map((post, key) => (
        <Post key={key} post={post} />
      ))}
    </div>
  );
};

export default Posts;
