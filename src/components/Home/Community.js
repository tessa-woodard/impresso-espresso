import React from "react"
import Img from "gatsby-image"

export default function Community({ community }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4  mx-auto my-3">
      <div className="card" style={{ alignItems: "center", minHeight: "100%" }}>
        <div style={{ maxHeight: "1000px" }}>
          <Img fluid={community.image.fluid} className="card-img-top" />
          <div className="card-body text-center">
            <h3>{community.title}</h3>
            <br />
            <h4>{community.description.description}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
