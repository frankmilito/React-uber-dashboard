import React, {useEffect} from "react"
import styled from "styled-components"
import Analytics from "./Analytics"
import Navbar from "./Navbar"
import Faq from "./Faq"
import Transfer from "./Transfers"
import Profile from "./Profile"
import Earnings from "./Earnings"
import scrollreveal from "scrollreveal"
export default function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      reset: false,
    })
    sr.reveal(
      //   `
      //   .brand,
      //   .links>ul>li:nth-of-type(1),
      //   .links>ul>li:nth-of-type(2),
      //   .links>ul>li:nth-of-type(3),
      //   .links>ul>li:nth-of-type(4),
      //   .links>ul>li:nth-of-type(5),
      //   .links>ul>li:nth-of-type(6),
      //   .logout,
      // `,
      `
        nav,
        .row__one,
        .row__two
      `,
      {opacity: 0, interval: 100}
    )
  }, [])
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
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    height: 100%;

    .grid {
      .row__one,
      .row__two {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`
