import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import EventCardImage from "../Asserts/psgitech.png";
import logo_Registered from "../Asserts/logo_Registered.svg";
import school from "../Asserts/School.svg";
import bar_chart from "../Asserts/bar-chart-2.svg";
import logo_location from "../Asserts/logo_location.svg";
import logo_eye from "../Asserts/logo_eye.svg";
import logo_member from "../Asserts/logo_member.svg";
import logo_time from "../Asserts/logo_time.svg";
import logo_heart from "../Asserts/logo_heart.svg";
import calendar from "../Asserts/calendar.svg";
import logo_shares from "../Asserts/logo_share.svg";
import { Link } from "react-router-dom";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color:#D9D9D9;
    //font-family: 'Arial', sans-serif; /* Example font family */
    /* Add any other global styles you want to apply */
  }
`;

const LearnMore = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <EventHeroBanner>Event Title</EventHeroBanner>
        <Content>
          <EventFlex>
            <EventCard>
              <EventCardImg src={EventCardImage} alt="EventCardImg" />
              <EventCardContent>
                <EventCardTitle>Hackfest 2024</EventCardTitle>
                <EventCardT>
                  <img src={bar_chart} alt="bar_chart" srcset="" />
                  <EventCardD> Hack the solution </EventCardD>
                </EventCardT>
                <EventCardT>
                  <img src={school} alt="school" srcset="" />
                  <EventCardD>PSG Institute of Technology and Applied Research </EventCardD>
                </EventCardT>
                <EventCardT>
                  <img src={logo_location} alt="logo_location" srcset="" />
                  <EventCardD> PSG Institute of Technology and Applied Research, Neelambur, Tamil Nadu</EventCardD>
                </EventCardT>
              </EventCardContent>
            </EventCard>
            <EventDetailedData>
            <p>
              <strong>Description:</strong>
            </p>
            <p>Join us for Tech Hackathon 2024, an exciting two-day event bringing together innovative minds to solve real-world challenges through technology. Whether you're a seasoned developer, a budding entrepreneur, or a creative designer, this hackathon offers a unique opportunity to collaborate, create, and showcase your skills.</p>
            <p>
              <strong>Data and Time:</strong>
            </p>
            <p>
             Saturday, April 20th, 2024 - Sunday, April 21st, 2024
              <br />
              9:00 AM - 6:00 PM (both days)
            </p>
            <p>
              <strong>Registration:</strong>
            </p>
            <p>Registration is free and open to individuals and teams of up to four members. Simply register online through our website by April 15th, 2024, to secure your spot.</p>
            <p>
              <strong>Theme:</strong>
            </p>
            <p>This year's hackathon theme is "Building a Sustainable Future." Participants are encouraged to develop innovative solutions that address environmental challenges, promote sustainability, and drive positive social impact.</p>
            <p>
              <strong>Prize:</strong>
            </p>
            <p>Exciting prizes await the top teams, including cash rewards, mentorship opportunities, and access to incubation programs. Categories include Best Overall Hack, Most Innovative Solution, and Best User Experience.</p>
            <p>
              <strong>Judging Cretiria:</strong>
            </p>
            <p>Projects will be evaluated based on creativity, technical complexity, feasibility, and potential impact. Judges will comprise industry experts, entrepreneurs, and community leaders.</p>
            <p>
              <strong>Resources:</strong>
            </p>
            <p>Participants will have access to a variety of resources, including workshops, technical support, and exclusive access to sponsor APIs and datasets.</p>
            <p>
              <strong>Rules and Guidelines:</strong>
            </p>
            <p>Participants must adhere to the hackathon's code of conduct and ethical guidelines. Projects must be original and developed during the hackathon timeframe.</p>
            <p>
              <strong>Contact Information:</strong>
            </p>
            <p>For inquiries or support, please email [email address] or visit our website [website URL].</p>
          </EventDetailedData>

          </EventFlex>
          <EventStats>
              <EventStatsTitle>
                <Cost>Free</Cost>
                <Register>
                  <div>
                    <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>
                      <button style={{fontSize:"0.9rem"}}>Register Now</button>
                    </Link>
                  </div>
                </Register>
              </EventStatsTitle>
              <StatContainer>
                <Stats>
                  <StatImg>
                    <img src={logo_Registered} alt="registered" />
                  </StatImg>
                  <div style={{ marginLeft: "1rem" }}>
                    <StatDetail>Registered</StatDetail>
                    <StatCount>22</StatCount>
                  </div>
                </Stats>
                <Stats>
                  <StatImg>
                    <img src={logo_time} alt="registered" />
                  </StatImg>
                  <div style={{ padding: "1rem" }}>
                    <StatDetail>Registration Deadline</StatDetail>
                    <StatCount>2 Days Left</StatCount>
                  </div>
                </Stats>
                <Stats>
                  <StatImg>
                    <img src={logo_member} alt="registered" />
                  </StatImg>
                  <div style={{ padding: "1rem" }}>
                    <StatDetail>Team Size</StatDetail>
                    <StatCount>4-5 members</StatCount>
                  </div>
                </Stats>
                <Stats>
                  <StatImg>
                    <img src={logo_eye} alt="registered" />
                  </StatImg>
                  <div style={{ padding: "1rem" }}>
                    <StatDetail>Views</StatDetail>
                    <StatCount>2,005</StatCount>
                  </div>
                </Stats>
              </StatContainer>
              <StatShare>
                <ShareFlex>
                  <ShareWishList>
                    <button style={{ display: "flex", alignItems: "center", border: "none", borderRadius: "5px" }}>
                      <img src={logo_heart} alt="Logo" style={{ marginRight: "5px" }} />
                      Add to favourite
                    </button>
                  </ShareWishList>
                  <ShareCalender>
                    <button style={{ display: "flex", alignItems: "center", border: "none", borderRadius: "5px" }}>
                      <img src={calendar} alt="Logo" style={{ marginRight: "5px" }} />
                      Add to favourite
                    </button>
                  </ShareCalender>
                </ShareFlex>
                <ShareBtn>
                  <button style={{ display: "flex", alignItems: "center", border: "none", borderRadius: "5px" }}>
                    <img src={logo_shares} alt="Logo" style={{ marginRight: "5px" }} />
                    Share
                  </button>
                </ShareBtn>
              </StatShare>
          </EventStats>


        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  //position: relative;
`;

