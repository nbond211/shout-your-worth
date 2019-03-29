import React from "react"

import Layout from "../components/layout"
import CTA from "../components/cta"
import FAQ from "../components/faq"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Testimonials from "../components/testimonials"
import ValueStatement from "../components/value-statement"

import IndexStyles from "./index.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className={IndexStyles.title}>Shout Your Worth is a toolkit to help you communicate your value.</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ValueStatement />
    <CTA />
    <Testimonials />
    <FAQ />
    <Footer />
  </Layout>
)

export default IndexPage
