import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.eventContainer}>
      <h1 style={styles.header}>Upcoming Events</h1>
      <div style={styles.eventList}>
        {events.map((event) => (
          <div key={event._id} style={styles.eventCard}>
            <h2 style={styles.eventName}>{event.name}</h2>
            <p style={styles.eventDetails}>{event.date} | {event.location}</p>
            <p style={styles.eventDescription}>{event.description}</p>
            <p style={styles.clubName}>Conducted by: Dummy Club</p> {/* Placeholder for clubName */}
            <button style={styles.registerButton} onClick={() => handleRegister(event.name)}>Register</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const handleRegister = (eventName) => {
  window.location.href = `/register?eventName=${eventName}`; // Redirect to register page with event name
};

const styles = {
  eventContainer: {
    padding: "20px",
    backgroundColor: "#e0f8e0",
  },
  header: {
    textAlign: "center",
    color: "#0d8b0d",
  },
  eventList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  eventCard: {
    backgroundColor: "#b0e0b0",
    borderRadius: "10px",
    width: "300px",
    padding: "15px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 128, 0, 0.2)",
    transition: "0.3s",
  },
  eventName: {
    color: "#0d8b0d",
  },
  eventDetails: {
    color: "#104d10",
  },
  eventDescription: {
    color: "#0d702d",
  },
  clubName: {
    fontWeight: "bold",
    color: "#0b5e0b",
  },
  registerButton: {
    backgroundColor: "#006400",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Events;
