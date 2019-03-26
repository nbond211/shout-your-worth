import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash";
import styles from "../styles/faq.module.css"

function FAQ(props) {
  const faqs = useStaticQuery(
    graphql`
      query {
        allFaqsJson {
          edges {
            node {
              question,
              answer
            }
          }
        }
      }
    `
  ).allFaqsJson.edges;

  return <div className={styles.wrapper}>
    <div className={styles.container}>
      <h5>Frequently Asked Questions</h5>
      {_.map(faqs, (e, idx) => 
        <div className={styles.question} key={idx}>
          <h3>{e.node.question}</h3>
          <p>{e.node.answer}</p>
        </div>
        )}
    </div>
  </div>;
}

export default FAQ