import React, { FunctionComponent } from 'react';

import styles from './Section.module.scss';

interface Props {
  isLoading: Boolean;
}

const Section: FunctionComponent<Props> = ({ children, isLoading }) => {
  return (
    <div className={styles.Section}>
      {children}
      {isLoading ? <span className={styles.LoadingMessage}>Loading...</span> : null}
    </div>
  );
};

export default Section;
