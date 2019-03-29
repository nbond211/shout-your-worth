import React from "react"
import styles from "../styles/about.module.css"

export default function About(props) {
  return <div className={styles.container}>
    <div className={styles.splash}>
      <div className={styles.col}>
        <h5>What is it?</h5>
        <h1>Shout Your Worth is a toolkit to help you communicate your value.</h1>
      </div>
      <div className={styles.col}>
        {/* TODO image goes here */}
      </div>
    </div>
    <div className={styles.about}>
      <div className={styles.col}>
        <h3>Why Shout Your Worth?</h3>
        <p>Talking about your value can be difficult, especially in high-stakes 
          situations like job interviews and salary negotiations. Shout Your Worth 
          is a tool to help you practice this crucial skill in a fun, game-like setting 
          so that you feel empowered to advocate for yourself anywhere! </p>
        <h3>What are Value Statements?</h3>
        <p>Value statements are a proven strategic device for communicating your worth. 
          They highlight what you did, how you did it, and the effect it had. Bring them 
          to any conversation that requires you to advocate for yourself.</p>
      </div>
    </div>
  </div>;
}