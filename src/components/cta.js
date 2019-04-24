import React from "react"
import { graphql, useStaticQuery} from "gatsby"
import _ from "lodash"
import PhotoStrip from "./photo-strip"
import Button from "./button";
import styles from "../styles/cta.module.css"

export default function CTA(props) {
  const {allFile} = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativeDirectory: { eq:"cta"} }) {
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

  return <PhotoStrip urls={urls}>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Button className={styles.button} href="https://drive.google.com/file/d/1voaukF8i6dYZXjHSyTzbs1jlV2TJozc4/view" download>Download For Free</Button>
        <h5 className={styles.cta}>What You Get</h5>
        <h5 className={styles.caret}>&#8964;</h5>
      </div>
    </div>
  </PhotoStrip>;
}
