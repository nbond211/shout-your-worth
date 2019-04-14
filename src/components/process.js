import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styles from "../styles/process.module.css"

class Process extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: 0 }
    this.advance = this.advance.bind(this);
  }

  advance() {
    this.setState({index: (this.state.index + 1) % this.props.data.length})
  }


  render() {
    const current = this.props.data[this.state.index].node;

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img
            src={require(`../images/process/${current.image}`)}
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
              <h3>{current.title}</h3>
            </div>
            <p>{current.description}</p>
          </div>
        </div>
      </div>
  );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allProcessJson {
          edges {
            node {
              title,
              description,
              image
            }
          }
        }
      }
    `}
    render={data => <Process data={data.allProcessJson.edges} {...props} />}
  />
);
