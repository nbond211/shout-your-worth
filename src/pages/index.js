import React from "react"

import Layout from "../components/layout"
import About from "../components/about"
import CTA from "../components/cta"
import FAQ from "../components/faq"
import Footer from "../components/footer"
import Header from "../components/header"
import Materials from "../components/materials"
import SEO from "../components/seo"
import Testimonials from "../components/testimonials"
import Process from "../components/process";
import ValueStatement from "../components/value-statement"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <About />
    <ValueStatement />
    <CTA />
    <Materials />
    <Testimonials />
    <Process />
    <FAQ />
    <Footer />
  </Layout>
)

export default IndexPage
