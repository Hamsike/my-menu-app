import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export const Home = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>🍔 Добро пожаловать!</h1>
    <Link to="/menu">
      <button className={styles.button}>
        Перейти в меню →
      </button>
    </Link>
  </div>
);