import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import styles from './App.module.css';
import Spinner from './components/Spinner';

const BASE_URL = 'https://swapi.dev/api/people';

const fetchPeople = async (url) => {
  return await axios.get(`${url}`);
};

function App() {
  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['infiniteQuery'],
      ({ pageParam = BASE_URL }) => fetchPeople(pageParam),
      { getNextPageParam: (lastPage) => lastPage.data.next || undefined }
    );

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.main}>
      {data.pages.map((x, j) => (
        <div className={styles.page} key={j}>
          {x.data.results.map((y, i) => (
            <p key={i}>{y.name}</p>
          ))}
        </div>
      ))}

      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        {!isFetching && 'Load more'}
        {isFetching && 'Fetching...'}
      </button>
    </div>
  );
}

export default App;
