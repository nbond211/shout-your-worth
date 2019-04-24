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

  return <PhotoStrip urls={urls} className={styles.faq} containerClassName={styles.photostrip}>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h5 className={styles.title}>Frequently Asked Questions</h5>
        {_.map(allFaqsJson.edges, (e, idx) => 
          <div className={styles.question} key={idx}>
            <h3 className={styles.questionTitle}>{e.node.question}</h3>
            <p className={styles.questionAnswer} dangerouslySetInnerHTML={createMarkup(e.node.answer)}></p>
          </div>
          )}
      </div>
    </div>
    <div className={styles.blueLoops}/>
    <div className={styles.greenBlob}/>
    <div className={styles.pinkDots}/>
  </PhotoStrip>;
}

function createMarkup(rawText) {
  return {__html: rawText};
}

export default FAQ
