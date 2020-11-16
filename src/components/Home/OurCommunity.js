import React from "react"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"
import Community from "./Community"

const getCommunity = graphql`
  {
    community: allContentfulCommunity {
      edges {
        node {
          id
          title
          description {
            description
          }
          image {
            fluid(maxHeight: 400) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function OurCommunity() {
  return (
    <StaticQuery
      query={getCommunity}
      render={data => {
        return (
          <section className="community py-5">
            <div className="container">
              <Title title="~ our community ~" />
              <div className="row">
                {data.community.edges.map(({ node: community }) => {
                  return <Community key={community.id} community={community} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
