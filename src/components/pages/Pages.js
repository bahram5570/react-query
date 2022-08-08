import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Items from './Items';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items />} />
    </Routes>
  );
};

export default Pages;
