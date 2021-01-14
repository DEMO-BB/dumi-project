import React from 'react';
import styles from './index.less'

export interface IFoo {
  /**
   * @description 标题名
   * @default hello
   */
  title: string; // 标题名
}
export default ({ title }: IFoo) => <h1 className={styles.title}>{title}</h1>;
