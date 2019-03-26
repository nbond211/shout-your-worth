import React from "react"
import { graphql } from "gatsby"
import _ from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FAQ from "../components/faq"
import PhotoStrip from "../components/photo-strip"
import IndexStyles from "./index.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className={IndexStyles.title}>Shout Your Worth is a toolkit to help you communicate your value.</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <PhotoStrip folderName="faq"><FAQ /></PhotoStrip>
  </Layout>
)

export default IndexPage
