import React from 'react'
import img from "../Asserts/psgitech.png";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { AnnouncementAndEditClub } from './ClubPage';
import { useState } from 'react';

const ClubsHome = () => {

    const [clubDetails, setClubDetails] = useState({
        name: '',
        clubId: '',
        about: '',
        contact: '',
        logo:null
      });
    
    const [createClub, setCreateClub] = useState(false);

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

  const handleClubDetailsChange = (e) => {
    const { name, value } = e.target;
    setClubDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleClubDetailsSubmit = (e) => {
    e.preventDefault();
    alert(`Club details updated: ${JSON.stringify(clubDetails)}`);
  };

  return (
    <>
      <BodyContainer>
      {!createClub&&<h1>Clubs</h1>}
        {!createClub&&<div style={{display:"flex", flexDirection:"row", gap:"12px"}}>
            <input
              type='text'
              id="announcement"
              placeholder='Search clubs'
              style={{ width: '400px', padding: '12px 24px', border: '1px solid #ddd', fontSize: '16px' }}
            />
            <Button style={{padding:"12px 24px"}} type='submit'>Search</Button>
          </div>}
          {!createClub&& <div style={{display:"flex", flexDirection:"row"}}> 
            <p style={{alignSelf:"center", marginRight:"12px"}}>Or create your own...</p>
            <Button onClick={()=>setCreateClub(true)}>Create new club</Button>
          </div>}
         {createClub && <div style={{display:"flex", flexDirection:"column", gap:"48px" }}>
         <Button onClick={()=>setCreateClub(false)} style={{maxWidth:"80px", alignSelf:"center", background:"grey"}}>close</Button>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Create new Club</h2>
        <form onSubmit={handleClubDetailsSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={clubDetails.name}
              onChange={handleClubDetailsChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '16px' }}
            />
          </div>
          <div>
            <label htmlFor="clubId" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Club ID:</label>
            <input
              id="clubId"
              type="text"
              name="clubId"
              value={clubDetails.clubId}
              onChange={handleClubDetailsChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '16px' }}
            />
          </div>
          <div>
            <label htmlFor="about" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>About:</label>
            <textarea
              id="about"
              name="about"
              value={clubDetails.about}
              onChange={handleClubDetailsChange}
              rows="4"
              cols="50"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '16px' }}
            />
          </div>
          <div>
            <label htmlFor="contact" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Contact Link:</label>
            <input
              id="contact"
              type="url"
              name="contact"
              value={clubDetails.contact}
              onChange={handleClubDetailsChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '16px' }}
            />
          </div>
          <div>
            <label htmlFor="logo" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Upload Club logo:</label>
            <input
            type='file'
            id="logo"
            style={{ width: '80%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
            />
        </div>
          <button
            type="submit"
            style={{ padding: '10px 20px', backgroundColor: 'green', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px' }}
          >
            Create club
          </button>
        </form>
      </div>}
          <hr style={{border:"1px solid black"}}/>
          {!createClub&&<p style={{fontSize:"20px", fontWeight:"400"}}>Showing all clubs :</p>}
          {!createClub&&<ClubItems>
            {Array(15).fill(null).map((_, index) => (
            <ClubItem>
                <img src={img} style={clubIcon}/>
                <h3 style={{textAlign:"center"}}>PSG iTech club</h3>
                <Button onClick={() => handleLearnMore(index + 1)}>Learn More</Button>
            </ClubItem>
            ))}
        </ClubItems>}
      </BodyContainer>
    </>
  )
}

export default ClubsHome
