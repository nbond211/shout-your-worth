import React from "react"

import Layout from "../components/layout"
import About from "../components/about"
import CTA from "../components/cta"
import FAQ from "../components/faq"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/seo"
import Testimonials from "../components/testimonials"
import ValueStatement from "../components/value-statement"

import IndexStyles from "./index.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <About />
    <ValueStatement />
    <CTA />
    <Testimonials />
    <FAQ />
    <Footer />
  </Layout>
)

export default IndexPage
