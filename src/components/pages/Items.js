import { useFetchData } from '../reactQuery/useFetchData';
import Spinner from '../Spinner';
import styles from './Items.module.css';

const Items = () => {
  const { data, isLoading } = useFetchData();

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.main}>
      {data.map((x) => (
        <div key={x.id}>
          {x.id}. {x.name}
        </div>
      ))}
    </div>
  );
};

export default Items;
