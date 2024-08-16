import React from 'react'
import img from "../Asserts/psgitech.png";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';


const ClubsHome = () => {

    const BodyContainer = styled.div`
        display: flex;
        flex-direction : column;
        gap : 80px;
        padding :64px;
        margin : 64px;
        background : white;
        color : black;
        align-items :center;
    `;

    const ClubItems = styled.div`
        display: flex;
        flex-direction : row;
        gap : 24px;
        flex-wrap : wrap;
    `;

    const ClubItem = styled.div`
        display: flex;
        flex-direction : column;
        gap : 24px;
        background :  #f2f2f2;
        padding:32px 48px;
        border :  1px solid #c4c4c4;
        justify-content : center;
    `;
    
    const clubIcon ={
        width : "100%",
        maxWidth : "100px",
        height : "128px",
        alignSelf : "center"
    }

    const Button = styled.button`
        padding: 8px 16px;
        background : green;
        color : white;
        border : 1px solid transparent; 
    `;

    const navigate = useNavigate();

  const handleLearnMore = (id) => {
    navigate(`/clubs/${id}`);
  };

  return (
    <>
      <BodyContainer>
        <h1>Clubs</h1>
        <ClubItems>
            {Array(15).fill(null).map((_, index) => (
            <ClubItem>
                <img src={img} style={clubIcon}/>
                <h3 style={{textAlign:"center"}}>PSG iTech club</h3>
                <Button onClick={() => handleLearnMore(index + 1)}>Learn More</Button>
            </ClubItem>
            ))}
        </ClubItems>
      </BodyContainer>
    </>
  )
}

export default ClubsHome
