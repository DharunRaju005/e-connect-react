import { doc } from "firebase/firestore";
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: white;
    font-family: 'Arial', sans-serif;
  }
`;

const Clubs = () => {

  //States and Toggle Methods

  const [isJoinOpen, setJoinOpen] = useState(false);
  const [isFollowed, setFollowed] = useState(false);
  const [isMuted, setMuted] = useState(false);
  const [navbarState, setNavbarState] = useState(0);
  const [isCreatePopupOpen, setCreatePopupOpen] = useState(false);

  var togglePopupOpen = () => {
    setCreatePopupOpen(!isCreatePopupOpen);
  };

  var toggleFollow = () => {
    setFollowed(!isFollowed);
  };

  var toggleMute = () => {
    setMuted(!isMuted);
  };

  var toggleJoin = () => {
    setJoinOpen(!isJoinOpen);
    setCreatePopupOpen(false);
  };

  var toggleNavbar = (n) => {
    setNavbarState(n);
  };

  //----------------End of States------------------------------------------------------------------------
  //Styled Components

  const SideBar = styled.div`
      width: 20%;
      background: white;
      color: black;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      height: 100vh;
      position : sticky;
      top : 0;
    `;

  const Button = styled.button`
      background: green;
      color: white; 
      border: 1px solid transparent;
      padding: 12px 24px;
      width: calc(100% - 20px);
      font-size: 16px;
      text-align: center;
      cursor: pointer;
      margin: auto; /* Center horizontally */
      display: block;
      margin : 10px;
    `;

  const FollowButton = styled(Button)`
      background : ${isFollowed ? "white" : "green"};
      color : ${isFollowed ? "red" : "white"};
      border : 1px solid ${isFollowed ? "red" : "transparent"};
    `;

  const SecondaryButton = styled(Button)`
      background : transparent;
      color : green;
      border : 1px solid green;
    `;

  const Menu = styled.div`
      background: white;
      padding: 10px;
    `;

  const MenuItem = styled.a`
      color: black;
      padding: 16px 32px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        background: #d8f3dc;
      }
    `;

    const Container = styled.div`
      display: flex;
    `;

  const ClubContents = styled.div`
      flex: 1;
      padding: 20px;
      display: flex;
      flex-direction: column;
    `;

  const ClubHeader = styled.div`
      //background: red;
      height: 100px;
      margin : 24px;
      display : flex;
      flex-direction : row;
      align-items : center;
      justify-content : space-between;
    `;

  const ClubHeaderAvatar = styled.div`
      //background: red;
      height: 100px;
      margin : 24px;
      display : flex;
      flex-direction : row;
      align-items : center;
    `;

  const ProfileImage = styled.div`
      //background: blue;
      height: 100px;
      align-content : center;
      margin-right : 12px;
    `;

  const ClubDetail = styled.div`
      //background: green;
      height: 100px;
      display : flex;
      flex-direction : column;
    `;

  const ClubButtons = styled.div`
      //background: yellow;
      display : flex;
      flex-direction : row;
      height : 75%;
      align-items : center;
      float : right;
    `;


  const ClubNav = styled.div`
  padding : 20px;
   height: 10px;
   margin : 0 20px;
   display : flex;
   flex-direction : row;
   align-items : center;
   justify-content : flex-start;
   gap: 32px;
   font-size: 16px;
 `;

const ClubMain = styled.div`
 padding : 20px;
 margin : 0 20px;
 height: 100%;
 //background : red;
 `;

const AnnounceCard = styled.div`
   background : #f5f5f7;
   padding : 24px;
   margin : 0 0 20px 0;
 `;

const Anchor = styled.a`
   color : black;
   text-decoration : none;
 `;

const LoadMoreButton = styled(SecondaryButton)`
   width : 30%;
   margin : 20px 0;
   margin-left : auto;
   margin-right : auto;
 `;

const EventCardCl = styled(AnnounceCard)`
   width : 25%;
   margin : 4px;
 `;

const RegisterButton = styled(Button)`
    margin-top : 24px;
    margin-left : 0;
    margin-right : 0;
    margin-bottom : 0;
    width :100%;
  `;

  //----------------End of Styled Components------------------------------------------------------------------------
  //Join Accordion Component


  const JoinAccordion = () => {
    const JoinAccordionStyle = {
      background: "#d8f3dc",
      padding: "10%",
      display: isJoinOpen ? "block" : "none",
    };

    const inputStyle = {
      width: "80%",
      padding: "12px 24px",
      background: "white",
      color: "black",
      border: "1px solid grey",
      marginTop: "12px",
      marginBottom: "12px",
    };

    const formStyle = {
      width: "100%",
    };

    const buttonStyle = {
      width: "100%",
      margin: "10px 0 0 0 ",
    };

    return !isCreatePopupOpen
      ? isJoinOpen && (
          <div style={JoinAccordionStyle}>
            <form style={formStyle}>
              <label htmlFor="clubName">Club code</label>
              <input
                type="text"
                id="clubName"
                className="textField"
                placeholder="Eg: CODIND234"
                style={inputStyle}
              ></input>
              <Button type="submit" style={buttonStyle}>
                Join
              </Button>
              <Button style={buttonStyle} onClick={togglePopupOpen}>
                Create
              </Button>
            </form>
          </div>
        )
      : isJoinOpen && (
          <div style={JoinAccordionStyle}>
            <form style={formStyle}>
              <label htmlFor="clubName">Enter new Club name</label>
              <input
                type="text"
                id="clubName"
                className="textField"
                placeholder="Eg: CODIND234"
                style={inputStyle}
              ></input>
              <Button type="submit" style={buttonStyle}>
                Next
              </Button>
            </form>
          </div>
        );
  };

  //----------------End of Join Accordion------------------------------------------------------------------------
  //Style variables

  const avatarClub = {
    borderRadius: "50%",
    marginRight: "10px",
  };
  
  const titleClub = {
    "font-size": "24px",
    "font-weight": "700",
    margin: "24px 10px 0 0",
  };

  const idClub = {
    "font-size": "16px",
    "font-weight": "400",
    margin: "8px 10px 0 0",
  };

  const navbarBorder = {
    "border-bottom": "2px solid black",
    "padding-bottom": "4px",
    "font-weight": "600",
  };

  const checkMark = { "margin-left": "4px", "vertical-align": "middle" };

  const announceMeta = {
    "font-size": "12px",
    "font-weight": "600",
    color: "#616161",
    "margin-top": "0",
  };

  const svgMeta = {
    height: "18px",
    fill: "rgb(57 57 57)",
    width: "18px",
    "vertical-align": "bottom",
    "margin-right": "4px",
  };

  const EventClStyle = {
    display: "flex",
    "flex-direction": "row",
    gap: "24px",
    "flex-wrap": "wrap",
  };

  //----------------End of Style Variables------------------------------------------------------------------------
  //Events - Club

  const EventsCl = () => {
    return navbarState == 1 ? (
      <div style={EventClStyle}>
        <EventCardCl>
          <p style={announceMeta}>14 APR 2024</p>
          <h3>ALL INDIA HACKETHON</h3>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
            </svg>
            5 MEMBERS
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.39,19.37L16.38,18L15,22L11.92,16L9,22L7.62,18L3.61,19.37L6.53,13.37C5.57,12.17 5,10.65 5,9A7,7 0 0,1 12,2A7,7 0 0,1 19,9C19,10.65 18.43,12.17 17.47,13.37L20.39,19.37M7,9L9.69,10.34L9.5,13.34L12,11.68L14.5,13.33L14.33,10.34L17,9L14.32,7.65L14.5,4.67L12,6.31L9.5,4.65L9.67,7.66L7,9Z" />
            </svg>
            $1000
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            COIMABTORE
          </p>
          <RegisterButton>Register</RegisterButton>
        </EventCardCl>

        <EventCardCl>
          <p style={announceMeta}>14 APR 2024</p>
          <h3>ALL INDIA HACKETHON</h3>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
            </svg>
            5 MEMBERS
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.39,19.37L16.38,18L15,22L11.92,16L9,22L7.62,18L3.61,19.37L6.53,13.37C5.57,12.17 5,10.65 5,9A7,7 0 0,1 12,2A7,7 0 0,1 19,9C19,10.65 18.43,12.17 17.47,13.37L20.39,19.37M7,9L9.69,10.34L9.5,13.34L12,11.68L14.5,13.33L14.33,10.34L17,9L14.32,7.65L14.5,4.67L12,6.31L9.5,4.65L9.67,7.66L7,9Z" />
            </svg>
            $1000
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            COIMABTORE
          </p>
          <RegisterButton>Register</RegisterButton>
        </EventCardCl>

        <EventCardCl>
          <p style={announceMeta}>14 APR 2024</p>
          <h3>ALL INDIA HACKETHON</h3>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
            </svg>
            5 MEMBERS
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.39,19.37L16.38,18L15,22L11.92,16L9,22L7.62,18L3.61,19.37L6.53,13.37C5.57,12.17 5,10.65 5,9A7,7 0 0,1 12,2A7,7 0 0,1 19,9C19,10.65 18.43,12.17 17.47,13.37L20.39,19.37M7,9L9.69,10.34L9.5,13.34L12,11.68L14.5,13.33L14.33,10.34L17,9L14.32,7.65L14.5,4.67L12,6.31L9.5,4.65L9.67,7.66L7,9Z" />
            </svg>
            $1000
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            COIMABTORE
          </p>
          <RegisterButton>Register</RegisterButton>
        </EventCardCl>

        <EventCardCl>
          <p style={announceMeta}>14 APR 2024</p>
          <h3>ALL INDIA HACKETHON</h3>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
            </svg>
            5 MEMBERS
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.39,19.37L16.38,18L15,22L11.92,16L9,22L7.62,18L3.61,19.37L6.53,13.37C5.57,12.17 5,10.65 5,9A7,7 0 0,1 12,2A7,7 0 0,1 19,9C19,10.65 18.43,12.17 17.47,13.37L20.39,19.37M7,9L9.69,10.34L9.5,13.34L12,11.68L14.5,13.33L14.33,10.34L17,9L14.32,7.65L14.5,4.67L12,6.31L9.5,4.65L9.67,7.66L7,9Z" />
            </svg>
            $1000
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            COIMABTORE
          </p>
          <RegisterButton>Register</RegisterButton>
        </EventCardCl>

        <EventCardCl>
          <p style={announceMeta}>14 APR 2024</p>
          <h3>ALL INDIA HACKETHON</h3>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
            </svg>
            5 MEMBERS
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.39,19.37L16.38,18L15,22L11.92,16L9,22L7.62,18L3.61,19.37L6.53,13.37C5.57,12.17 5,10.65 5,9A7,7 0 0,1 12,2A7,7 0 0,1 19,9C19,10.65 18.43,12.17 17.47,13.37L20.39,19.37M7,9L9.69,10.34L9.5,13.34L12,11.68L14.5,13.33L14.33,10.34L17,9L14.32,7.65L14.5,4.67L12,6.31L9.5,4.65L9.67,7.66L7,9Z" />
            </svg>
            $1000
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            COIMABTORE
          </p>
          <RegisterButton>Register</RegisterButton>
        </EventCardCl>

        <EventCardCl>
          <p style={announceMeta}>14 APR 2024</p>
          <h3>ALL INDIA HACKETHON</h3>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
            </svg>
            5 MEMBERS
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.39,19.37L16.38,18L15,22L11.92,16L9,22L7.62,18L3.61,19.37L6.53,13.37C5.57,12.17 5,10.65 5,9A7,7 0 0,1 12,2A7,7 0 0,1 19,9C19,10.65 18.43,12.17 17.47,13.37L20.39,19.37M7,9L9.69,10.34L9.5,13.34L12,11.68L14.5,13.33L14.33,10.34L17,9L14.32,7.65L14.5,4.67L12,6.31L9.5,4.65L9.67,7.66L7,9Z" />
            </svg>
            $1000
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            COIMABTORE
          </p>
          <RegisterButton>Register</RegisterButton>
        </EventCardCl>

        <EventCardCl>
          <p style={announceMeta}>14 APR 2024</p>
          <h3>ALL INDIA HACKETHON</h3>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
            </svg>
            5 MEMBERS
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.39,19.37L16.38,18L15,22L11.92,16L9,22L7.62,18L3.61,19.37L6.53,13.37C5.57,12.17 5,10.65 5,9A7,7 0 0,1 12,2A7,7 0 0,1 19,9C19,10.65 18.43,12.17 17.47,13.37L20.39,19.37M7,9L9.69,10.34L9.5,13.34L12,11.68L14.5,13.33L14.33,10.34L17,9L14.32,7.65L14.5,4.67L12,6.31L9.5,4.65L9.67,7.66L7,9Z" />
            </svg>
            $1000
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            COIMABTORE
          </p>
          <RegisterButton>Register</RegisterButton>
        </EventCardCl>

        <EventCardCl>
          <p style={announceMeta}>14 APR 2024</p>
          <h3>ALL INDIA HACKETHON</h3>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
            </svg>
            5 MEMBERS
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.39,19.37L16.38,18L15,22L11.92,16L9,22L7.62,18L3.61,19.37L6.53,13.37C5.57,12.17 5,10.65 5,9A7,7 0 0,1 12,2A7,7 0 0,1 19,9C19,10.65 18.43,12.17 17.47,13.37L20.39,19.37M7,9L9.69,10.34L9.5,13.34L12,11.68L14.5,13.33L14.33,10.34L17,9L14.32,7.65L14.5,4.67L12,6.31L9.5,4.65L9.67,7.66L7,9Z" />
            </svg>
            $1000
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            COIMABTORE
          </p>
          <RegisterButton>Register</RegisterButton>
        </EventCardCl>

        <EventCardCl>
          <p style={announceMeta}>14 APR 2024</p>
          <h3>ALL INDIA HACKETHON</h3>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
            </svg>
            5 MEMBERS
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.39,19.37L16.38,18L15,22L11.92,16L9,22L7.62,18L3.61,19.37L6.53,13.37C5.57,12.17 5,10.65 5,9A7,7 0 0,1 12,2A7,7 0 0,1 19,9C19,10.65 18.43,12.17 17.47,13.37L20.39,19.37M7,9L9.69,10.34L9.5,13.34L12,11.68L14.5,13.33L14.33,10.34L17,9L14.32,7.65L14.5,4.67L12,6.31L9.5,4.65L9.67,7.66L7,9Z" />
            </svg>
            $1000
          </p>
          <p style={announceMeta}>
            <svg
              style={svgMeta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            COIMABTORE
          </p>
          <RegisterButton>Register</RegisterButton>
        </EventCardCl>
        <LoadMoreButton>Load More</LoadMoreButton>
      </div>
    ) : (
      <></>
    );
  };

  //----------------End of Events------------------------------------------------------------------------
  //Announcements

  const Announcement = () => {
    if (navbarState == 0)
      return (
        <>
          <AnnounceCard>
            {" "}
            <Anchor href="#">
              <p style={announceMeta}>14 APR 2024</p> This is a sample
              Announcement Post.
            </Anchor>{" "}
          </AnnounceCard>
          <AnnounceCard>
            {" "}
            <Anchor href="#">
              <p style={announceMeta}>14 APR 2024</p> This is a sample
              Announcement Post.
            </Anchor>{" "}
          </AnnounceCard>
          <AnnounceCard>
            {" "}
            <Anchor href="#">
              <p style={announceMeta}>14 APR 2024</p> This is a sample
              Announcement Post.
            </Anchor>{" "}
          </AnnounceCard>
          <AnnounceCard>
            {" "}
            <Anchor href="#">
              <p style={announceMeta}>14 APR 2024</p> This is a sample
              Announcement Post.
            </Anchor>{" "}
          </AnnounceCard>
          <AnnounceCard>
            {" "}
            <Anchor href="#">
              <p style={announceMeta}>14 APR 2024</p> This is a sample
              Announcement Post.
            </Anchor>{" "}
          </AnnounceCard>
          <AnnounceCard>
            {" "}
            <Anchor href="#">
              <p style={announceMeta}>14 APR 2024</p> This is a sample
              Announcement Post.
            </Anchor>{" "}
          </AnnounceCard>
          <AnnounceCard>
            {" "}
            <Anchor href="#">
              <p style={announceMeta}>14 APR 2024</p> This is a sample
              Announcement Post.
            </Anchor>{" "}
          </AnnounceCard>
          <AnnounceCard>
            {" "}
            <Anchor href="#">
              <p style={announceMeta}>14 APR 2024</p> This is a sample
              Announcement Post.
            </Anchor>{" "}
          </AnnounceCard>
          <LoadMoreButton>Load More</LoadMoreButton>
          <br></br>
        </>
      );
    return <></>;
  };
  
  //----------------End of Announcements------------------------------------------------------------------------
  //About

  const AboutCl = () => {
    const socialIcons = {
      display: "flex",
      "flex-direction": "row",
      gap: "12px",
      margin: "24px 0",
    };

    const contactUsButton = {
      padding: "4px 8px",
      border: "1px solid transparent",
      background: "green",
      color: "white",
    };

    return navbarState == 2 ? (
      <>
        <h1>Hello There</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          dictum, odio sit amet faucibus ullamcorper, ante diam feugiat massa,
          et faucibus purus urna non ante. Pellentesque iaculis quis nibh quis
          tempus. Praesent hendrerit et nisl ac imperdiet. Praesent ac egestas
          risus. Sed dapibus vehicula sapien sed laoreet. In hac habitasse
          platea dictumst. Vestibulum scelerisque magna fermentum diam varius,
          ac aliquam urna faucibus. Phasellus vitae mauris et nibh fringilla
          volutpat. Donec euismod est sed felis tincidunt, id pulvinar nibh
          ultrices. Proin nec libero in leo dictum mollis. Etiam eu nunc
          ullamcorper leo dignissim semper.
        </p>
        <div style={socialIcons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28px"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28px"
            viewBox="0 0 24 24"
          >
            <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28px"
            viewBox="0 0 24 24"
          >
            <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
          </svg>
          <button style={contactUsButton}>Send us a mail</button>
        </div>
      </>
    ) : (
      <></>
    );
  };

  //----------------End of Components------------------------------------------------------------------------
  //Main Flow

  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar>
          <Button onClick={toggleJoin}>{!isJoinOpen ? "Join" : "Close"}</Button>
          <JoinAccordion />
          <Menu>
            <MenuItem>
              <img
                width="24px"
                height="24px"
                style={avatarClub}
                src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                alt="avatar"
              />
              Coding Club
            </MenuItem>
            <MenuItem>
              <img
                width="24px"
                height="24px"
                style={avatarClub}
                src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                alt="avatar"
              />
              Coding Club
            </MenuItem>
            <MenuItem>
              <img
                width="24px"
                height="24px"
                style={avatarClub}
                src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                alt="avatar"
              />
              Coding Club
            </MenuItem>
            <MenuItem>
              <img
                width="24px"
                height="24px"
                style={avatarClub}
                src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                alt="avatar"
              />
              Coding Club
            </MenuItem>
            <MenuItem>
              <img
                width="24px"
                height="24px"
                style={avatarClub}
                src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                alt="avatar"
              />
              Coding Club
            </MenuItem>
            <MenuItem>
              <img
                width="24px"
                height="24px"
                style={avatarClub}
                src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                alt="avatar"
              />
              Coding Club
            </MenuItem>
            <MenuItem>
              <img
                width="24px"
                height="24px"
                style={avatarClub}
                src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                alt="avatar"
              />
              Coding Club
            </MenuItem>
            <MenuItem>
              <img
                width="24px"
                height="24px"
                style={avatarClub}
                src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                alt="avatar"
              />
              Coding Club
            </MenuItem>
            <MenuItem>
              <img
                width="24px"
                height="24px"
                style={avatarClub}
                src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                alt="avatar"
              />
              Coding Club
            </MenuItem>
            <MenuItem>
              <img
                width="24px"
                height="24px"
                style={avatarClub}
                src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                alt="avatar"
              />
              Coding Club
            </MenuItem>
          </Menu>
        </SideBar>

        <ClubContents>
          <ClubHeader>
            <ClubHeaderAvatar>
              <ProfileImage>
                <img
                  width="84px"
                  height="84px"
                  style={avatarClub}
                  src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                  alt="avatar"
                />
              </ProfileImage>
              <ClubDetail>
                <div style={titleClub}>
                  Coding Club
                  <svg
                    style={checkMark}
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    width="20px"
                    fill="green"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                  </svg>
                </div>
                <div style={idClub}>@codingclub</div>
              </ClubDetail>
            </ClubHeaderAvatar>
            <ClubButtons>
              <FollowButton onClick={toggleFollow}>
                {isFollowed ? "Unfollow" : "Follow"}
              </FollowButton>
              {isFollowed && (
                <SecondaryButton onClick={toggleMute}>
                  {isMuted ? "Unmute" : "Mute"}
                </SecondaryButton>
              )}
            </ClubButtons>
          </ClubHeader>
          <ClubNav>
            <div
              onClick={() => toggleNavbar(0)}
              style={
                navbarState == 0
                  ? navbarBorder
                  : { "padding-bottom": "6px", cursor: "pointer" }
              }
            >
              Announcements
            </div>
            <div
              onClick={() => toggleNavbar(1)}
              style={
                navbarState == 1
                  ? navbarBorder
                  : { "padding-bottom": "6px", cursor: "pointer" }
              }
            >
              Events
            </div>
            <div
              onClick={() => toggleNavbar(2)}
              style={
                navbarState == 2
                  ? navbarBorder
                  : { "padding-bottom": "6px", cursor: "pointer" }
              }
            >
              About
            </div>
          </ClubNav>

          <ClubMain>
            <Announcement />
            <EventsCl />
            <AboutCl />
          </ClubMain>
          
        </ClubContents>
      </Container>
    </>
  );
};

export default Clubs;
