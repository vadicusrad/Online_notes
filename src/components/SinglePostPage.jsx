import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../axiosAPI/api';

const SinglePostPage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    api.getSinglePost(id).then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={'/'}>Back</Link>
        </>
      ) : (
        'Loading'
      )}
    </div>
  );
};

export default SinglePostPage;
