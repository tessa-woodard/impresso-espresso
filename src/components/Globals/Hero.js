import React from 'react'
import styled from "styled-components"
import coffee from '../videos/video.mp4'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <Video src={coffee} autoPlay loop muted playsInline type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Impresso Espresso</HeroH1>
                    <HeroP>Your Local Coffee Shop</HeroP>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    color: #000;

    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
            100deg, 
            rgba(0, 0, 0, 0.2) 0%, 
            rgba(0, 0, 0, 0.6) 100%, 
            transparent 100%);
        ),
        linear-gradient(100deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    }
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const Video = styled.div`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #000;
    line-height: 1.1;
    font-weight: bold;
`

const HeroH1 = styled.h1`
    font-size: clamp(1.5, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
`

const HeroP = styled.p`
ont-size: clamp(1, 3vw, 3rem);
margin-bottom: 2rem;
`