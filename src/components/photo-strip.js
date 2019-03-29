import React from "react"
import _ from "lodash"
import styles from "../styles/photo-strip.module.css"

export default function PhotoStrip(props) {
  return <div className={props.className}>
    <div className={styles.container}>
      { _.map(props.urls, (url, idx) => {
        return <div key={idx} 
          className={styles.image} 
          style={{backgroundImage: "url("+url+")"}} />; 
      })}
    </div>
    {props.children}
  </div>;
}
