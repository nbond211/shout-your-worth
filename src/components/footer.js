import React from "react"
import styles from "../styles/footer.module.css"

export default function Footer(props) {
  return <div className={styles.container}>
    <div className={styles.brand}>
      <div className={styles.logo} />
    </div>
    <div className={styles.created_by}>
      <h5 className={styles.footer}>Created By</h5>
      <p>Aarti Amalean<br/>Christina Allan<br/>Nick Bond<br/>Marie Yatsyk</p>
    </div>
    <div className={styles.as_part_of}>
      <h5 className={styles.footer}>As Part Of</h5>
      <p>Northeastern University<br/>Class of 2019<br/>Interaction Design Capstone</p>
    </div>
  </div>;
}