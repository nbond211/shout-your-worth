import React from "react"
import styles from "../styles/header.module.css"

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}/>
        <div className={styles.divider}/>
        <h1 className={styles.slogan}>A toolkit to help you communicate your value</h1>
      </div>
      <div className={styles.topLeftShape}/>
      <div className={styles.bottomLeftShape}/>
      <div className={styles.bottomRightShape}/>
    </div>
  );
}
