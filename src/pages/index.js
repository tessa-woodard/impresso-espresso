import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from "../components/Globals/BackgroundSection"
import OurCommunity from "../components/Home/OurCommunity"
import Video from "../components/Globals/Video"
import Reviews from "../components/Globals/Reviews/Reviews"
import CoffeeMachine from "../components/Globals/CoffeeMachine/CoffeeMachine"
import Beverages from "../components/Home/Beverages"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Impresso Espresso"
      styleClass="default-background"
    />
    <OurCommunity />
    <Video />
    <Reviews />
    <CoffeeMachine />
    <Beverages />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "home-background.jpeg" }) {
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
