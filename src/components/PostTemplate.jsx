import React from 'react';
import styled from 'styled-components';
import EditIcon from './EditIcon';
import DeletePost from './DeletePost';
import Heart from './Heart';
import { Link } from 'react-router-dom';
import api from '../axiosAPI/api';

const Post = styled.div`
  border: solid 1px;
  padding: 10px;
  position: relative;
  height: 300px;
  width: 300px;
`;

const PostTitle = styled.h2`
  margin: 0;
  height: 60px;
  overflow: hidden;
  border-bottom: solid 1px;
  padding: 10px;
  colot: black;
`;
const ButtonContainer = styled.div`
  height: 50px;
  width: 100%;
  border-top: solid 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.span`
  width: 100px;
  display: flex;
  justify-content: space-around;
`;

const RouteLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

function PostTemplate({ id, title, descr, changeState, posts, like }) {
  function editPostsState(obj) {
    const newPosts = JSON.parse(JSON.stringify(posts));

    newPosts.forEach((item) => {
      if (item.id === obj.id) {
        item.like = obj.like;
      }
    });
    changeState(newPosts);
  }

  function toggleLike() {
    api.toggleLike(id, { like: !like }).then((data) => {
      editPostsState(data);
    });
  }

  return (
    <Post>
      <PostTitle>
        <RouteLink to={`/posts/${id}`}>{title}</RouteLink>
      </PostTitle>

      <p>{descr}</p>
      <ButtonContainer>
        <ButtonWrapper>
          <EditIcon
            descr={descr}
            title={title}
            id={id}
            width='25'
            height='25'
            fill='black'
          />
          <DeletePost
            id={id}
            posts={posts}
            changeState={changeState}
            width='25'
            height='25'
            fill='black'
          />
        </ButtonWrapper>
        <span
          onClick={() => {
            toggleLike();
          }}
        >
          <Heart like={like} width='25' height='25' />
        </span>
      </ButtonContainer>
    </Post>
  );
}

export default PostTemplate;
