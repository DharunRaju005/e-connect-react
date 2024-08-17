import React from 'react'
import img from "../Asserts/psgitech.png";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';


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
        width: 200px;
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

    const PageSelector = styled.div`
        display : flex;
        flex-direction : row;
        gap : 24px;
        padding:16px 48px;
        min-width : 100%;
        justify-content: center;
        margin-left: -48px;
    
    `;

    const Selectors = styled.button`
        background :#f3f3f3;
        border : 1px solid transparent;
        padding : 8px 24px;
        font-size:16px;
        border-radius : 32px;
    `;

const ClubsHome = () => {

    const [clubDetails, setClubDetails] = useState({
        name: '',
        clubId: '',
        about:'',
        contact:'',
        logo:null
      });



      const [clubs, setClubs] = useState([]);
      const [loading, setLoading] = useState(true); 
      const [error, setError] = useState(null);  

      const [query, setQuery] = useState("");
      const [type, setType] =  useState("");
    
      const [createClub, setCreateClub] = useState(false);

      /////////////////////////////////////////////////////////////////


      useEffect(() => {
        const fetchClubs = async () => {
          let url = 'http://localhost:8000/api/clubs'+type;
          if(query!=""){
            url = url + "?name=" +query;
          }
          try {
            const response = await fetch(url);  
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json(); 
            setClubs(data); 
          } catch (error) {
            setError(error.message); 
          } finally {
            setLoading(false); 
          }
        };
    
        fetchClubs();
      }, [query,createClub, type]);  


      
      /////////////////////////////////////////////////////////////////
    

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
    const postClub = async () => {
      const url = 'http://localhost:8000/api/clubs';
      
      setLoading(true);
    
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(clubDetails),
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Network response was not ok');
        }
        const data = await response.json();
        alert(clubDetails);
        setError(null);
      } catch (error) {
        setError(error.message);
        alert(error.message);
      } finally {
        setLoading(false);
        alert(loading);
      }
    };
    postClub();
    
  };

  return (
    <>
      <BodyContainer>
      {!createClub&&<h1>Clubs</h1>}
      
  {!createClub && (
    <div style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
      <input
        type='text'
        id="announcement"
        placeholder='Search clubs'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '400px', padding: '12px 24px', border: '1px solid #ddd', fontSize: '16px' }}
      />
      <button
        type='button' // Change to 'submit' if inside a form and needed
        style={{ padding: "12px 24px", border: 'none', backgroundColor: 'green', color: '#fff', cursor: 'pointer' }}
        onClick={() => {
          // Optional: Add your search logic here
          console.log('Search clicked with query:', query);
        }}
      >
        Search
      </button>
    </div>
  )}
  
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
          
          <PageSelector>
                <Selectors  onClick={() => setType("")}  style={type=="" ? {background : "green", color : "white"} : {}}>All Clubs</Selectors>
                <Selectors  onClick={() => setType("/myclubs")} style={type=="/myclubs" ? {background : "green", color : "white"} : {}}>My Clubs</Selectors>
                <Selectors  onClick={() => setType("/following")} style={type=="/following" ? {background : "green", color : "white"} : {}}>Following</Selectors>
            </PageSelector>
          {!createClub && (
  <ClubItems>
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : clubs.length > 0 ? (
      clubs.map((club) => (
        <ClubItem key={club._id}>
          <img src={img} style={clubIcon} alt={`${club.clubName} logo`} />
          <h3 style={{ textAlign: "center" }}>{club.clubName}</h3>
          <p style={{ textAlign: "center" }}>@{club.clubId}</p>
          <Button onClick={() => handleLearnMore(club.clubId)}>Learn More</Button>
        </ClubItem>
      ))
    ) : (
      <p>No clubs found</p>
    )}
  </ClubItems>
)}

      </BodyContainer>
    </>
  )
}

export default ClubsHome
