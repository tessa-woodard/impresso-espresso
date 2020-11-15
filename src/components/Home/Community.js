import React from 'react'
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"

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
              fixed(width: 100, height: 100) {
                src
              }
            }
        }
    }
    }
  }
`

export default function Community() {
    return (
        <StaticQuery
            query={getCommunity}
            render={data => {
                return (
                    <section className="py-5">
                        <div className="container">
                            <Title title="our products" />
                            <div className="row">
                                    
                                    
                                            <h6 className="mb-0">{getCommunity.community.edges.node.title}</h6>
                                            <h6 className="text-white mb-0">{getCommunity.community.edges.node.description}</h6>
                                        
                                    )
                                
                            </div>
                        </div>
                    </section>
                )
            }}
        />
    )
}