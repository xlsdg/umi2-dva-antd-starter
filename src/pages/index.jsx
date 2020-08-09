/**
 * title: page.home.title
 */
import React from 'react';
// import { connect } from 'umi';
import { Button } from 'antd';

import { createConnectSelector } from '@/redux/actions/home';

import styles from './index.less';

function Body(props) {
  // const {  } = props;
  // console.log(props);
  return (
    <div className={styles.container}>
      <Button type="primary">Home</Button>
    </div>
  );
}

Body.propTypes = {};

Body.defaultProps = {};

export default createConnectSelector('', null, null, React.memo(Body));
