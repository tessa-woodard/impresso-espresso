import React from 'react'
import styled from "styled-components"

import coffee from '../videos/coffee.mp4'
import Title from "../Globals/Title"

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={coffee} autoPlay loop muted playsInline type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <Title title="Impresso Espresso" />
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
    height: 90.7vh;
    padding: 0 1rem;
    position: relative;

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
    z-index: 3;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 90.7vh;
    overflow: hidden;
`
const VideoBg = styled.video`
    width: 100%;
    height: 90.7vh;
    -o-object-fit: cover;
    object-fit: cover;
`

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    height: 90.7vh;
    padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    // height: 100vh;
    height: 90.7vh;
    padding: 0;
    color: #ffff;
    line-height: 1.1;
    font-weight: bold;
`