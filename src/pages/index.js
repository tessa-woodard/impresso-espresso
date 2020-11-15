import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HPVideo from '../components/Globals/HPVideo'
// import Community from '../components/Home/Community'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HPVideo />
    {/* <Community /> */}
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    community: allContentfulCommunity {
      edges {
        node {
          id
          title
         description {
            description
          }
          image {
            fixed(width: 100, height: 100) {
              src
            }
          }
        }
      }
    }
  }
`

export default IndexPage
