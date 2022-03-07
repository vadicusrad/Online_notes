import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import EditPost from './components/EditPost';
import { Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList';
import SinglePostPage from './components/SinglePostPage';
import CreatePost from './components/CreatePost';

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
  return (
    <AppContainer>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<PostsList />} />
        <Route path='/posts/:id' element={<SinglePostPage />} />
        <Route path='/posts/:id/edit' element={<EditPost />} />
        <Route path='/posts/new' element={<CreatePost />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
