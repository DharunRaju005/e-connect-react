import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import myImage from '../Asserts/home_img.svg';
import eventImage1 from '../Asserts/moniter.svg';

const Home = () => {
  return (
    <Container>
      <HeaderContainer>
        <SubHeader>
          <SubHeaderTextWrapper>
            <SubHeaderText>STUDENTS</SubHeaderText>
            <SubHeaderTextRegular>e-connect</SubHeaderTextRegular>
          </SubHeaderTextWrapper>
          <UserInfo>
            <UserName><BoldText>Naveen Kumar (Logged in)</BoldText></UserName>
            <DateInfo><BoldText>Date: April 30, 2024</BoldText></DateInfo>
          </UserInfo>
        </SubHeader>
        <ContentWrapper>
          <ImageContainer>
            <img src={myImage} alt="Description of your image" />
          </ImageContainer>
          <DescriptionContainer>
            <DescriptionText>
              Discover, Engage, and Thrive with us as we bring you a vibrant platform dedicated to enhancing your college experience. Whether you're seeking exciting events, exploring diverse clubs and communities, or venturing into the wider world beyond campus, we're here to guide you every step of the way.
            </DescriptionText>
            <LearnMoreButton to="/aboutus">Learn more</LearnMoreButton>
          </DescriptionContainer>
        </ContentWrapper>
      </HeaderContainer>
      <ButtonAndWhatsNewContainer>
        <ButtonContainer>
          <Button to="/events" color="#add8e6">
            <ButtonContent>
              <ButtonTitle>Events</ButtonTitle>
              <ButtonDescription>Explore upcoming events and conferences in our community.</ButtonDescription>
              <ButtonIcon className="fas fa-calendar-alt" />
            </ButtonContent>
            <ButtonArrow>&#9658;</ButtonArrow>
          </Button>
          <Button to="/clubs" color="#A5D6A7">
            <ButtonContent>
              <ButtonTitle>Clubs</ButtonTitle>
              <ButtonDescription>Discover and join various clubs covering diverse interests.</ButtonDescription>
              <ButtonIcon className="fas fa-users" />
            </ButtonContent>
            <ButtonArrow>&#9658;</ButtonArrow>
          </Button>
          <Button to="/connect" color="#B39DDB">
            <ButtonContent>
              <ButtonTitle>Connect</ButtonTitle>
              <ButtonDescription>Connect with like-minded individuals and expand your network.</ButtonDescription>
              <ButtonIcon className="fas fa-handshake" />
            </ButtonContent>
            <ButtonArrow>&#9658;</ButtonArrow>
          </Button>
        </ButtonContainer>
        <WhatsNewSection>
          <SubSection>
            <SubSectionTitle>New Update</SubSectionTitle>
            <SubSectionContent>Check out the latest updates and news!</SubSectionContent>
          </SubSection>
          <SubSection>
            <SubSectionTitle>New Club Announcement</SubSectionTitle>
            <SubSectionContent>Exciting new clubs just announced! Join now!</SubSectionContent>
          </SubSection>
          <SubSection>
            <SubSectionTitle>New Friend Request</SubSectionTitle>
            <SubSectionContent>You have new friend requests. Connect with new people!</SubSectionContent>
          </SubSection>
        </WhatsNewSection>
      </ButtonAndWhatsNewContainer>
      <FavoriteEventsContainer>
        <FavoriteEventsTitle>Favorite Events</FavoriteEventsTitle>
        <EventsGrid>
          <EventCard>
            <EventImage src={eventImage1} alt="Event Image" />
            <EventName>PSG Hackathon for Men</EventName>
            <LearnMoreButton to="/learnmore">Learn more</LearnMoreButton>
          </EventCard>
          <EventCard>
            <EventImage src={eventImage1} alt="Event Image" />
            <EventName>Visa Hackathon</EventName>
            <LearnMoreButton to="/learnmore">Learn more</LearnMoreButton>
          </EventCard>
        </EventsGrid>
      </FavoriteEventsContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e0e0e0;
  width: 100%;
  padding: 20px;
`;

const SubHeaderTextWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const SubHeaderText = styled.h3`
  margin: 0;
  font-size: 48px;
  padding: 10px;
  font-family: 'Oswald', sans-serif;
`;

const SubHeaderTextRegular = styled(SubHeaderText)`
  font-weight: normal;
  margin-left: -8px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const UserName = styled.span`
  font-size: 24px;
`;

const DateInfo = styled.span`
  font-size: 20px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 30%;
  margin-top: 100px;
  margin-bottom: 150px;
`;

const DescriptionContainer = styled.div`
  width: 60%;
  margin-left: 140px;
`;

const DescriptionText = styled.p`
  color: #add8e6;
  margin-bottom: 30px;
  font-size: 28px;
`;

const LearnMoreButton = styled(Link)`
  background-color: #add8e6;
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: darken(${props => props.color}, 10%);
    color: white;
  }
`;

const ButtonAndWhatsNewContainer = styled.div`
  display: flex;
  gap: 40px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const WhatsNewSection = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
`;

const SubSection = styled.div`
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 40px;
  height: 130px; /* Match the height with the events button */
`;

const SubSectionTitle = styled.h3`
  margin: 0;
  font-size: 24px; 
`;

const SubSectionContent = styled.p`
  margin: 0;
  font-size: 18px;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.color};
  color: black;
  padding: 30px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  height: 150px;
  width: 60vw;
  position: relative;

  &:hover {
    background-color: darken(${props => props.color}, 10%);
    color: white;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const ButtonTitle = styled.h3`
  margin: 0;
  font-size: 36px;
`;

const ButtonDescription = styled.p`
  margin: 0;
  font-size: 24px;
`;

const ButtonIcon = styled.i`
  font-size: 64px;
`;

const ButtonArrow = styled.span`
  font-size: 24px;
  position: absolute;
  right: 20px;
`;

const FavoriteEventsContainer = styled.div`
  background-color: #add8e6;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
  margin-bottom: 60px;
`;

const FavoriteEventsTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  margin-bottom: 20px;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const EventCard = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const EventImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const EventName = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
`;

export default Home;