import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/Globals/BackgroundSection'
// import Contact from "../components/Home/Contact"

const ContactPage = ({ data }) => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <BackgroundSection
            img={data.img.childImageSharp.fluid}
            title="Contact Us"
            styleClass="default-background"
        />
        {/* <Contact /> */}
    </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    
  }
`

export default ContactPage