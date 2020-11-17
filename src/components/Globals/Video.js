import React from "react"
import styled from "styled-components"

import coffee from "../videos/coffee.mp4"

const Video = () => {
  return (
    <VideoContent
      src={coffee}
      autoPlay
      loop
      muted
      playsInline
      type="video/mp4"
    />
  )
}

export default Video

const VideoContent = styled.video`
  background: var(--mainRed);
  width: 100%;
  height: 80vh;
  margin-bottom: -0.5rem;
  padding: 2rem 0;
`
