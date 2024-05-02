import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { selectUserName, selectUserPhoto, setSignOutState } from "../store/slices/UserSlice";
import { useEffect, useState } from "react";
import default_profile from "../Asserts/default_profile.svg";
import {useCookies} from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Header = () => {
  const dispactch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const [scrollPos, setScrollPos] = useState(0);
  const [showGreet,setShowGreet]=useState(true);
    //const history=useNavigate();
  const[cookies,setCookies,removeCookies]=useCookies([]);

  useEffect(()=>{
    const verifyUser=async()=>{
      {
        const {data}= await axios.post(
          "http://localhost:4000",
          {},
          {withCredentials:true}
        );
        if(!data.status){
            removeCookies("jwt");
            history("/signup");
        }
        else{
          if(showGreet){
              if(cookies!=null){ toast(`HI ${data.user}`);};
              setShowGreet(false);
            }
        }
      }
    }
    verifyUser();
  },[cookies,history,removeCookies]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAuth = () => {
      auth
        .signOut()
        .then(() => {
          dispactch(setSignOutState());
          removeCookies("jwt");
          history("/signup");
        })
        .catch((error) => {
          
          alert(error.message);
        });
  };

  return (
    <>
    <Nav>
      {/* <Logo>
        <img src="" alt="" srcset="" />
      </Logo> */}
        <>
          <NavMenu>
            <Link to="/home">
              <span>Home</span>
            </Link>
            <Link to="/search">
              <span>Search</span>
            </Link>
            <Link to="/events">
              <span>Events</span>
            </Link>
            <Link to="/clubs">
              <span>Clubs</span>
            </Link>
            <Link to="/connect">
              <span>Connect+</span>
            </Link>
            <Link to="/aboutus">
              <span>About Us</span>
            </Link>
            <Link to="/profile">
              <span>Profile</span>
            </Link>
          </NavMenu>
          <LogOut>
              {userPhoto ? (
                <UserImg src={userPhoto} alt={userName} />
              ) : (
                <UserImg src={default_profile} alt="Default User" />
              )}
            <DropDown>
              <span onClick={handleAuth}>LogOut</span>
            </DropDown>
          </LogOut>
        </>
    </Nav>
    <ToastContainer/>
    </>
  );
};

const Nav = styled.nav`
  left: 0;
  right: 0;
  height: 60px;
  background-color: #d8f3dc;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: top 0.3s ease; /* Add smooth transition */
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-grow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;

  margin-right: 1.5rem;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;

    span {
      color: rgb(54, 50, 50);
      font-size: 13px;
      opacity: 1;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      font-size: 1rem;
      font-weight: 650;

      &:before {
        background-color: rgb(22, 19, 19);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.button`
  background-color: white;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  margin-right: 1rem;
  &:hover {
    background-color: #0056b7;
    color: white;
  }
`;

const UserImg = styled.img`
  height: 80%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: white;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  opacity: 0;
  z-index:9999;
`;

const LogOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
