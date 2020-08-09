/**
 * title: page.404.title
 */
import React from 'react';
// import { formatMessage } from 'umi';

import styles from './index.less';

function Body(props) {
  // const {  } = props;
  return <div className={styles.container}>404</div>;
}

Body.propTypes = {};

Body.defaultProps = {};

export default React.memo(Body);
