import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyle";
import Login from "./components/Login";
import Home from "./components/Home";
import Search from "./components/Search";
import LearnMore from "./components/LearnMore";
import Connect from "./components/Connect";
import AboutUs from "./components/AboutUs";
import Clubs from "./components/Clubs";
import Events from "./components/Events";
import { Route, Routes,useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { useState,useEffect } from "react";
import "react-toastify/ReactToastify.css"
import Register from "./components/Register"


function App() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    // Your condition to hide the Footer
    const shouldHideFooter =  window.location.pathname === "/login"|| window.location.pathname === "/signup";
    setShowFooter(!shouldHideFooter);
  }, [location.pathname]);

  return (
    
    <div className="App">
      <GlobalStyles />
      {showFooter && <Header/>}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/learnmore" element={<LearnMore />} />
        <Route exact path="/clubs" element={<Clubs />} />
        <Route exact path="/connect" element={<Connect />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
