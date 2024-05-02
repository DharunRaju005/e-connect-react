import React, { useState } from 'react';
import styled from 'styled-components';

const Prof_pic = {
  borderRadius: '50%',
  width: '250px',
  height: '250px',
  margin: '20px 40px',
  border: '2px solid #fff',
  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)'
};

const Header = styled.div`
  display: flex;
  padding: 20px 40px;
`;

const WelcomeContainer = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  margin: 40px 20px;
`;

const HeaderItem = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 0px;
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  cursor: pointer;
`;

const Messenger = styled.div`
  display: flex; 
  flex-direction: row;
  
  width: 100%;
  margin:40px;
  font-size: 26px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
`;

const Notifications = styled.div`
  flex: 1; 
  overflow-x: auto;
  height:500px;
  width:470px;
  background-color: #9FDEED;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  margin: 20px 38px; 
  padding: 20px;
  border-radius: 10px; 
`;

const Button = styled.button`
  display: block;
  width: 100%;
  height: 20%;
  margin-bottom: 10px;
  background-color: white;
  border: 2px solid white;
  border-radius: 10px; 
  font-size:24px;
  cursor: pointer;
`;

const Man = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  boxShadow: 0px 0px 5px 0px rgba(0,0,0,0.75)
`;

const Chatbox = styled.div`
  flex: 1;
  height: 500px;
  width: 550px;
  margin: 20px 38px;
  background-color: #F7F7F7;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column-reverse;
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #7F9091;
`;

const InputField = styled.input`
  flex: 1;
  height: 80%;
  border: none;
  padding:4px;
  font-size:18px;
  border-radius: 5px;
  margin: 10px;
`;

const Event = styled.div`
  font-size: 26px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  margin-left: 70px; 
`;

const Eventframe = styled.div`
  display: flex;
  overflow-x: auto;
  margin-left: 70px;
  margin-bottom: 20px;
`;

const EventInv = styled.div`
  flex: 0 0 auto;
  height: 350px;
  width: 300px;
  background-color: #99E2B4;
  border-radius: 10px;
  margin-top:20px;
  margin-bottom;20px;
  margin-right: 28px;
`;
  
const EventfriendReq=styled.div`
display: flex;
overflow-x: auto;
margin-left: 70px;
margin-bottom: 20px;
`;
const FriRequest = styled.div`
  flex: 0 0 auto;
  height: 350px;
  width: 300px;
  background-color: #00B2CA;
  border-radius: 10px;
  margin-top:20px;
  margin-bottom:20px;
  margin-right: 28px;
`;
const ProCardImage = styled.img`
  display:flex;
  flex-direction:column;
  height: 90%;
  width: 100%;
  margin-top:30px;
  border-radius: 50%;
