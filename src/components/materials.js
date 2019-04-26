import React from "react"
import styles from "../styles/materials.module.css"
import materials from "../images/materials/materials.png"
import Button from "./button";

export default function Materials(props) {
  return <div className={styles.container}>
    <div className={styles.splash}/>
    <div className={styles.col_1}>
      <img className={styles.materials} src={materials} alt="Playmat, cards, and rulebook" />
    </div>
    <div className={styles.col_2}>
      <div className={styles.textContainer}>
      <h5 className={styles.downloadLabel}>Your Download Includes</h5>
      <ul className={styles.list}>
        <li>177 Shout Your Worth Cards</li>
        <li>1 Playmat</li>
        <li>1 Rule Booklet</li>
      </ul>
      </div>
      <Button className={styles.button} href="https://drive.google.com/file/d/1voaukF8i6dYZXjHSyTzbs1jlV2TJozc4/view" download>Download For Free</Button>
    </div>
  </div>;
}
