import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/Globals/BackgroundSection'
import Products from "../components/Home/Products"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Products" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Products"
      styleClass="default-background"
    />
    <Products />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "products-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    
  }
`

export default IndexPage