`;


const Connect = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message submitted:', message);
    setMessage('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div style={{marginBottom:'100px'}}>
      <Header>
        <HeaderItem>User Profile</HeaderItem>
        <HeaderItem>My Posts</HeaderItem>
        <HeaderItem>Friends</HeaderItem>
        <HeaderItem>Communities</HeaderItem>
      </Header>
      <WelcomeContainer>
        <img
          src={require('../Asserts/C_pro.jpg')}
          alt="PSG iTech Logo"
          style={Prof_pic}
        />
        <TextContainer>
          <h1 style={{ fontSize: '40px' }}>Connect +</h1>
          <h1 style={{ fontSize: '18px', fontWeight: 'normal' }}>Welcome Nick!</h1>
        </TextContainer>
      </WelcomeContainer>

      <Messenger>
        <div>
          <h style={{ textAlign: 'left', marginLeft: '40px' }}>
            Notifications
          </h>
          <Notifications>
            <Button>
              <Man>
                <div>
                  <img
                    src={require('../Asserts/man.png')}
                    alt="man"
                  />
                </div>
                <div>
                  <div>
                    <h Style={{ textAlign: 'center' }}>Unread Message from</h>
                  </div>
                  <div>
                    <h Style={{ textAlign: 'center' }} >Emerson</h>
                  </div>
                </div>
              </Man>
            </Button>
            <Button>
              <Man>
                <div>
                  <img
                    src={require('../Asserts/woman.png')}
                    alt="man"
                  />
                </div>
                <div>
                  <div>
                    <h Style={{ textAlign: 'center' }}>Unread Message from</h>
                  </div>
                  <div>
                    <h Style={{ textAlign: 'center' }} >Emily</h>
                  </div>
                </div>
              </Man>
            </Button>
            <Button>
              <Man>
                <div>
                  <img
                    src={require('../Asserts/woman.png')}
                    alt="man"
                  />
                </div>
                <div>
                  <div>
                    <h Style={{ textAlign: 'center' }}>Emily invited</h>
                  </div>
                  <div>
                    <h Style={{ textAlign: 'center' }} >You</h>
                  </div>
                </div>
              </Man>
            </Button>
            <Button>
              <Man>
                <div>
                  <img
                    src={require('../Asserts/woman2.png')}
                    alt="man"
                  />
                </div>
                <div>
                  <div>
                    <h Style={{ textAlign: 'center' }}>Unread Message from</h>
                  </div>
                  <div>
                    <h Style={{ textAlign: 'center' }} >Aprina</h>
                  </div>
                </div>
              </Man>
            </Button>
            <Button>
              <Man>
                <div>
                  <img
                    src={require('../Asserts/man.png')}
                    alt="man"
                  />
                </div>
                <div>
                  <div>
                    <h Style={{ textAlign: 'center' }}>Unread Message from</h>
                  </div>
                  <div>
                    <h Style={{ textAlign: 'center' }} >John</h>
                  </div>
                </div>
              </Man>
            </Button>
            <Button>
              <Man>
                <div>
                  <img
                    src={require('../Asserts/woman.png')}
                    alt="man"
                  />
                </div>
                <div>
                  <div>
                    <h Style={{ textAlign: 'center' }}>Unread Message from</h>
                  </div>
                  <div>
                    <h Style={{ textAlign: 'center' }} >Emma</h>
                  </div>
                </div>
              </Man>
            </Button>
            <Button>
              <Man>
                <div>
                  <img
                    src={require('../Asserts/woman.png')}
                    alt="man"
                  />
                </div>
                <div>
                  <div>
                    <h Style={{ textAlign: 'center' }}>Emma invites</h>
                  </div>
                  <div>
                    <h Style={{ textAlign: 'center' }} >You</h>
                  </div>
                </div>
              </Man>
            </Button>
            <Button>
              <Man>
                <div>
                  <img
                    src={require('../Asserts/man.png')}
                    alt="man"
                  />
                </div>
                <div>
                  <div>
                    <h Style={{ textAlign: 'center' }}>Unread Message from</h>
                  </div>
                  <div>
                    <h Style={{ textAlign: 'center' }} >Alexander</h>
                  </div>
                </div>
              </Man>
            </Button>
            <Button>
              <Man>
                <div>
                  <img
                    src={require('../Asserts/man.png')}
                    alt="man"
                  />
                </div>
                <div>
                  <div>
                    <h Style={{ textAlign: 'center' }}>Unread Message from</h>
                  </div>
                  <div>
                    <h Style={{ textAlign: 'center' }} >Bruce Lee</h>
                  </div>
                </div>
              </Man>
            </Button>
          </Notifications>
        </div>


        <div>
          <h style={{ textAlign: 'right', marginLeft: '34px', marginRight: '50px' }}>
            Messenger
          </h>
          <Chatbox>
            {/* Chat messages display logic can be added here */}
            <InputContainer onSubmit={handleSubmit}>

              <InputField
                type="text"
                placeholder="Message..."
                value={message}
                onChange={handleMessageChange}
              />
              <div>
                <button type='submit' style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <img
                    src={require('../Asserts/Checkmark.png')}
                    alt="Send"
                  />
                </button>
              </div>
            </InputContainer>
          </Chatbox>
        </div>
      </Messenger>
      <Event>
        <h>Event Invitations</h>
      </Event>
      <Eventframe>
        <EventInv />
        <EventInv />
        <EventInv />
        <EventInv />
        <EventInv />
        <EventInv />
        <EventInv />
        <EventInv />
        <EventInv />
        <EventInv />
      </Eventframe>


      <Event>
      <h>Friend Requests</h>
      </Event>
      <EventfriendReq>
        <FriRequest>
        <ProCardImage
            src={require('../Asserts/proCard1.png')}
            alt="profile card"
          />  
        </FriRequest>
        <FriRequest>
        <ProCardImage
            src={require('../Asserts/proCard1.png')}
            alt="profile card"
          />  
        </FriRequest>
        <FriRequest>
        <ProCardImage
            src={require('../Asserts/proCard1.png')}
            alt="profile card"
          />  
        </FriRequest>
        <FriRequest>
        <ProCardImage
            src={require('../Asserts/proCard1.png')}
            alt="profile card"
          />  
        </FriRequest>
        <FriRequest>
        <ProCardImage
            src={require('../Asserts/proCard1.png')}
            alt="profile card"
          />  
        </FriRequest>
        <FriRequest>
        <ProCardImage
            src={require('../Asserts/proCard1.png')}
            alt="profile card"
          />  
        </FriRequest>
        <FriRequest>
        <ProCardImage
            src={require('../Asserts/proCard1.png')}
            alt="profile card"
          />  
        </FriRequest>
        <FriRequest>
        <ProCardImage
            src={require('../Asserts/proCard1.png')}
            alt="profile card"
          />  
        </FriRequest>
        
      </EventfriendReq>
    </div>
  );
}

export default Connect;
