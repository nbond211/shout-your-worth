import React from "react"
import styles from "../styles/cta.module.css"

export default function CTA(props) {
  return <div className={styles.wrapper}>
    <div className={styles.container}>
      <a href="#TODO"><button>Download The Kit</button></a>
      <h5 className={styles.cta}>What You Get</h5>
      <h5 className={styles.caret}>&#8964;</h5>
    </div>
  </div>;
}