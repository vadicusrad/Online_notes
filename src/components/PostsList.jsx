import React from 'react';

import PostTemplate from './PostTemplate';
import styled from 'styled-components';
import AddPostButton from './AddPostBotton';

const AppPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

function PostsList({ posts, changeState, getResurses }) {
  const items = posts.map((item) => {
    return (
      <PostTemplate
        posts={posts}
        changeState={changeState}
        key={item.id}
        id={item.id}
        title={item.title}
        descr={item.body}
        like={item.like}
        getResurses={getResurses}
      />
    );
  });

  return (
    <>
      <h1>Posts</h1>
      <AppPosts>
        {items ? items : null}
        <AddPostButton posts={posts} changeState={changeState} />
      </AppPosts>
    </>
  );
}

export default PostsList;
