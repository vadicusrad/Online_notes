import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AddNewPost = styled.div`
  border: solid 1px;
  padding: 10px;
  position: relative;
  height: 300px;
  cursor: pointer;
  transition: all 0.2s;
  height: 300px;
  width: 300px;
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

// function addNewPost(posts, changeState) {
//   axios
//     .post(`https://jsonplaceholder.typicode.com/posts`, {
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     })
//     .then((res) => {
//       console.log('Post - ', res);

//       if (res.status === 201) {
//         const newObj = {
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//           id: Math.random(),
//         };

//         changeState([...posts, newObj]);
//       }
//     });
// }
// function getRandom() {
//   return Math.random() * 1000;
// }
// // const randomId = getRandom();
function AddPostButton({ posts, changeState }) {
  return (
    <Link to={`posts/new`}>
      <AddNewPost changeState={changeState}
      // onClick={() => addNewPost(posts, changeState)}
      />
    </Link>
  );
}

export default AddPostButton;
