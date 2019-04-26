import React from "react"
import styles from "../styles/button.module.css"

export default function Button(props) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <button className={`${props.className} ${styles.button}`}>{props.children}</button>
    </a>
  );
}
