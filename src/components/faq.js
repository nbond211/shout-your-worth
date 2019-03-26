import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash";
import faqStyles from "../styles/faq.module.css"

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

  return <div className={faqStyles.wrapper}>
    <div className={faqStyles.container}>
      <h5>Frequently Asked Questions</h5>
      {_.map(faqs, (e, idx) => 
        <div className={faqStyles.question} key={idx}>
          <h3>{e.node.question}</h3>
          <p>{e.node.answer}</p>
        </div>
        )}
    </div>
  </div>;
}

export default FAQ