import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"
import PhotoStrip from "./photo-strip"
import styles from "../styles/faq.module.css"

function FAQ(props) {
  const { allFaqsJson, allFile } = useStaticQuery(
    graphql`
      query {
        allFaqsJson {
          edges {
            node {
              question,
              answer
            }
          }
        },
        allFile(filter: { relativeDirectory: { eq:"faq"} }) {
          edges {
            node {
              childImageSharp {
                fluid {
                  src,
                  originalName
                }
              }
            }
          }
        }
      }
    `
  );

  const urls = _.map(allFile.edges, (e) => e.node.childImageSharp.fluid.src);

  return <PhotoStrip urls={urls} className={styles.faq}>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h5>Frequently Asked Questions</h5>
        {_.map(allFaqsJson.edges, (e, idx) => 
          <div className={styles.question} key={idx}>
            <h3>{e.node.question}</h3>
            <p>{e.node.answer}</p>
          </div>
          )}
      </div>
    </div>
  </PhotoStrip>;
}

export default FAQ