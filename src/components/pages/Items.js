import { useFetchData } from "../reactQuery/useFetchData";
import Spinner from "../Spinner";
import styles from "./Items.module.css";

const Items = () => {
  const { data, isLoading, filtering } = useFetchData();

  if (isLoading) return <Spinner />;

  return (
    <>
      <label className={styles.checkBox}>
        <input type="checkbox" onChange={filtering} /> Show less
      </label>

      <div className={styles.items}>
        {data.map((x) => (
          <div key={x.id}>
            {x.id}. {x.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
