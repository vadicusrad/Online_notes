import React, { useState } from 'react';
import styled from 'styled-components';
import SaveIcon from './SaveIcon';
import BackIcon from './BackIcon';
import api from '../axiosAPI/api';

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

function CreatePost({ posts, changeState, handleEditPopUp }) {
  const [post, setPost] = useState({
    id: null,
    title: '',
    body: '',
    like: false,
  });

  function setPostState(key, value) {
    let newPost = post;
    newPost[key] = value;
    setPost(newPost);
  }

  function createNewPost() {
    api
      .createNewPost({
        title: post.title,
        body: post.body,
        like: false,
      })
      .then((data) => {
        // я сохраню новый пост себе в главный стейт с постами
        const newState = [...posts];
        newState.push(data);
        changeState(newState);
      });
  }

  return (
    <>
      <h2>Create new post</h2>
      <NewPostTemplate>
        <InputTitle onChange={(e) => setPostState('title', e.target.value)} />
        <InputBody onChange={(e) => setPostState('body', e.target.value)} />
        <ButtonWrapper>
          <span
            onClick={() => {
              createNewPost();
              handleEditPopUp({ active: true, message: 'Post created' });
            }}
          >
            <SaveIcon />
          </span>

          <BackIcon />
        </ButtonWrapper>
      </NewPostTemplate>
    </>
  );
}

export default CreatePost;
