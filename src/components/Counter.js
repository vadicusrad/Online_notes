import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { setPosts } from '../redux/reducers/postsSlice';

function Counter() {
  const count = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();
  return (
    <div>
      {count}

      <button onClick={() => dispatch(setPosts())}>+</button>
    </div>
  );
}

export default Counter;
