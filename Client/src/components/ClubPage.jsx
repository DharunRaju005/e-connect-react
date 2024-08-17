import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams} from 'react-router-dom'
import { format, parseISO } from 'date-fns';

const ClubPage = () => {

    const [isFollowed, setFollowed] = useState(false);
    const [myClub, setMyClub] = useState(false);
    const [isEditOpen, setEditOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState("Announcements");
    const [changes, setchanges] = useState(0);
    const [club, setClub] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reload, setReload] = useState(0);
 
    const { clubId } = useParams();
    const navigate = useNavigate();

    const handleLearnMore = (id) => {
      navigate(`/events/${id}`);
    };


    const reportSpam = async (clubId) => {
      if (!clubId) {
          alert('Club ID is required');
          return;
      }

      try {
          const response = await fetch('http://localhost:8000/api/clubs/report-spam', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ clubId }),
          });

          const data = await response.json();
          if (data.message === 'Club priority updated and clubs sorted') {
              alert('Club reported as spam successfully.');
          } else {
              alert(data.message);
          }
      } catch (error) {
          console.error('Error reporting spam:', error);
          alert('Error reporting spam');
      }
  };

    ////////////////////////////////////

    useEffect(() => {
      const checkFollowingStatus = async () => {
          try {
              const response = await fetch(`http://localhost:8000/api/clubs/follow-status?clubId=${clubId}`);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setFollowed(data.isFollowing);
          } catch (error) {
              console.error('Error fetching follow status', error);
          }
      };

      checkFollowingStatus();
  }, [clubId, reload]);


  const handleFollowToggle = async () => {
    if(myClub) 
    {setEditOpen(true);
    return;}
    const _id = club.clubId;
    try {
        const endpoint = isFollowed
            ? `http://localhost:8000/api/clubs/unfollow?clubId=${_id}`
            : `http://localhost:8000/api/clubs/follow?clubId=${_id}`;
        
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        setReload((reload+1)%2);
    } catch (error) {
        console.error('Error while following/unfollowing', error);
    }
};

    useEffect(() => {
      const fetchClubDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/clubs/${clubId}/get`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setClub(data);
          
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchClubDetails();
      
    }, [clubId, changes]);


    useEffect(() => {
      if (club) {
          setMyClub(club.admin === "me");
      } else {
          setMyClub(false);
      }
  }, [club]);


    const deleteAnnouncement = async (clubId, aid) => {
      const confirmed = window.confirm('Are you sure you want to delete this announcement?');
      if(!confirmed) return;
      try {
          const response = await fetch(`http://localhost:8000/api/clubs/announcement?clubId=${clubId}&aid=${aid}`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
              },
          });
  
          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message || 'Failed to delete announcement');
          }
  
          const data = await response.json();
          setchanges((changes+1)%2);
      } catch (error) {
          alert('Error deleting announcement:', error.message);
      }
  };


  
    ////////////////////////////////////

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
        flex-direction : row;
        gap : 24px;
        background :  #fdfdfd;
        padding:32px 48px;
        border :  1px solid #c4c4c4;
        justify-content: space-between;
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
      <Button onClick={()=>navigate('/clubs')} style={{background:"grey"}}>Back to Clubs Home</Button>
        {!isEditOpen  && !loading && !error && <ClubHeader>
            <ClubLogo>
                <img
                  width="84px"
                  height="84px"
                  style={{borderRadius:"16px"}}
                  src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                  alt="avatar"
                />
                <div style={{display :"flex", flexDirection:"column", gap : "12px"}}>
                    <h2>{club.clubName}</h2>
                    <p>@{club.clubId}</p>
                </div>
            </ClubLogo>
            <ClubActions>
                <Button style={isFollowed? {background:"white", color:"green", borderColor:"green"}:{}} onClick={handleFollowToggle}>{myClub? "Edit" : isFollowed ? "Unfollow": " Follow "}</Button>
                {!myClub && <Button style={{background:"white", color:"red", borderColor:"red"}} onClick={()=>reportSpam(club.clubId)}>Report Spam</Button>}
            </ClubActions>
        </ClubHeader>}
        {!isEditOpen  && !loading && !error && <ClubBody>
            <PageSelector>
                <Selectors  onClick={() => setCurrentPage("Announcements")}  style={currentPage=="Announcements" ? {background : "green", color : "white"} : {}}>Announcements</Selectors>
                <Selectors  onClick={() => setCurrentPage("Events")} style={currentPage=="Events" ? {background : "green", color : "white"} : {}}>Events</Selectors>
                <Selectors  onClick={() => setCurrentPage("About")} style={currentPage=="About" ? {background : "green", color : "white"} : {}}>About</Selectors>
            </PageSelector>
            { currentPage=="Announcements"  && <Announcements>
            {club.announcements.length === 0 && <p>No contents here</p>}
            {club.announcements.length !== 0 && club.announcements.map((x, index) => (
                <AnnouncementCard>
                   <div style={{display:"flex", flexDirection:"column", gap : "24px"}}>
                           <h3>{x.text}</h3>
                           <p style={{fontSize : "14px", color:"#747474"}}>{format(parseISO(x.date), "dd MMM yyyy - hh:mm a").toUpperCase()}</p>
                    </div>
                   { myClub && <Button onClick={()=> deleteAnnouncement(club.clubId,x.aid)} style={{alignSelf:"center", background:"white", border:"1px solid red"}}><svg height={"24px"} width={"24px"} fill='red' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></Button>}
                </AnnouncementCard>
            ))}
            </Announcements> }
            {currentPage=="Events" && <Events>
              {club.events.length === 0 && <p>No contents here</p>}
            {club.events.length !== 0 && club.events.map((x, index)=> (
                    <EventCard>
                        <div style={{display:"flex", flexDirection:"column", gap : "24px"}}>
                           <h3>{x.name}</h3>
                           <p style={{fontSize : "14px", color:"#747474"}}>{format(parseISO(x.date), "dd MMM yyyy - hh:mm a").toUpperCase()} | {x.type}</p>
                        </div>
                        <Button onClick={()=> handleLearnMore(index)} style={{alignSelf:"center", maxHeight:"48px"}}>Learn More</Button>
                    </EventCard>
                ))}
            </Events>}
            {currentPage=="About" && <About>
                <h2>Welcome to {club.clubName}</h2>
                <p style={{textAlign:'justify', margin:"12px", alignItems:"center", maxWidth : "50%"}}>{club.about}</p>
                <Button style={{background : "#777777"}}>{club.contact}</Button>
                
            </About>}
        </ClubBody>}
        {isEditOpen && !loading && !error && <div>
                <Button onClick={()=>setEditOpen(false)} style={{background:"grey", marginBottom:"48px"}}>back</Button>
        <AnnouncementAndEditClub club={club} changes={changes} setchanges={setchanges}/>
            </div>}
          {loading && <h2>Loading...</h2>}
          {error && <h2>Error</h2>}
    </ClubPageContainer>
  )
}

