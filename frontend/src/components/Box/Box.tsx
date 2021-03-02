import React, { FunctionComponent } from 'react';

import styles from './Box.module.scss';

const Box: FunctionComponent = ({ children }) => {
  return <div className={styles.Box}>{children}</div>;
};

export default Box;
