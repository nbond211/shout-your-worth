import React from "react"
import styles from "../styles/about.module.css"
import accomplishment34 from "../images/about/accomplishment-34.png";
import accomplishment35 from "../images/about/accomplishment-35.png";
import result19 from "../images/about/result-19.png";
import skill22 from "../images/about/skill-22.png";
import skill25 from "../images/about/skill-25.png";

export default function About(props) {
  return <div className={styles.container}>
    <div className={styles.splash}/>
    <div className={styles.col_0}>
      <h5 className={styles.smallTitle}>How Does It Work?</h5>
      <h1 className={styles.subtitle}>Practice talking about the value that you bring to the table in an approachable, fun setting.</h1>
    </div>
    <div className={styles.col_2}>
      <img className={`${styles.accomplishment35} ${styles.card}`} src={accomplishment35}/>
      <img className={`${styles.skill25} ${styles.card}`} src={skill25}/>
      <img className={`${styles.result19} ${styles.card}`} src={result19}/>
      <img className={`${styles.skill22} ${styles.card}`} src={skill22}/>
      <img className={`${styles.accomplishment34} ${styles.card}`} src={accomplishment34}/>
    </div>
    <div className={styles.about}>
      <div className={styles.col_1}>
        <h3>Why Shout Your Worth?</h3>
        <p>A playful, game-like experience creates a safe space where players feel supported and comfortable being vulnerable and brave.<br/><br/>
          Players walk away from the experience feeling confident and empowered to tackle what can be an uncomfortable conversation – advocating for themselves.<br/><br/></p>
        <h3>What are Value Statements?</h3>
        <p>Value statements are a proven method for communicating your worth. They can be used in conversation that requires self-advocacy such as a salary negotiation or job interview.</p>
      </div>
    </div>
  </div>;
}
