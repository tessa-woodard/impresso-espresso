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

// const HPVideoContainer = styled.div`
//     background: #ffff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 90.7vh;
//     padding: 0 1rem;
//     position: relative;

//     :before {
//         content: "";
//         position: absolute;
//         top: 0;
//         bottom: 0;
//         right: 0;
//         left: 0;
//         z-index: 2;
//         background: linear-gradient(
//             100deg,
//             rgba(0, 0, 0, 0.2) 0%,
//             rgba(0, 0, 0, 0.6) 100%,
//             transparent 100%);
//         ),
//         linear-gradient(100deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
//     }
// `

const VideoContent = styled.video`
  z-index: -3;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
