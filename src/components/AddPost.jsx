import React from 'react';
import styled from 'styled-components';

const AddNewPost = styled.div`
  border: solid 1px;
  padding: 10px;
  position: relative;
  height: 300px;
  cursor: pointer;
  transition: all 0.2s;
  &:after {
    content: '';
    width: 10px;
    height: 250px;
    background: grey;
    top: 12%;
    left: 47%;
    position: absolute;
  }
  &:before {
    content: '';
    width: 250px;
    height: 10px;
    background: grey;
    top: 50%;
    left: 12%;
    position: absolute;
  }
  &:hover {
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
`;

function AddPost() {
  return <AddNewPost />;
}

export default AddPost;
