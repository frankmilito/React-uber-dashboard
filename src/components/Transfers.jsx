import React from "react"
import {HiArrowNarrowRight} from "react-icons/hi"
import styled from "styled-components"
import {cardStyle} from "./ReusableStyles"
import avatarImage from "../assets/Avatar.png"

export default function Transfers() {
  // const avatarImage =
  //   "https://www.cxservice360.com/how-to-calm-an-angry-customer-with-these-5-easy-to-master-tips-hannah-karanja/avatar/"
  const transactions = [
    {
      image: avatarImage,
      name: "From Kishan Sheth",
      time: "Today, 16:36",
      amount: "+$50",
    },
    {
      image: avatarImage,
      name: "To Lauras Santos",
      time: "Today, 08:49",
      amount: "-$25",
    },
    {
      image: avatarImage,
      name: "From Jadon S.",
      time: "Yesterday, 14:36",
      amount: "+$150",
    },
  ]
  return (
    <Section>
      <div className="title">
        <h2>Your Transfers</h2>
      </div>
      <div className="transactions">
        {transactions.map(transaction => (
          <div key={transaction.name} className="transaction">
            <div className="transaction_title">
              <div className="transaction_title_image">
                <img src={transaction.image} alt="" />
              </div>
              <div className="transaction_title_details">
                <h3>{transaction.name}</h3>
                <h5>{transaction.time}</h5>
              </div>
            </div>
            <div className="transaction_amount">
              <span>{transaction.amount}</span>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="view">
        View all <HiArrowNarrowRight />
      </a>
    </Section>
  )
}

const Section = styled.section`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_title {
        display: flex;
        gap: 1rem;
        &_image {
          img {
            height: 1.5rem;
            border-radius: 3rem;
          }
        }
      }
      &_amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #ffc107;
          span {
            color: #000;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #ffc107;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    text-decoration: none;
    svg {
      font-size: 1.4rem;
      transition: 0.3s ease-in-out;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
`
