import React from "react"
import styles from "../styles/button.module.css"

export default function Button(props) {
  return (
    <a href={props.href} target="_blank">
      <button className={styles.button}>{props.children}</button>
    </a>
  );
}
