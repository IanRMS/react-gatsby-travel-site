import * as React from "react"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations"/>
  </Layout>
)

export default IndexPage
