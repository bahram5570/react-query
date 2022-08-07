import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import styles from './App.module.css';
import Post from './components/Post';
import Spinner from './components/Spinner';

const mainApi = async (page) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
  );
  return response.data;
};

function App() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const { data, isLoading } = useQuery(
    ['main page', page],
    () => mainApi(page),
    { staleTime: 2000 }
  );

  const queryClient = useQueryClient();

  useEffect(() => {
    if (page <= 8) {
      const nextPage = page + 1;
      queryClient.prefetchQuery(['main page', nextPage], () =>
        mainApi(nextPage)
      );
    }
  }, [page, queryClient]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.main}>
      <div className={styles.btn}>
        <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
          Back
        </button>

        <h2>Page: {page}</h2>

        <button onClick={() => setPage(page + 1)} disabled={page >= 20}>
          Next
        </button>
      </div>

      <div className={styles.names}>
        {data.map((x) => (
          <div
            onClick={() => setSelected(x)}
            className={styles.item}
            key={x.id}
          >
            {x.id}. {x.title}
          </div>
        ))}
      </div>

      {selected && <Post post={selected} />}
    </div>
  );
}

export default App;
