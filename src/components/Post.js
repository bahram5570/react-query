import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import styles from './Post.module.css';
import Spinner from './Spinner';

const fetchComment = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return await response.data;
};

const deletePost = async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

const Post = ({ post }) => {
  const { data, isLoading } = useQuery(['post', post.id], () =>
    fetchComment(post.id)
  );
  const deleteHandler = useMutation(deletePost);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.main}>
      <h2>Selected post</h2>
      <h4>{post.body}</h4>

      <ul>
        {data.map((x, i) => (
          <li key={i}>
            {x.name}
            <button onClick={() => deleteHandler.mutate(x.postId)}>X</button>
          </li>
        ))}
      </ul>

      {deleteHandler.isLoading && <Spinner />}

      {deleteHandler.isError && (
        <h3 className={styles.isError}>Failed to delete post!</h3>
      )}
      
      {deleteHandler.isSuccess && (
        <h3 className={styles.isSuccess}>The post has been deleted!</h3>
      )}
    </div>
  );
};

export default Post;
