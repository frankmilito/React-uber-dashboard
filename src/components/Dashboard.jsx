import React from "react"
import styled from "styled-components"
import Analytics from "./Analytics"
import Navbar from "./Navbar"
import Faq from "./Faq"
import Transfer from "./Transfers"
import Profile from "./Profile"
import Earnings from "./Earnings"

export default function Dashboard() {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <Faq />
        </div>
        <div className="row__two">
          <Earnings />
          <Transfer />
          <Profile />
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100vh;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }
`
