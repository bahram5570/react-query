import { usePrefetch } from '../reactQuery/usePrefetch';

const Home = () => {
  usePrefetch();
  
  return <h2>Th is is "Home" page</h2>;
};

export default Home;
