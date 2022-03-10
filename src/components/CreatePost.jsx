import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SaveIcon from './SaveIcon';
import BackIcon from './BackIcon';

const NewPostTemplate = styled.div`
  border: solid 1px;
  padding: 10px;
  position: relative;
  height: 300px;
  width: 300px;
`;

const InputTitle = styled.input.attrs({ placeholder: 'Title' })`
  margin: 0 0 20px 0;
  height: 60px;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  overflow: hidden;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: solid 1px;
`;

const InputBody = styled.textarea.attrs({
  placeholder: 'Post text',
})`
  margin: 0;
  height: 170px;
  width: 100%;
  overflow: hidden;
  border-bottom: solid 1px;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
`;

const ButtonWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
`;

function CreatePost({ posts, changeState }) {
  const [post, setPost] = useState({
    id: null,
    title: '',
    body: '',
  });

  function setPostState(key, value) {
    let newPost = post;
    newPost[key] = value;
    setPost(newPost);
  }

  function getRandomId(max = 100000, min = 101) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    setPostState('id', getRandomId());
  }, []);

  function postNewPost() {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', { post })
      .then(() => {
        const newState = [...posts];
        newState.push(post);
        changeState(newState);
      });
    // так как JSON Placeholder не позвлоляет реально удалять посты с сервера
    // я сохраню новый пост себе в главный стейт с постами
  }

  return (
    <>
      <h2>Create new post</h2>
      <NewPostTemplate>
        <InputTitle onChange={(e) => setPostState('title', e.target.value)} />
        <InputBody onChange={(e) => setPostState('body', e.target.value)} />
        <ButtonWrapper>
          <span onClick={() => postNewPost()}>
            <SaveIcon />
          </span>

          <BackIcon />
        </ButtonWrapper>
      </NewPostTemplate>
    </>
  );
}

export default CreatePost;
