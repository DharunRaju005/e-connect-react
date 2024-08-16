import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyle";
import Login from "./components/Login";
import Home from "./components/Home";
import Search from "./components/Search";
import LearnMore from "./components/LearnMore";
import Connect from "./components/Connect";
import AboutUs from "./components/AboutUs";
import ClubPage from "./components/ClubPage";
import Events from "./components/Events";
import { Route, Routes,useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { useState,useEffect } from "react";
import "react-toastify/ReactToastify.css"
import Register from "./components/Register"
import Profile from './components/profile';
import ClubsHome from "./components/ClubsHome";


function App() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    // Your condition to hide the Footer
    const shouldHideFooter =  window.location.pathname === "/login"|| window.location.pathname === "/signup" || window.location.pathname === "/register";
    setShowFooter(!shouldHideFooter);
  }, [location.pathname]);

  return (
    
    <div className="App">
      <GlobalStyles />
      {showFooter  && <Header/>}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/learnmore" element={<LearnMore />} />
        <Route exact path="/clubs" element={<ClubsHome />} />
        <Route exact path="/clubs/*" element={<ClubPage/>} />
        <Route exact path="/connect" element={<Connect />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      {showFooter && <Footer /> }
    </div>
  );
}

export default App;
