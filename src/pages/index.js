import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FAQ from "../components/faq"
import IndexStyles from "./index.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className={IndexStyles.title}>Shout Your Worth is a toolkit to help you communicate your value.</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <FAQ />
  </Layout>
)

export default IndexPage