const EventHeroBanner = styled.div`
  height: 28rem;
  width: 100%;
  background-color: #e0e4e9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
`;

const Content = styled.div``;

const EventFlex = styled.div`
  display: flex;
  flex-direction: column;
  position:relative;
`;

const EventCard = styled.div`
  height: 16rem;
  width: 55rem;
  background-color: #f2f2f2;
  margin-top: 3rem;
  margin-left: 3rem;
  margin-bottom: 3rem;
  margin-right: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
`;

const EventCardImg = styled.img`
  width: 7rem;
  height: 7rem;
  //background-color: #e0e4e9;
  padding: 1rem;
`;

const EventCardContent = styled.div`
  padding: 3rem;
`;

const EventCardTitle = styled.div`
  font-weight: 600;
  margin-bottom: 1rem;
`;

const EventCardT = styled.div`
  display: flex;
  flex-direction: row;
`;

const EventCardD = styled.div`
  padding: 0.5rem;
`;

const EventDetailedData = styled.div`
  width: 55rem;
  margin-left: 3rem;
  //margin-top: -30rem;
  margin-bottom: 3rem;
  background-color: #f2f2f2;
  padding: 2rem;
  border-radius: 8px;
  line-height: 1.75rem;
  p {
    margin-top: 1rem;
  }
`;

const EventStats = styled.div`
  position:absolute;
  top:68%;
  right:2rem;
  width: 23rem;
  height: auto;
  margin-left: 2rem;
  margin-top: 3rem;

  //padding: 2rem;

  margin-bottom: 10rem;
`;

const EventStatsTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 8px 8px 0px 0px;
  margin-bottom: 0.3rem;
  button {
    width: 7rem;
    height: 3rem;
    border-radius: 8px;
    border: none;
    background-color: #0056b7;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    margin-left: 3rem;
  }
`;

const Cost = styled.div`
  font-weight: 600;
`;

const Register = styled.div``;

const StatContainer = styled.div`
  background-color: #f2f2f2;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  //align-items: center;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-top: 1rem;
  line-height: 1.5rem;
`;

const StatImg = styled.div``;

const StatDetail = styled.div`
  opacity: 0.8;
`;

const StatCount = styled.div`
  font-weight: 600;
`;

const StatShare = styled.div`
  width: 23rem;
  height: 100%;
  margin-top: 0.2rem;
  background-color: #f2f2f2;
  padding: 2rem 0rem 2rem 0rem;
  border-radius: 0 0 8px 8px;
  //padding-right: 0rem;
`;

const ShareFlex = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    padding: 1rem;
    border: none;
    background-color: #e0e4e9;
    border-radius: 8px;
    align-items: center;
    font-weight: 600;
  }
`;

const ShareWishList = styled.div``;

const ShareCalender = styled.div``;

const ShareBtn = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  button {
    padding: 1rem;
    border: none;
    background-color: #e0e4e9;
    border-radius: 8px;
    align-items: center;
    font-weight: 600;
  }
`;

export default LearnMore;
