import React from "react"
import styles from "../styles/materials.module.css"

export default function Materials(props) {
  return <div className={styles.container}>
    <div className={styles.col_1}>
      <img className={styles.materials} src={require('../images/materials-placeholder.png')} />
    </div>
    <div className={styles.col_2}>
      <h5>Your Download Includes</h5>
      <h2>
        <ul>
          <li>177 Shout Your Worth Cards</li>
          <li>1 Playmat</li>
          <li>1 Rule Booklet</li>
        </ul>
      </h2>
      <div className={styles.button_container}>
        <a href="#TODO" ><button>Download for Free</button></a>
      </div>
    </div>
  </div>;
}