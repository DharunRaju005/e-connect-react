import React, { useState } from 'react'
import Header from './Header'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
const ClubPage = () => {

    const [isFollowed, setFollowed] = useState(false);
    const [myClub, setMyClub] = useState(false);
    const [isEditOpen, setEditOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState("Announcements");
    
    const location = useLocation();
    const navigate = useNavigate();

  const handleLearnMore = (id) => {
    navigate(`/events/${id}`);
  };

    const HandleFollow = () => {
        if(myClub) {setEditOpen(true);}
        else{
            setFollowed(!isFollowed);
        }
    }

    const ClubPageContainer = styled.div`
        display: flex;
        flex-direction : column;
        gap : 40px;
        padding :64px;
        margin : 0px 64px;
        background : white;
        color : black;
        align-items :center;
    `;

    const Button = styled.button`
        padding: 12px 24px;
        font-size : 16px;
        background : green;
        color : white;
        border : 1px solid transparent; 
    `;

    const ClubHeader = styled.div`
        display: flex;
        flex-direction : row;
        gap : 128px;
        padding :24px;
        background : white;
        color : black;
        align-items :center;
        justify-content: center;
    `;
    const ClubBody = styled.div`
        display: flex;
        flex-direction : column;
        gap : 24px;
        padding :24px;
        background : white;
        color : black;
        justify-content :space-between;
        width:100%;
    `;
    const ClubLogo = styled.div`
        display: flex;
        flex-direction : row;
        gap : 24px;
        padding :24px;
        background : white;
        color : black;
        align-items :center;
    `;

    const ClubActions = styled.div`
        display: flex;
        flex-direction : row;
        gap : 24px;
        padding :24px;
        background : white;
        color : black;
        align-items :center;
    `;
    
    const Announcements = styled.div`
        display: flex;
        flex-direction : column;
        gap : 24px;
        padding :24px;
        background : white;
        color : black;
        align-items :center;
    `;

    const Events = styled.div`
        display: flex;
        flex-direction : column;
        gap : 24px;
        padding :24px;
        background : white;
        color : black;
        align-items :center;
    `;

    const About = styled.div`
        display: flex;
        flex-direction : column;
        gap : 24px;
        padding :24px;
        background : white;
        color : black;
        align-items :center;
    `;

    const AnnouncementCard = styled.div`
        display : flex;
        flex-direction : column;
        gap : 24px;
        background :  #fdfdfd;
        padding:32px 48px;
        border :  1px solid #c4c4c4;
        min-width : 40%;
    `;

    const EventCard = styled.div`
        display : flex;
        flex-direction : row;
        gap : 24px;
        background :  #fdfdfd;
        padding:32px 48px;
        border :  1px solid #c4c4c4;
        min-width : 100%;
        justify-content: space-between;
        min-width : 40%;
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

  return (
    <ClubPageContainer>
        {!isEditOpen && <ClubHeader>
            <ClubLogo>
                <img
                  width="84px"
                  height="84px"
                  style={{borderRadius:"16px"}}
                  src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                  alt="avatar"
                />
                <div style={{display :"flex", flexDirection:"column", gap : "12px"}}>
                    <h2>Coding club</h2>
                    <p>@COD123</p>
                </div>
            </ClubLogo>
            <ClubActions>
                <Button style={isFollowed? {background:"white", color:"green", borderColor:"green"}:{}} onClick={HandleFollow}>{myClub? "Edit" : isFollowed ? "Unfollow": " Follow "}</Button>
                {!myClub && <Button style={{background:"white", color:"red", borderColor:"red"}} onClick={()=>alert("reported")}>Report Spam</Button>}
            </ClubActions>
        </ClubHeader>}
        {!isEditOpen && <ClubBody>
            <PageSelector>
                <Selectors  onClick={() => setCurrentPage("Announcements")}  style={currentPage=="Announcements" ? {background : "green", color : "white"} : {}}>Announcements</Selectors>
                <Selectors  onClick={() => setCurrentPage("Events")} style={currentPage=="Events" ? {background : "green", color : "white"} : {}}>Events</Selectors>
                <Selectors  onClick={() => setCurrentPage("About")} style={currentPage=="About" ? {background : "green", color : "white"} : {}}>About</Selectors>
            </PageSelector>
            { currentPage=="Announcements"  && <Announcements>
            {Array(15).fill(null).map((_, index) => (
                <AnnouncementCard>
                    <h3>Annoucement example</h3>
                    <p style={{fontSize : "14px", color:"#747474"}}>13 AUG 2024 - 4.30 PM</p>
                </AnnouncementCard>
            ))}
            </Announcements> }
            {currentPage=="Events" && <Events>
                {Array(15).fill(null).map((_, index) => (
                    <EventCard>
                        <div style={{display:"flex", flexDirection:"column", gap : "24px"}}>
                           <h3>Event title</h3>
                           <p style={{fontSize : "14px", color:"#747474"}}>12 OCT 2024 - Competition</p>
                        </div>
                        <Button onClick={()=> handleLearnMore(index)} style={{alignSelf:"center", maxHeight:"48px"}}>Learn More</Button>
                    </EventCard>
                ))}
            </Events>}
            {currentPage=="About" && <About>
                <h2>Welcome to Coding Club</h2>
                <p style={{textAlign:'justify', margin:"12px", alignItems:"center", maxWidth : "50%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Button style={{background : "#777777"}}>Contact us</Button>
                
            </About>}
        </ClubBody>}
        {isEditOpen && <div>
                <Button onClick={()=>setEditOpen(false)} style={{background:"grey", marginBottom:"48px"}}>back</Button>
        <AnnouncementAndEditClub/>
            </div>}
    </ClubPageContainer>
  )
}

///////////////////////////////////////////////////////////////////////////

const AnnouncementAndEditClub = () => {
  const [announcement, setAnnouncement] = useState('');
  const [clubDetails, setClubDetails] = useState({
    name: '',
    clubId: '',
    about: '',
    contact: ''
  });

  const handleAnnouncementSubmit = (e) => {
    e.preventDefault();
    alert(`Announcement submitted: ${announcement}`);
    setAnnouncement('');
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
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '40px', display:"flex", flexDirection:"column", gap:"48px" }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>New Announcement</h2>
        <form onSubmit={handleAnnouncementSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label htmlFor="announcement" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Announcement:</label>
            <textarea
              id="announcement"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              rows="4"
              cols="50"
              required
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '16px' }}
            />
          </div>
          <button
            type="submit"
            style={{ padding: '10px 20px', backgroundColor: 'green', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px' }}
          >
            Submit
          </button>
        </form>
      </div>

      <hr style={{ margin: '80px 0', borderColor: '#ddd' }} />

      <div style={{display:"flex", flexDirection:"column", gap:"48px" }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Edit Club Details</h2>
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
          <button
            type="submit"
            style={{ padding: '10px 20px', backgroundColor: 'green', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px' }}
          >
            Update Club Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClubPage