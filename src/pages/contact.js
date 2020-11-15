import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from "../components/Globals/BackgroundSection"
import ContactUs from "../components/Home/ContactUs"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact Us" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Contact Us"
      styleClass="default-background"
    />
    <ContactUs />
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
