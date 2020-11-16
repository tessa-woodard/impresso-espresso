import React from "react"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"
import Beverage from "./Beverage"

const getBeverages = graphql`
  {
    beverages: allContentfulBeverageItem {
      edges {
        node {
          id
          title
          image {
            fluid(maxHeight: 300) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Beverages() {
  return (
    <StaticQuery
      query={getBeverages}
      render={data => {
        return (
          <section className="beverage py-5">
            <div className="container beverage">
              <Title title="Choose Your Style // Choose Your Flavor" />
              <div className="row">
                {data.beverages.edges.map(({ node: beverage }) => {
                  return <Beverage key={beverage.id} beverage={beverage} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
