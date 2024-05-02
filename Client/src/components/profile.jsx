import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import userIcon from '../Asserts/name.svg';
import schoolIcon from '../Asserts/school2.svg';
import collegeIcon from '../Asserts/education.svg';
import emailIcon from '../Asserts/mail.svg';
import githubIcon from '../Asserts/git.svg';
import editIcon from '../Asserts/edit.svg';
import shareIcon from '../Asserts/share.svg';
import picture from '../Asserts/picture.svg';

const Profile = () => {
  const [name, setName] = useState('Naveen Kumar');
  const [school, setSchool] = useState('School Name');
  const [college, setCollege] = useState('College Name, Degree');
  const [email, setEmail] = useState('naveenkumar@example.com');
  const [isEditing, setIsEditing] = useState(false);
  const [showModeText, setShowModeText] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setShowModeText(true);
      setTimeout(() => setShowModeText(false), 5000);
    }
  }, [isEditing]);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleShareProfile = () => {
    // Copying URL to clipboard
    const profileURL = window.location.href;
    navigator.clipboard.writeText(profileURL)
      .then(() => alert('Profile URL copied to clipboard'))
      .catch((error) => console.error('Failed to copy:', error));
  };


  const openResume = () => {
    window.open('https://docs.google.com/document/u/3/d/1JBQsMxiE5cxIDky2Up1dyxbKpl7_9YYy/edit?usp=drive_web&ouid=112986800605736924398&rtpof=true');
  };

  const openGitHubProfile = () => {
    window.open('https://github.com/NAVEEN240804');
  };

  return (
    <Container>
      <ProfileTitle>
        <TitleText>STUDENT PROFILE</TitleText>
        <ConnectButton to="/connect">connect+</ConnectButton>
      </ProfileTitle>
      {showModeText && <ModeText>{isEditing ? "Edit Mode" : "View Mode"}</ModeText>}
      <ProfileContent>
        <ProfileImage src={picture} alt="Profile Picture" />
        <EditShareIcons>
          <EditProfileButton onClick={handleEditProfile}>
            <LargeIcon src={editIcon} alt="Edit Icon" />
          </EditProfileButton>
          <ShareProfileButton onClick={handleShareProfile}>
            <LargeIcon src={shareIcon} alt="Share Icon" />
          </ShareProfileButton>
        </EditShareIcons>
        <ProfileDetails>
          <ProfileItem>
            <ItemIcon src={userIcon} alt="User Icon" />
            <ItemContent>
              <ItemText contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => setName(e.target.textContent)}>{name}</ItemText>
            </ItemContent>
          </ProfileItem>
          <ProfileItem>
            <ItemIcon src={schoolIcon} alt="School Icon" />
            <ItemContent>
              <ItemText contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => setSchool(e.target.textContent)}>{school}</ItemText>
            </ItemContent>
          </ProfileItem>
          <ProfileItem>
            <ItemIcon src={collegeIcon} alt="College Icon" />
            <ItemContent>
              <ItemText contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => setCollege(e.target.textContent)}>{college}</ItemText>
            </ItemContent>
          </ProfileItem>
          <ProfileItem>
            <ItemIcon src={emailIcon} alt="Email Icon" />
            <ItemContent>
              <ItemText contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => setEmail(e.target.textContent)}>{email}</ItemText>
            </ItemContent>
          </ProfileItem>
        </ProfileDetails>
      </ProfileContent>
      <AboutMeTitle>
        ABOUT ME
    </AboutMeTitle>
      <AboutMeText>
        I am Naveen Kumar A, a Bachelor’s of Engineering in Computer Science graduate from PSG college of technology, with a passion for innovation and technology, currently pursuing a Master’s in Business Administration in IIM Trichy.
      </AboutMeText>
      <AboutMeText>
      I am very much proficient in AI model training, possess exceptional skills in developing advanced algorithms and leveraging machine learning techniques. With a comprehensive understanding of various programming languages and extensive experience in web development, I bring a unique blend of technical expertise and business acumen to solve complex problems and drive impactful solutions in the ever-evolving landscape of technology and business.
      </AboutMeText>
      <ButtonContainer>
      <Button onClick={openResume}>
        <ButtonText>Resume</ButtonText>
      </Button>
      <Button onClick={openGitHubProfile}>
        <Icon src={githubIcon} alt="GitHub Icon" />
        <ButtonText>GitHub profile</ButtonText>
      </Button>
    </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

const TitleText = styled.h2`
  font-size: 46px;
  color: #333;
  margin: 0;
`;

const ConnectButton = styled(Link)`
  font-weight: bold;
  background-color: #90ee90; /* pastel green */
  color: black;
  border: none;
  border-radius: 10px;
  padding: 20px 40px;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: #5ba85e;
    color: white;
  }
`;

const ModeText = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 24px;
  padding: 20px 40px;
  border-radius: 20px;
  margin-top: 20px;
`;

const ProfileContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
`;

const EditShareIcons = styled.div`
  position: absolute;
  top: 420px;
  left: 20px;
  display: flex;
`;

const LargeIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

const EditProfileButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e0e4e9;
    color: white;
  }
`;

const ShareProfileButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e0e4e9;
    color: white;
  }
`;

const ProfileDetails = styled.div`
  flex: 1;
  padding-left: 40px;
`;

const ProfileItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ItemIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

const ItemContent = styled.div`
  background-color: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 20px;
  padding: 20px 40px;
  flex: 1;
`;

const ItemText = styled.span`
  font-size: 24px;
`;

const AboutMeTitle = styled.p`
  font-weight: bold;
  font-size: 50px;
  margin-top: 180px;
  margin-bottom: 40px;
  width: 100%;
`;

const AboutMeText = styled.p`
  font-size: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px;
  margin-bottom: 80px;
  margin-left: -1050px;

`;

const Button = styled.button`
  font-weight: bold;
  background-color: #add8e6;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 20px 40px;
  margin-bottom: 40px;
  cursor: pointer;

  &:hover {
    background-color: #0096c7;
    color: white;
  }
`;

const ButtonText = styled.span`
  margin-left: 20px;
  font-size: 24px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export default Profile;
