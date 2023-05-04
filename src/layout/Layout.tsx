import { FC, ReactElement } from "react";
import styles from "./Layout.module.scss";

type TProps = {
  top: ReactElement;
  leftBar: ReactElement;
  children: ReactElement;
};

export const Layout: FC<TProps> = ({ top, leftBar, children }) => (
  <div className={styles.layout}>
    <div className={styles.leftBar}>{leftBar}</div>

    <div className={styles.contentWrapper}>
      <div className={styles.content}>
        <div className={styles.top}>{top}</div>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  </div>
);
