import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moniter from "../Asserts/moniter.svg";
import codeScreen from "../Asserts/codeScreen.svg";
import conference from "../Asserts/conference.svg";
import paperPresentation from "../Asserts/paperPresentation.svg";
import FlowChart from "../Asserts/FlowChart.svg";

const FilterSidebar = () => {
  return (
    <SidebarContainer>
      <FilterTitle>Filter Options</FilterTitle>
      <FilterSection>
        <SectionTitle>Location</SectionTitle>
        <CheckboxLabel>
          <input type="checkbox" />
          Online
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />
          Offline
        </CheckboxLabel>
        <SectionTitle>Participants</SectionTitle>
        <CheckboxLabel>
          <input type="checkbox" />
          Students
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />
          Working Professional
        </CheckboxLabel>
        <SectionTitle>No. of Days:</SectionTitle>
        <CheckboxLabel>
          <input type="checkbox" />
          1-14 days
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />
          15-1 month
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />
          1+ month
        </CheckboxLabel>
        <SectionTitle>Tag</SectionTitle>
        <CheckboxLabel>
          <input type="checkbox" />
          Block-Chain Technology
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />
          Generative AI
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />
          Machine Learning
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />
          Fintech
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />
          Gaming
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" />
          Others
        </CheckboxLabel>
      </FilterSection>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  margin-top: 3rem;
  width: 20%;
  background-color: transparent;
  margin: none;
  //margin-right: 1px solid black;
  color: black;
  //box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 100%;
  position: sticky;
  top: 0;
  padding: 1rem;
`;

const FilterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h4`
  font-size: 1rem;
  padding: 2rem;
  padding-left: 0rem;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
  & input {
    margin-top: 0.5rem;
    margin-left: 1rem;
    //margin-left:2%;

  }
`;

const Events = () => {
  const Hackathon = () => {
    return (
      <>
        <p style={{ fontSize: "1.5rem", fontWeight: "700", marginLeft: "3rem", padding: "2rem", marginTop: "2rem" }}>Hackathons:</p>
        <HackContainer>
          <Hclg>
            <h4>PSG Hackathon for Men</h4>
            <Content>The PSG Hackathon for Men is a collaborative event bringing together innovative minds to tackle challenges in various domains related to men's health, wellness, and lifestyle.</Content>
            <img src={moniter} alt="" />
            <DateLocation>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                <p>22-02-2025</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                <p>Coimbatore</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>4-5 per team</p>
              </div>
            </DateLocation>
            <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "2rem" }}>Price Pool: $10,000</div>
            <ActionBtn>
              <div>
                <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                  <button>Register Now</button>
                </Link>
              </div>
              <div style={{ display: "flex", width: "auto", height: "auto", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                  Learn More --&gt;
                </Link>
              </div>
            </ActionBtn>
          </Hclg>
          <Hclg>
            <h4>PSG Hackathon for Men</h4>
            <Content>The PSG Hackathon for Men is a collaborative event bringing together innovative minds to tackle challenges in various domains related to men's health, wellness, and lifestyle.</Content>
            <img src={moniter} alt="" />
            <DateLocation>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                <p>22-02-2025</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                <p>Coimbatore</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>4-5 per team</p>
              </div>
            </DateLocation>
            <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "2rem" }}>Price Pool: $10,000</div>
            <ActionBtn>
              <div>
                <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                  <button>Register Now</button>
                </Link>
              </div>
              <div style={{ display: "flex", width: "auto", height: "auto", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                  Learn More --&gt;
                </Link>
              </div>
            </ActionBtn>
          </Hclg>
          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end", cursor: "pointer" }}>View All -&gt;</div>
          <HcsmContainer>
            <Hcsm>
              <p style={{ fontSize: "1.5rem", fontWeight: "500", paddingTop: "1rem" }}>Visa Hackathon</p>
              <p style={{ paddingTop: "2rem", paddingLeft: "0.5rem", lineHeight: "1.5rem", fontSize: "1rem" }}>Innovate and collaborate to solve challenges in digital payments, enhancing user experience and security.</p>
              <img src={codeScreen} alt="" />

              <DateLocationSm>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                  <p>22-02-2025</p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                  <p>Visa Main,MDU</p>
                </div>
              </DateLocationSm>
              <div style={{ marginLeft: "1rem" }}>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>1-3 per team</p>
              </div>
              <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "1rem" }}>Price Pool: $10,000</div>
              <ActionBtn style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>
                <div style={{ display: "flex", width: "8rem", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    Learn More --&gt;
                  </Link>
                </div>
                <div>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    <button>Register Now</button>
                  </Link>
                </div>
              </ActionBtn>
            </Hcsm>
            <Hcsm>
              <p style={{ fontSize: "1.5rem", fontWeight: "500", paddingTop: "1rem" }}>Visa Hackathon</p>
              <p style={{ paddingTop: "2rem", paddingLeft: "0.5rem", lineHeight: "1.5rem", fontSize: "1rem" }}>Innovate and collaborate to solve challenges in digital payments, enhancing user experience and security.</p>
              <img src={codeScreen} alt="" />

              <DateLocationSm>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                  <p>22-02-2025</p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                  <p>Visa Main,MDU</p>
                </div>
              </DateLocationSm>
              <div style={{ marginLeft: "1rem" }}>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>1-3 per team</p>
              </div>
              <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "1rem" }}>Price Pool: $10,000</div>
              <ActionBtn style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>
                <div style={{ display: "flex", width: "8rem", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    Learn More --&gt;
                  </Link>
                </div>
                <div>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    <button>Register Now</button>
                  </Link>
                </div>
              </ActionBtn>
            </Hcsm>
            <Hcsm>
              <p style={{ fontSize: "1.5rem", fontWeight: "500", paddingTop: "1rem" }}>Visa Hackathon</p>
              <p style={{ paddingTop: "2rem", paddingLeft: "0.5rem", lineHeight: "1.5rem", fontSize: "1rem" }}>Innovate and collaborate to solve challenges in digital payments, enhancing user experience and security.</p>
              <img src={codeScreen} alt="" />

              <DateLocationSm>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                  <p>22-02-2025</p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                  <p>Visa Main,MDU</p>
                </div>
              </DateLocationSm>
              <div style={{ marginLeft: "1rem" }}>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>1-3 per team</p>
              </div>
              <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "1rem" }}>Price Pool: $10,000</div>
              <ActionBtn style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>
                <div style={{ display: "flex", width: "8rem", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    Learn More --&gt;
                  </Link>
                </div>
                <div>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    <button>Register Now</button>
                  </Link>
                </div>
              </ActionBtn>
            </Hcsm>
          </HcsmContainer>
        </HackContainer>
      </>
    );
  };

  const Conference = () => {
    return (
      <>
        <p style={{ fontSize: "1.5rem", fontWeight: "700", marginLeft: "3rem", padding: "2rem", marginTop: "2rem" }}>Conference:</p>
        <HackContainer>
          <Hclg style={{ backgroundColor: "#D8F3DC" }}>
            <h4>International Conference on Emerging Technologies in Computer Science </h4>
            <Content>ETCS aims to host a premier academic event for knowledge exchange in computer science, fostering collaboration among researchers worldwide.</Content>
            <img src={conference} alt="" />
            <DateLocation>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                <p>22-02-2025</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                <p>Coimbatore</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>4-5 per team</p>
              </div>
            </DateLocation>
            <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "2rem" }}>Price Pool: $10,000</div>
            <ActionBtn>
              <div>
                <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                  <button>Register Now</button>
                </Link>
              </div>
              <div style={{ display: "flex", width: "auto", height: "auto", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                  Learn More --&gt;
                </Link>
              </div>
            </ActionBtn>
          </Hclg>
          <Hclg style={{ backgroundColor: "#D8F3DC" }}>
            <h4>International Conference on Emerging Technologies in Computer Science </h4>
            <Content>ETCS aims to host a premier academic event for knowledge exchange in computer science, fostering collaboration among researchers worldwide.</Content>
            <img src={conference} alt="" />
            <DateLocation>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                <p>22-02-2025</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                <p>Coimbatore</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>4-5 per team</p>
              </div>
            </DateLocation>
            <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "2rem" }}>Price Pool: $10,000</div>
            <ActionBtn>
              <div>
                <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                  <button>Register Now</button>
                </Link>
              </div>
              <div style={{ display: "flex", width: "auto", height: "auto", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                  Learn More --&gt;
                </Link>
              </div>
            </ActionBtn>
          </Hclg>

          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end", cursor: "pointer" }}>View All -&gt;</div>
          <HcsmContainer>
            <Hcsm style={{ backgroundColor: "#D8F3DC" }}>
              <p style={{ fontSize: "1.5rem", fontWeight: "500", paddingTop: "1rem" }}>International Dev Meet</p>
              <p style={{ paddingTop: "2rem", paddingLeft: "0.5rem", lineHeight: "1.5rem", fontSize: "1rem" }}>The International Dev Meet brings together developers from diverse backgrounds for networking and knowledge sharing</p>
              <img src={codeScreen} alt="" />

              <DateLocationSm>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                  <p>22-02-2025</p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                  <p>Visa Main,MDU</p>
                </div>
              </DateLocationSm>
              <div style={{ marginLeft: "1rem" }}>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>1-3 per team</p>
              </div>
              <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "1rem" }}>Price Pool: $10,000</div>
              <ActionBtn style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>
                <div style={{ display: "flex", width: "8rem", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    Learn More --&gt;
                  </Link>
                </div>
                <div>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    <button>Register Now</button>
                  </Link>
                </div>
              </ActionBtn>
            </Hcsm>
            <Hcsm style={{ backgroundColor: "#D8F3DC" }}>
              <p style={{ fontSize: "1.5rem", fontWeight: "500", paddingTop: "1rem" }}>International Dev Meet</p>
              <p style={{ paddingTop: "2rem", paddingLeft: "0.5rem", lineHeight: "1.5rem", fontSize: "1rem" }}>The International Dev Meet brings together developers from diverse backgrounds for networking and knowledge sharing</p>
              <img src={codeScreen} alt="" />

              <DateLocationSm>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                  <p>22-02-2025</p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                  <p>Visa Main,MDU</p>
                </div>
              </DateLocationSm>
              <div style={{ marginLeft: "1rem" }}>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>1-3 per team</p>
              </div>
              <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "1rem" }}>Price Pool: $10,000</div>
              <ActionBtn style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>
                <div style={{ display: "flex", width: "8rem", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    Learn More --&gt;
                  </Link>
                </div>
                <div>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    <button>Register Now</button>
                  </Link>
                </div>
              </ActionBtn>
            </Hcsm>
            <Hcsm style={{ backgroundColor: "#D8F3DC" }}>
              <p style={{ fontSize: "1.5rem", fontWeight: "500", paddingTop: "1rem" }}>International Dev Meet</p>
              <p style={{ paddingTop: "2rem", paddingLeft: "0.5rem", lineHeight: "1.5rem", fontSize: "1rem" }}>The International Dev Meet brings together developers from diverse backgrounds for networking and knowledge sharing</p>
              <img src={codeScreen} alt="" />

              <DateLocationSm>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                  <p>22-02-2025</p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                  <p>Visa Main,MDU</p>
                </div>
              </DateLocationSm>
              <div style={{ marginLeft: "1rem" }}>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>1-3 per team</p>
              </div>
              <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "1rem" }}>Price Pool: $10,000</div>
              <ActionBtn style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>
                <div style={{ display: "flex", width: "8rem", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    Learn More --&gt;
                  </Link>
                </div>
                <div>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    <button>Register Now</button>
                  </Link>
                </div>
              </ActionBtn>
            </Hcsm>
          </HcsmContainer>
        </HackContainer>
      </>
    );
  };

  const PaperPresentation = () => {
    return (
      <>
        <p style={{ fontSize: "1.5rem", fontWeight: "700", marginLeft: "3rem", padding: "2rem", marginTop: "2rem" }}>Paper Presentation:</p>
        <HackContainer>
          <Hclg style={{ backgroundColor: "#CCDBFD" }}>
            <h4>TechCraft</h4>
            <Content>TechCraft invites engineering enthusiasts to showcase groundbreaking research and innovations in paper presentations, fostering collaboration and knowledge exchange.</Content>
            <img src={paperPresentation} alt="" />
            <DateLocation>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                <p>22-02-2025</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                <p>Coimbatore</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>4-5 per team</p>
              </div>
            </DateLocation>
            <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "2rem" }}>Price Pool: $10,000</div>
            <ActionBtn>
              <div>
                <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                  <button>Register Now</button>
                </Link>
              </div>
              <div style={{ display: "flex", width: "auto", height: "auto", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                  Learn More --&gt;
                </Link>
              </div>
            </ActionBtn>
          </Hclg>
          <Hclg style={{ backgroundColor: "#CCDBFD" }}>
            <h4>TechCraft</h4>
            <Content>TechCraft invites engineering enthusiasts to showcase groundbreaking research and innovations in paper presentations, fostering collaboration and knowledge exchange.</Content>
            <img src={paperPresentation} alt="" />
            <DateLocation>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                <p>22-02-2025</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                <p>Coimbatore</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>4-5 per team</p>
              </div>
            </DateLocation>
            <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "2rem" }}>Price Pool: $10,000</div>
            <ActionBtn>
              <div>
                <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                  <button>Register Now</button>
                </Link>
              </div>
              <div style={{ display: "flex", width: "auto", height: "auto", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                  Learn More --&gt;
                </Link>
              </div>
            </ActionBtn>
          </Hclg>

          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end", cursor: "pointer" }}>View All -&gt;</div>
          <HcsmContainer>
            <Hcsm style={{ backgroundColor: "#C2DBFF" }}>
              <p style={{ fontSize: "1.5rem", fontWeight: "500", paddingTop: "1rem" }}>TechExpo</p>
              <p style={{ paddingTop: "2rem", paddingLeft: "0.5rem", lineHeight: "1.5rem", fontSize: "1rem" }}>Showcase your research and innovation in the Paper Presentation event, where ideas transform into compelling presentations.</p>
              <img src={FlowChart} alt="" />

              <DateLocationSm>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                  <p>22-02-2025</p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                  <p>Visa Main,MDU</p>
                </div>
              </DateLocationSm>
              <div style={{ marginLeft: "1rem" }}>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>1-3 per team</p>
              </div>
              <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "1rem" }}>Price Pool: $10,000</div>
              <ActionBtn style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>
                <div style={{ display: "flex", width: "8rem", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    Learn More --&gt;
                  </Link>
                </div>
                <div>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    <button>Register Now</button>
                  </Link>
                </div>
              </ActionBtn>
            </Hcsm>
            <Hcsm style={{ backgroundColor: "#C2DBFF" }}>
              <p style={{ fontSize: "1.5rem", fontWeight: "500", paddingTop: "1rem" }}>TechExpo</p>
              <p style={{ paddingTop: "2rem", paddingLeft: "0.5rem", lineHeight: "1.5rem", fontSize: "1rem" }}>Showcase your research and innovation in the Paper Presentation event, where ideas transform into compelling presentations.</p>
              <img src={FlowChart} alt="" />

              <DateLocationSm>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                  <p>22-02-2025</p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                  <p>Visa Main,MDU</p>
                </div>
              </DateLocationSm>
              <div style={{ marginLeft: "1rem" }}>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>1-3 per team</p>
              </div>
              <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "1rem" }}>Price Pool: $10,000</div>
              <ActionBtn style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>
                <div style={{ display: "flex", width: "8rem", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    Learn More --&gt;
                  </Link>
                </div>
                <div>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    <button>Register Now</button>
                  </Link>
                </div>
              </ActionBtn>
            </Hcsm>
            <Hcsm style={{ backgroundColor: "#C2DBFF" }}>
              <p style={{ fontSize: "1.5rem", fontWeight: "500", paddingTop: "1rem" }}>TechExpo</p>
              <p style={{ paddingTop: "2rem", paddingLeft: "0.5rem", lineHeight: "1.5rem", fontSize: "1rem" }}>Showcase your research and innovation in the Paper Presentation event, where ideas transform into compelling presentations.</p>
              <img src={FlowChart} alt="" />

              <DateLocationSm>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Date:</p>
                  <p>22-02-2025</p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Location:</p>
                  <p>Visa Main,MDU</p>
                </div>
              </DateLocationSm>
              <div style={{ marginLeft: "1rem" }}>
                <p style={{ fontWeight: "bold", marginBottom: "0.61rem" }}>Member:</p>
                <p>1-3 per team</p>
              </div>
              <div style={{ display: "flex", width: "10rem", height: "auto", backgroundColor: "#023047 ", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem", margin: "1rem", marginLeft: "1rem" }}>Price Pool: $10,000</div>
              <ActionBtn style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>
                <div style={{ display: "flex", width: "8rem", backgroundColor: "#0096C7", color: "#fff", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "0.65rem" }}>
                  <Link to="/learnmore" style={{ textDecoration: "none", color: "inherit" }}>
                    Learn More --&gt;
                  </Link>
                </div>
                <button>Register Now</button>
              </ActionBtn>
            </Hcsm>
          </HcsmContainer>
        </HackContainer>
      </>
    );
  };

  const HackContainer = styled.div`
    //position:relative;
    margin-left: 10%;
    padding: 0rem;
  `;

  const Hclg = styled.div`
    position: relative;
    width: 60rem;
    // min-width:auto;
    height: 24rem;
    background-color: #caf0f8;
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 12px;
    & h4 {
      padding: 2rem;
      font-size: 1.7rem;
      font-weight: 600;
    }
    & img {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 15rem;
      width: 15rem;
      padding: 3rem;
    }
  `;

  const Content = styled.div`
    width: 70%;
    padding-left: 2rem;
    font-size: 1.2rem;
  `;

  const DateLocation = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem;
    padding-bottom: 1rem;
    gap: 2rem;
  `;

  const ActionBtn = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding-left: 2rem;

    & button {
      background-color: #0077b6;
      color: #ffff;
      width: 8rem;
      height: 2.5rem;
      border: none;
      border-radius: 12px;
      font-weight: 600;
    }
  `;

  const HcsmContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    overflow-x: 10rem;
  `;

  const Hcsm = styled.div`
    width: 22rem;
    height: 30rem;
    background-color: #90e0ef;
    margin-top: 2rem;
    border-radius: 16px;
    padding: 1rem;
    position: relative;
    & img {
      position: absolute;
      bottom: 1rem;
      right: 0.5rem;
      width: 9rem;
      height: 9rem;
      opacity: 0.7;
    }
  `;

  const DateLocationSm = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    padding-bottom: 1rem;
    gap: 2rem;
    padding-top: 2rem;
  `;

  //Main flow
  return (
    <>
      <Container>
        <FilterSidebar />
        <div style={{ position: "relative" }}>
          <SortBy>
            <select style={{ border: "none" }}>
              <option value="">Sort By</option>
              <option value="recent">Recents</option>
              <option value="fee">Entry Fee</option>
            </select>
          </SortBy>
          <Hackathon />
          <Conference />
          <PaperPresentation />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;
const SortBy = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0px;
  & select {
    border: none;
    background-color: #d9d9d9;
    padding: 0.25rem;
    border-radius: 8px;
  }

  & option {
    background-color: #fff;
  }
`;

export default Events;
