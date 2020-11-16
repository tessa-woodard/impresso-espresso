import React from "react"
import Img from "gatsby-image"

export default function Beverage({ beverage }) {
  return (
    <div className="col-9 col-sm-7 col-md-5 col-lg-3  mx-auto my-3">
      <div
        className="card"
        style={{ backgroundColor: "#45230f", minHeight: "100%" }}
      >
        <div style={{ maxHeight: "500px" }}>
          <Img fluid={beverage.image.fluid} className="card-img-top" />
          <div className="card-body text-center">
            <h3>{beverage.title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
