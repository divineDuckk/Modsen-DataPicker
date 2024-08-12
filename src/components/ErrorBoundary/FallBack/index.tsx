import { FC } from 'react';

import styles from './fallback.module.css';

export const FallBack: FC = () => (
  <div className={styles.fallback}>
    <p>Oops... Something went wrong.</p>
  </div>
);
