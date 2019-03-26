import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery} from "gatsby"
import _ from "lodash"

import styles from "../styles/photo-strip.module.css"

export default function PhotoStrip(props) {
  const paths = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativeDirectory: { eq:"faq"} }) {
          edges {
            node {
              relativePath
            }
          }
        }
      }
    `
  ).allFile.edges;

  console.log(paths);

  return <div>
    <div className={styles.container}>
      { _.map(paths, (e, idx) => {
        let url = "../images/"+e.node.relativePath;
        return <div className={styles.image} style={{backgroundImage: "url("+url+")"}}>{url}</div>; 
      })}
    </div>
    {props.children}
  </div>;
}

// PhotoStrip.propTypes = {
//   photoPaths: PropTypes.arrayOf(PropTypes.string)
// }