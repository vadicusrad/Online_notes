import React from 'react';
import styled from 'styled-components';
import PostButtons from './PostButtons';

const Post = styled.div`
  border: solid 1px;
  padding: 10px;
  position: relative;
  height: 300px;
`;

const PostTitle = styled.h2`
  margin: 0;
  height: 60px;
  overflow: hidden;
  border-bottom: solid 1px;
  padding: 10px;
`;

function PostTemplate({ id, title, descr, changeState, posts }) {
  return (
    <Post>
      <PostTitle>{title}</PostTitle>
      <p>{descr}</p>
      <PostButtons id={id} posts={posts} changeState={changeState} />
    </Post>
  );
}

export default PostTemplate;
