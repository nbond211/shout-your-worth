import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery} from "gatsby"
import _ from "lodash"

import styles from "../styles/photo-strip.module.css"

export default function PhotoStrip(props) {

  const {allFile} = useStaticQuery(
    graphql`
      query {
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

  console.log(allFile);
  const paths = _.map(allFile.edges, (e) => e.node.childImageSharp.fluid.src);

  return <div>
    <div className={styles.container}>
      { _.map(paths, (url, idx) => {
        // let url = "../images/"+e.node.relativePath;
        // return <div key={idx}>{p}</div>;
        return <div key={idx} 
          className={styles.image} 
          style={{backgroundImage: "url("+url+")"}} />; 
      })}
    </div>
    {props.children}
  </div>;
}

// PhotoStrip.propTypes = {
//   photoPaths: PropTypes.arrayOf(PropTypes.string)
// }