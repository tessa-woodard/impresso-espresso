import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from "../components/Home/Info"
// import Menu from "../components/Home/Menu"
// import Products from "../components/Home/Products"
// import Contact from "../components/Home/Contact"

const MenuPage = ({ data }) => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <BackgroundSection
            img={data.img.childImageSharp.fluid}
            title="Menu"
            styleClass="default-background"
        />
        {/* <Menu items={data.menu} />
    <Products />
    <Contact /> */}
    </Layout>
)

export const query = graphql`
{
  img: file(relativePath:{eq: "default-background.jpeg" }){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default MenuPage