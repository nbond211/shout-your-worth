import React from "react"
import styles from "../styles/materials.module.css"
import materials from "../images/materials/materials.png"
import Button from "./button";

export default function Materials(props) {
  return <div className={styles.container}>
    <div className={styles.splash}/>
    <div className={styles.col_1}>
      <img className={styles.materials} src={materials} />
    </div>
    <div className={styles.col_2}>
      <h5 className={styles.downloadLabel}>Your Download Includes</h5>
      <ul className={styles.list}>
        <li>177 Shout Your Worth Cards</li>
        <li>1 Playmat</li>
        <li>1 Rule Booklet</li>
      </ul>
      <Button href="#TODO">Download For Free</Button>
    </div>
  </div>;
}
