import { FC } from 'react';
import { createPortal } from 'react-dom';

import styles from './popup.module.css';
import { PopUpProps } from './types';

export const PopUp: FC<PopUpProps> = ({ children, onClose, title }) => {
  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return createPortal(
    <div className={styles.popupWrapper} onClick={onClose}>
      <div className={styles.popupContainer} onClick={handleContainerClick}>
        <div className={styles.topPanel}>
          <h3>{title}</h3>
          <button className={styles.close} onClick={onClose} />
        </div>
        <div className={styles.mainContainer}>{children}</div>
      </div>
    </div>,
    document.getElementById('calendar')!,
  );
};
