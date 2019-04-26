import React from "react"
import PropTypes from "prop-types"
import AnimateOnChange from "./animation/AnimateOnChange"
import { graphql, StaticQuery } from "gatsby"
import styles from "../styles/value-statement.module.css"

class ValueStatement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 0,
      s: 0,
      r: 0.
    }

    this.randomizeValueStatement = this.randomizeValueStatement.bind(this);
  }

  randomizeValueStatement() {
    // guard against undefined props.data
    let a = this.props.data.accomplishments ? this.props.data.accomplishments.length : 1;
    let s = this.props.data.skills ? this.props.data.skills.length : 1;
    let r = this.props.data.results ? this.props.data.results.length : 1;

    this.setState({ 
      a: Math.floor(Math.random() * a),
      s: Math.floor(Math.random() * s),
      r: Math.floor(Math.random() * r)
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {this.randomizeValueStatement();}, 3400);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // guard against undefined props.data
    let accomplishment = this.props.data.accomplishments ? this.props.data.accomplishments[this.state.a] : "built something cool";
    let skill = this.props.data.skills ? this.props.data.skills[this.state.s] : "bravery";
    let result = this.props.data.results ? this.props.data.results[this.state.r] : "felt 30% more confident";

    return <div className={styles.container}>
      <h1>So this one time I...</h1>
      <div className={styles.value_statement}>
        <Statement title="accomplishment" value={accomplishment} />
        <p className={styles.joiner}>using my</p>
        <Statement title="skill" value={skill}/>
        <p className={styles.joiner}>and as a result,</p>
        <Statement title="result" value={result} />
      </div>
    </div>;
  } 
}

function Statement(props) {
  return <div className={styles.statement} id={props.title}>
    <AnimateOnChange>
      <h3 className={styles.value}>{props.value}</h3>
    </AnimateOnChange>
    <h5 className={styles.title}>{props.title}</h5>
  </div>;
}

Statement.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson {
          edges {
            node {
              accomplishments,
              skills,
              results
            }
          }
        }
      }
    `}
    render={data => <ValueStatement data={data.allDataJson.edges[0].node} {...props} />}
  />
);
