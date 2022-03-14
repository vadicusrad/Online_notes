import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
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

function EditPost({ posts, changeState, handleEditPopUp }) {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  // Поскольку я не могу редактровать данные сервера пока буду работать со стейтом.
  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((res) => setPost(res.data));
  // }, [id]);

  useEffect(() => {
    const currentId = Number(id);

    const filteredPosts = posts.filter((item) => item.id === currentId);
    setPost(filteredPosts[0]);
  }, []);

  function setPostState(key, value) {
    let newPost = JSON.parse(JSON.stringify(post));
    newPost[key] = value;
    setPost(newPost);
  }

  function saveChangesInState() {
    // Поскольку я не могу редактровать данные сервера пока буду работать со стейтом.
    // axios
    //   .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    //     title: post.title,
    //     body: post.body,
    //   })
    //   .then((res) => console.log('axios.put ===', res));

    const newPosts = JSON.parse(JSON.stringify(posts));

    newPosts.forEach((item) => {
      if (item.id === post.id) {
        item.title = post.title;
        item.body = post.body;
      }
    });

    changeState(newPosts);
    handleEditPopUp({ active: true, message: 'Changes saved' });
  }

  return (
    <>
      {post ? (
        <>
          <h2>Edit Post {id}</h2>
          <NewPostTemplate>
            <InputTitle
              onChange={(e) => setPostState('title', e.target.value)}
              defaultValue={post.title}
            />
            <InputBody
              onChange={(e) => setPostState('body', e.target.value)}
              defaultValue={post.body}
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
