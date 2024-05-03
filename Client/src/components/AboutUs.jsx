import React from "react";
import styled from "styled-components";
import auhead from "../Asserts/auhead.jpg";
import AuMission from "../Asserts/AuMission.svg";
import AuVision from "../Asserts/AuVision.svg";
import AuGoals from "../Asserts/AuGoals.svg";
import AuOurTeam from "../Asserts/AuOurTeam.svg";
import AuJoinUs from "../Asserts/AuJoinUs.svg"; 

const Container = styled.div`
  position: relative;
  padding-bottom: 2500px;
`;

const Title = styled.div`
  position: absolute;
  width: 450px;
  height: 77px;
  left: 67px;
  top: 95px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 75px;
  line-height: 77px;
  color: #F5F5F5;
`;

const MissionHeading = styled.div`
  position: absolute;
  width: 228px;
  height: 47px;
  left: 78px;
  top: 400px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: #000000;
`;

const MissionDescription = styled.div`
  position: absolute;
  width: 728px;
  left: 115px;
  top: 450px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  text-align: justify;
`;

const MissionImage = styled.img` // Styled component for the target image
  position: absolute;
  width: 300px;
  height: 300px;
  left: 1029px;
  top: 359px;
`;

const VisionHeading = styled.div`
  position: absolute;
  width: 112px;
  height: 37.87px;
  left: 614px;
  top: 850px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: #000000;
`;

const VisionDescription = styled.div`
  position: absolute;
  width: 684.94px;
  left: 640.36px;
  top: 900px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  text-align: justify;
`;

const VisionImage = styled.img`
  position: absolute;
  width: 475px;
  height: 475px;
  left: 75px;
  top: 700px;
`;

const GoalsHeading = styled.div`
  position: absolute;
  width: 112px;
  height: 39px;
  left: 90px;
  top: 1250px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: #000000;
`;

const GoalsDescription = styled.ul`
  position: absolute;
  width: 728px;
  left: 125px;
  top: 1300px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  text-align: justify;
`;

const AuGoalsImage = styled.div`
  position: absolute;
  width: 630px;
  height: 630px;
  left: 877px;
  top: 1200px;
  background: url(${AuGoals});
`;

const TeamHeading = styled.div`
  position: absolute;
  width: 171px;
  height: 50px;
  left: 634px;
  top: 1950px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: #000000;
`;

const TeamDescription = styled.div`
  position: absolute;
  width: 699px;
  left: 654px;
  top: 2000px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  text-align: justify;
`;

const OurTeamImage = styled.img`
  position: absolute;
  width: 500px;
  height: 333.33px;
  left: 101px;
  top: 1850px;
`;

const JoinUsHeading = styled.div`
  position: absolute;
  width: 128px;
  height: 50px;
  left: 128px;
  top: 2350px; 
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: #000000;
`;

const JoinUsDescription = styled.div`
  position: absolute;
  width: 681px;
  left: 149px;
  top: 2400px; /* Adjusted position */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  text-align: justify;
`;

const JoinUsImage = styled.img`
  position: absolute;
  width: 600px;
  height: 400px;
  left: 840px;
  top: 2300px;
`;

const AuHead = styled.div`
  position: absolute;
  width: 100%;
  height: 255px;
  left: 0px;
  top: 0px;
  mix-blend-mode: luminosity;
  border: 1px solid #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  img{
    width:100%;
    height:25px;
    z-index:-1;
  }
`;

const AboutUs = () => {
  return (
    <Container>
      <Title>ABOUT US:</Title>
      <MissionHeading>MISSION</MissionHeading>
      <MissionDescription>
        We are dedicated to enriching the college journey by providing a centralized platform for students to discover and engage with events, clubs, and off-campus opportunities.
      </MissionDescription>
      <MissionImage src={AuMission} alt="Mission" />
      <VisionHeading>VISION</VisionHeading>
      <VisionDescription>
        We envision a thriving college community where students are empowered to explore their interests, build connections, and actively participate in campus life.
      </VisionDescription>
      <VisionImage src={AuVision} alt="Vision" /> 
      <GoalsHeading>GOALS</GoalsHeading>
      <GoalsDescription>
        <li><strong>Streamline Event Discovery:</strong> Our platform offers a user-friendly experience to browse and register for events, fostering student participation and campus engagement.</li>
        <li><strong>Amplify Club Visibility:</strong> We provide clubs with a central hub to showcase activities and connect with potential members, fostering a vibrant club culture.</li>
        <li><strong>Bridge Campus and Community:</strong> We connect students with events and opportunities beyond campus walls, enriching their holistic college experience.</li>
        <li><strong>Cultivate Connection:</strong> Our platform fosters a sense of community by facilitating student interaction, promoting collaboration, and fostering lasting friendships.</li>
        <li><strong>Empower Informed Decisions:</strong> We strive to provide accurate and comprehensive information, empowering students to make informed choices about their college involvement.</li>
      </GoalsDescription>
      <AuGoalsImage src={AuGoals} alt="Goals" /> 
      <TeamHeading>OUR TEAM</TeamHeading>
      <TeamDescription>
        We are a dedicated team of professionals and students with a combined passion for enhancing the college experience. We bring diverse expertise in technology, event management, and student engagement to create a valuable platform for our users.
      </TeamDescription>
      <OurTeamImage src={AuOurTeam} alt="Our Team" />
      <JoinUsHeading>JOIN US</JoinUsHeading>
      <JoinUsDescription>
        We are committed to fostering a thriving college environment where students feel connected, engaged, and empowered to reach their full potential. Explore endless possibilities, connect with your community, and unlock the full potential of your college experience.
      </JoinUsDescription>
      <JoinUsImage src={AuJoinUs} alt="Join Us" />
      <AuHead src={auhead} alt="Title" />
      <img src={auhead} alt ="head"
      style={{
        width: "100%",
        height:"255px",
        'object-fit': "cover"
      }} />
    </Container>
  );
};

export default AboutUs;