///////////////////////////////////////////////////////////////////////////

export const AnnouncementAndEditClub = ({club,changes,setchanges}) => {
  const [announcement, setAnnouncement] = useState('');
  const [clubDetails, setClubDetails] = useState({
    name: club.clubName,
    clubId: club.clubId,
    about: club.about,
    contact: club.contact,
    logo:null
  });

  const handleAnnouncementSubmit = (e) => {
    const confirmedSubmission = window.confirm('Are you sure you want to post this announcement?');
    if(confirmedSubmission){
    e.preventDefault();
    if(announcement=="" || announcement == " "){
      alert("Cannot post empty message");
      return;
    }
    const postAnnouncement = async (clubId, text) => {
      try {
        const response = await fetch('http://localhost:8000/api/clubs/announcement', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ clubId, text })
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
    
        const result = await response.json();
        return result;
      } catch (error) {
        console.error('Error posting announcement:', error);
        throw error;
      }
    };
    postAnnouncement(club.clubId,announcement);    
    setAnnouncement('');
    setchanges((changes+1)%2);
  }

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
    const confirmedSubmission = window.confirm('Are you sure you want to update this club details?');
    if(confirmedSubmission){
      const updateClubDetails = async (clubDetails) => {
        try {
            const response = await fetch(`http://localhost:8000/api/clubs/${club.clubId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clubDetails),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('Club updated successfully:', data);
            // Handle success (e.g., update local state or notify the user)
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
    updateClubDetails(clubDetails);
    setchanges((changes+1)%2);
    }
    else{return;}
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
              placeholder='Enter announcement here...'
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
            Update Club Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClubPage