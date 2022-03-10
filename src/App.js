import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import EditPost from './components/EditPost';
import { Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList';
import SinglePostPage from './components/SinglePostPage';
import CreatePost from './components/CreatePost';
import Counter from './components/Counter';
import axios from 'axios';
import { useState, useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  `;

const AppContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
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
  return (
    <AppContainer>
      <GlobalStyle />
      <Routes>
        <Route
          path='/'
          element={<PostsList changeState={changeState} posts={posts} />}
        />
        <Route path='/posts/:id' element={<SinglePostPage />} />
        <Route path='/posts/:id/edit' element={<EditPost posts={posts} />} />
        <Route
          path='/posts/new'
          element={<CreatePost posts={posts} changeState={changeState} />}
        />
      </Routes>
      {/* <Counter /> */}
    </AppContainer>
  );
}

export default App;