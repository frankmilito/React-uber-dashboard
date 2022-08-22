import React from "react"
import styled from "styled-components"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {cardStyle} from "./ReusableStyles"
import image from "../assets/Avatar.png"

export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>Frank milito</h2>
        <h5>
          <HiOutlineLocationMarker /> New York, USA
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Days at work</h5>
          <h3>38</h3>
        </div>
        <div className="container">
          <h5>Rides</h5>
          <h3>272</h3>
        </div>
        <div className="container">
          <h4>Hours</h4>
          <h3>76</h3>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  ${cardStyle};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`
