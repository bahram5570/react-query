import { NavLink } from 'react-router-dom';
import styles from './App.module.css';
import Pages from './components/pages/Pages';

function App() {
  return (
    <div className={styles.main}>
      <header>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.selected : '')}
        >
          Home
        </NavLink>
        
        <NavLink
          to="/items"
          className={({ isActive }) => (isActive ? styles.selected : '')}
        >
          Items
        </NavLink>
      </header>

      <Pages />
    </div>
  );
}

export default App;
