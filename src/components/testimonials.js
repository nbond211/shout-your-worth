import React from "react"
import PropTypes from "prop-types"
import styles from "../styles/testimonials.module.css"

export default class Testimonials extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.testimonials}>
      <h2>So this one time I...</h2>
      <div className={styles.value_statement}>
        <Statement title="accomplishment" value={"built something cool"} />
        <p className={styles.joiner}>using my</p>
        <Statement title="skill" value={"bravery"}/>
        <p className={styles.joiner}>and as a result,</p>
        <Statement title="result" value={"felt 30% more confident"} />
      </div>
    </div>;
  } 
}

function Statement(props) {
  return <div className={styles.statement}>
    <h3 className={styles.value}>{props.value}</h3>
    <h5 className={styles.title}>{props.title}</h5>
  </div>;
}

Statement.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
}