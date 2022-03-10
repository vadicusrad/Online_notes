import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
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

function EditPost({ posts }) {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  console.log('post ===', post);
  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((res) => setPost(res.data));
  // }, [id]);

  useEffect(() => {
    const currentId = Number(id);

    const filteredPosts = posts.filter((item) => item.id === currentId);
    setPost(filteredPosts);
  }, []);

  function setPostState(key, value) {
    let newPost = post;
    newPost[0][key] = value;
    setPost(newPost);
  }

  function saveChangesInState() {
    const id = post.id;
    const newPosts = posts;
    newPosts.map((item) => {
      if (item.id === id) {
        item.title = post.title;
        item.body = post.body;
      }
    });

    console.log(newPosts);
  }

  return (
    <>
      {post ? (
        <>
          <h2>Edit Post {id}</h2>
          <NewPostTemplate>
            <InputTitle
              onChange={(e) => setPostState('title', e.target.value)}
              defaultValue={post[0].title}
            />
            <InputBody
              onChange={(e) => setPostState('body', e.target.value)}
              defaultValue={post[0].body}
            />

            <ButtonWrapper>
              <span
                onClick={() => {
                  saveChangesInState();
                }}
              >
                <SaveIcon />
              </span>

              <BackIcon />
            </ButtonWrapper>
          </NewPostTemplate>
        </>
      ) : null}
    </>
  );
}

export default EditPost;
