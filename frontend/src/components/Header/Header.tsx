import React, { FunctionComponent } from 'react';

import styles from './Header.module.scss';

const Header: FunctionComponent = ({ children }) => (
  <h1 className={styles.Header}>{children}</h1>
);

export default Header;
