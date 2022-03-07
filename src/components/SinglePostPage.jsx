import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SinglePostPage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data));
  }, [id]);

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={'/'}>Back</Link>
        </>
      ) : null}
    </div>
  );
};

export default SinglePostPage;
