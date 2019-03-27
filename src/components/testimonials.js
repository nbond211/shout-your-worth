import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styles from "../styles/testimonials.module.css"

class Testimonials extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: 0 }
    this.advance = this.advance.bind(this);
  }

  advance() {
    this.setState({index: (this.state.index + 1) % this.props.data.length})
  }

  componentDidMount() {
    this.interval = setInterval(() => {this.advance();}, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const current = this.props.data[this.state.index].node;

    return <div className={styles.container}>
      <div className={styles.testimonials}>
        <h1>{current.quote}</h1>
        <h5>{current.name}, {current.age}</h5>
      </div>
    </div>;
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allTestimonialsJson {
          edges {
            node {
              quote,
              name,
              age
            }
          }
        }
      }
    `}
    render={data => <Testimonials data={data.allTestimonialsJson.edges} {...props} />}
  />
);