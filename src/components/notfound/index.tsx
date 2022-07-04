import React from "react";

import styles from "./notfound.module.scss";

const NotFound: React.FC = () => (
  <div className={styles.root}>
    <h1>
      <span>🤕</span>
      <br />
      Not found your request
    </h1>
    <h3>Sorry, but your page not found</h3>
  </div>
);

export default NotFound;
