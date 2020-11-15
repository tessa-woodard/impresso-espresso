import React from "react"
import styled from "styled-components"

const H1 = styled.h1`
  z-index: 4 !important;
  /* color: white !important; */
  letter-spacing: 0.3rem;
  font-weight: 400;
  font-size: 6rem;
`

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <H1 className="display-4 text-capitalize font-weight-bold">{title}</H1>
      </div>
    </div>
  )
}
