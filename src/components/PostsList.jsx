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
  // проверка на случай если происходит ошибка и массив постов приходит пустой
  let items = null;
  if (posts) {
    items = posts.map((item) => {
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
  } else {
    return <p>Something went wrong... try again later please</p>;
  }

  return (
    <>
      <h1>Notes</h1>
      {items.length ? null : 'Loading'}
      <AppPosts>
        {items.length ? items : null}
        <AddPostButton posts={posts} changeState={changeState} />
      </AppPosts>
    </>
  );
}

export default PostsList;
