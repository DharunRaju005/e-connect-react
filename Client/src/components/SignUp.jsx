import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import google from "../Asserts/google.svg";
import {signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import signup from "../Asserts/signup.svg";


import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { selectUserName, setUserLoginDetails } from "../store/slices/UserSlice";
import { useEffect, useState } from "react";
import axios from "axios";

// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: 'Roboto', sans-serif;
//   }
// `;

const SignUp = () => {
  //for authentication

  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    agreed: false,
  });

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history("/home");
      } else {
        history("/signup");
      }
    });
  }, [userName]);

  // Handle Google authentication with Firebase
    
    const handleGoogleAuth = () => {
      // Initiate Google authentication with Firebase
      signInWithPopup(auth, provider)
        .then((result) => {
          //console.log("Authentication Result:", result);
          // Obtain the user's authentication token
          //console.log("sigup line 55");
          const email=result._tokenResponse.email;
          //const password=result._tokenResponse.localId;
          const fullName=result._tokenResponse.fullName;
          console.log(result);
          //const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = {email,fullName};
          console.log(token);
          
          // Send the token to the backend using Axios
          axios.post("http://localhost:8000/google-auth",token)
            .then(async (result) => {
              // Handle the response from the backend
              console.log("sigup line 64");
    
              const data =  result.data;
              console.log(data);
              if (data.success) {
                // Signup was successful, redirect the user
                console.log("sigup line 69");
                history("/home");
              } else {
                alert("Signup failed");
                history("/signup");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

  const generateError = async (error) => {
    console.log("from Generate error in signup");
    toast.error(error, {
      position: "bottom-right",
    });
    console.log("from Generate error in signup 2");
  };

  //handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (agreed) {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/signup",
          {
            ...values,
          },
          { withCredentials: true }
        );

        if (data) {
          //toast.error("HI");
          //to check the error
          if (data.errors) {
            const { email, password, fullName } = data.errors;
            if (email) {
              console.log("line 126 from signup");

              generateError(email);
            } else if (data.errorResponse.code === 11000) {
              const errorMessage = "Email is already registered";
              generateError(errorMessage); // Display specific error message
            } else if (password) {
              generateError(password);
            } else {
              generateError(fullName);
            }
          }
          //if no error
          else {
            history("/home");
          }
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Agree Terms and Conditions");
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setValues({ ...values, [name]: newValue });
    setAgreed(event.target.checked);
  };

  return (
    <>
      {/* <GlobalStyle /> */}
      <Container>
        <SignUpTitle>
          Create Your Account
          <p style={{ opacity: "0.7" }}>Get Started with e-connect</p>
        </SignUpTitle>
        <GoogleLog onClick={handleGoogleAuth}>
          <div>
            <img src={google} style={{ width: "2rem", height: "1.3rem" }} />
          </div>
          <div>Login with Google</div>
        </GoogleLog>
        <StyledTextBetweenLines>
          <Line />
          <span style={{ padding: "0 10px" }}>or</span>
          <Line />
        </StyledTextBetweenLines>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="fullName">
            Name:<span>*</span>
          </label>
          <input type="text" name="fullName" value={values.fullName} onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} placeholder="John Durairaj" required />
          <label htmlFor="email">
            Email:<span>*</span>
          </label>
          <input type="email" name="email" value={values.email} onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} placeholder="John@gmail.com" required />
          <label htmlFor="password">
            Password:<span>*</span>
          </label>
          <input type="password" name="password" value={values.password} onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} placeholder="*****" required />
          <label>
            <input type="checkbox" name="agreed" checked={values.agreed} onChange={handleChange} />I agree to the terms and conditions
          </label>
          <button type="submit">Sign Up</button>
        </Form>
        <AccountExsist>
          Already have an account?{" "}
          <Link to={"/login"} style={{ textDecoration: "none", color: "blue", fontWeight: "600" }}>
            {" "}
            Login
          </Link>
        </AccountExsist>
        
      </Container>
      <div><img src={signup} alt="" style={{position:"absolute",top:"0",right:"0",padding:"5rem"}}/></div>

      
      <ToastContainer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.51rem;
  padding-left: 10rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const SignUpTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  width: 35%;
  align-items: center;
  justify-content: center;
`;

const GoogleLog = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  //letter-spacing:0.5px;
  gap: 0.6rem;
  padding: 0.4rem;
  width: 35%;
  border-radius: 1rem;
  height: 2.5rem;
  border: none;
`;

// Styled component for the text between lines
const StyledTextBetweenLines = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  width: 35%;
`;

// Styled component for the line
const Line = styled.div`
  flex: 1;
  border-top: 1px solid black;
  opacity: 0.8;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 35%;
  gap: 1rem;
  & input {
    border-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.7);
    height: 2.5rem;
    align-items: center;
    margin-left: 4px;
    padding: 0.5rem;
  }

  & input::placeholder {
    padding: 0.5rem; /* Add padding to the placeholder */
  }

  & button {
    border-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.7);
    height: 2rem;
    align-items: center;
    margin-left: 4px;
    background-color: black;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    height: 3rem;
  }

  & button:hover {
    color: black;
    background-color: white;
  }

  & label {
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  & span {
    color: red;
  }
`;

const AccountExsist = styled.div`
  margin-top: 1rem;
`;

export default SignUp;
