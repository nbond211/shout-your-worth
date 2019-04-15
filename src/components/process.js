import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styles from "../styles/process.module.css"

class Process extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: 0 }
    this.advance = this.advance.bind(this);
    this.previous = this.previous.bind(this);
  }

  advance() {
    this.setState({index: (this.state.index + 1) % this.props.data.length})
  }

  previous() {
    const {index} = this.state;
    let newIndex = index - 1;
    newIndex = (newIndex < 0) ? this.props.data.length - 1 : newIndex;
    this.setState({index: newIndex});
  }


  render() {
    const current = this.props.data[this.state.index].node;

    const dots = [1, 2, 3].map((val, index) => {
      const className = `${styles.dot} ${index === this.state.index ? styles.selected : ""}`
      return (<span onClick={() => this.setState({index})} key={index} className={className}/>)
    });

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img
            src={require(`../images/process/${current.image}`)}
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>{current.title}</h3>
              <div className={styles.stageToggleContainer}>
                <svg onClick={this.previous} className={styles.arrow} width='5' height='9' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M4.286.047l.67.712L1.392 4.5l3.562 3.74-.67.713L.046 4.5z' fill='#2D2D2D'/>
                </svg>
                <span className={styles.number}>{this.state.index + 1} / 3</span>
                <svg onClick={this.advance} className={styles.arrow} width='5' height='9' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M.714.047l-.67.712L3.608 4.5.045 8.24l.67.713L4.954 4.5z' fill='#2D2D2D'/>
                </svg>
              </div>
            </div>
            <p className={styles.description}>{current.description}</p>
          </div>
        </div>
        <div className={styles.dotsContainer}>
          {dots}
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
