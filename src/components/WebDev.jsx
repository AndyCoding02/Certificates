import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
display: flex;
top:0;
left:2em;
right: 2em;
  font-size: 64px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Img = styled.img`
  background: url("../img/WebDev.jpg");
  display: flex;
    width: 1600px;
    height: 800px;
    top: 3.2em;
    bottom: 1em;
    left: 0;
    right: 84em;
    object-fit: cover;
    margin: auto;
    @media only screen and (max-width: 768px) {
         width: 500px;
         height: 400px;
   }
  `;

const WebDev = () => {
  return (
    <Section>
      <Title>Web Development</Title>
      <Img />
    </Section>
  )
}

export default WebDev;