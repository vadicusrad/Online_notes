import React from 'react';
import axios from 'axios';
import PostTemplate from './PostTemplate';
import styled from 'styled-components';
import AddPostButton from './AddPostBotton';
import { useState, useEffect } from 'react';

const AppPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

function PostsList() {
  const [posts, setPosts] = useState([]);
  console.log('my state now - ', posts);
  const _apiBase = 'https://jsonplaceholder.typicode.com/';

  useEffect(() => {
    axios.get(`${_apiBase}posts/?_limit=3`).then((res) => {
      setPosts(res.data);
    });
  }, []);

  function changeState(newState) {
    console.log('changeState work', newState);
    setPosts(newState);
  }

  const items = posts.map((item) => {
    return (
      <PostTemplate
        posts={posts}
        changeState={changeState}
        key={item.id}
        id={item.id}
        title={item.title}
        descr={item.body}
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
