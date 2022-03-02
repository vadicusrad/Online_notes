import { useEffect, useState } from 'react';
import axios from 'axios';
import PostTemplate from './components/PostTemplate';
import styled, { createGlobalStyle } from 'styled-components';
import AddPost from './components/AddPost';

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

const AppPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

function App() {
  const [posts, setPosts] = useState([]);

  const _apiBase = 'https://jsonplaceholder.typicode.com/';

  useEffect(() => {
    axios.get(`${_apiBase}posts/?_limit=4`).then((res) => {
      setPosts(res.data);
    });
  }, []);

  function changeState(newState) {
    setPosts(newState);
  }

  console.log(posts);

  return (
    <AppContainer>
      <GlobalStyle />
      <h1>Posts</h1>
      <AppPosts>
        {posts.length > 1 ? (
          posts.map((item) => {
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
          })
        ) : (
          <PostTemplate
            posts={posts}
            changeState={changeState}
            key={posts.id}
            id={posts.id}
            title={posts.title}
            descr={posts.body}
          />
        )}
        <AddPost />
      </AppPosts>
    </AppContainer>
  );
}

export default App;
