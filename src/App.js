import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import EditPost from './components/EditPost';
import { Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList';
import SinglePostPage from './components/SinglePostPage';
import CreatePost from './components/CreatePost';
import { useState, useEffect } from 'react';
import PopUpMessage from './components/PopUpMessage';
import api from './axiosAPI/api';

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
  // console.log('my state now - ', posts);
  const [popUp, setPopUp] = useState({
    active: false,
    message: '',
    color: 'grey',
  });

  function handleEditPopUp(popUpObject) {
    setPopUp(popUpObject);
    setTimeout(() => {
      setPopUp((popUpObject.active = false));
    }, 2000);
  }

  useEffect(() => {
    const postsFromLS = JSON.parse(localStorage.getItem('myPosts'));

    postsFromLS ? setPosts(postsFromLS) : getResurses();
  }, []);

  function getResurses() {
    api
      .getPosts()
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }

  function changeState(newState) {
    localStorage.setItem('myPosts', JSON.stringify(newState));
    const myPostsFromLS = JSON.parse(localStorage.getItem('myPosts'));
    setPosts(myPostsFromLS);
  }

  return (
    <AppContainer>
      <GlobalStyle />
      <Routes>
        <Route
          path='/'
          element={
            <PostsList
              getResurses={getResurses}
              changeState={changeState}
              posts={posts}
            />
          }
        />
        <Route path='/posts/:id' element={<SinglePostPage />} />
        <Route
          path='/posts/:id/edit'
          element={
            <EditPost
              handleEditPopUp={handleEditPopUp}
              posts={posts}
              changeState={changeState}
            />
          }
        />
        <Route
          path='/posts/new'
          element={
            <CreatePost
              handleEditPopUp={handleEditPopUp}
              posts={posts}
              changeState={changeState}
            />
          }
        />
      </Routes>
      {popUp.active ? (
        <PopUpMessage
          handleEditPopUp={handleEditPopUp}
          messageText={popUp.message}
          color={popUp.color}
        />
      ) : null}
    </AppContainer>
  );
}

export default App;
