import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash";

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

  return <div>
    <h5>Frequently Asked Questions</h5>
    {_.map(faqs, (e) => 
      <div>
        <h3>{e.node.question}</h3>
        <p>{e.node.answer}</p>
      </div>
      )}
  </div>;
}

export default FAQ