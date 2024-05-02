import styled from "styled-components";
import FooterImgSrc from "../Asserts/FooterImg.svg";
import x_logo from "../Asserts/x_logo.svg";
import logo_linkedin from "../Asserts/logo_linkedin.svg";
import logo_instagram from "../Asserts/logo_instagram.svg";
import logo_gmail from "../Asserts/logo_gmail.svg";
import { useSelector } from "react-redux";
import { selectUserName } from "../store/slices/UserSlice";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <>
        <Container >
          <FooterImg>
            <img src={FooterImgSrc} alt={"FooterImg"} />
          </FooterImg>
          <QuickLink>
            <QLHeader>Quick Links</QLHeader>
            <Link to="/home">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/events">Events</Link>
            <Link to="/clubs">Clubs</Link>
            <Link to="/connect">Connect+</Link>
            <Link to="/aboutus">About Us</Link>
          </QuickLink>
          <OtherLinks>
            <Link to="/t&c">Terms And Conditions</Link>
            <Link to="/contact">Contact</Link>
          </OtherLinks>
          <Socials>
            <SHeader>Get In Touch</SHeader>
            <Anchors>
              <Anchor>
                <a href="http://">
                  <img src={x_logo} alt="X" />
                </a>
              </Anchor>
              <Anchor>
                <a href="http://">
                  <img src={logo_linkedin} alt="LinkedIn" />
                </a>
              </Anchor>
              <Anchor>
                <a href="http://">
                  <img src={logo_instagram} alt="Insta" />
                </a>
              </Anchor>
              <Anchor>
                <a href="http://">
                  <img src={logo_gmail} alt="Gmail" />
                </a>
              </Anchor>
            </Anchors>
          </Socials>
        </Container>
      
    </>
  );
};

const Container = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #dde7c7;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: space-around;
  //gap: 2rem;
`;

const FooterImg = styled.div`
  img {
    height: 20rem;
    width: 25rem;
    padding: 3rem;
    margin-left: -1rem;
  }
`;

const QuickLink = styled.div`
  a {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    color: #000;
    line-height: 2rem;
  }
`;

const OtherLinks = styled.div`
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #000;
    line-height: 2rem;
  }
`;

const QLHeader = styled.h4`
  margin-top: 2rem;
`;

const Socials = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 2rem;
  margin-right: 1rem;
  margin-left: 0.4;
  //padding: 40px;
`;

const SHeader = styled.h4`
  margin-left: -2rem;
  padding:1rem;
`;

const Anchors = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -0.4rem;
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;

    line-height: 2rem;
  }
`;

const Anchor = styled.div`
  img {
    width: 25px;
    height: 25px;
    margin-right: 6px;
    object-fit: fill;
  }
`;

export default Footer;
