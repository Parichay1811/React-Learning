import { useState, useEffect } from "react";
import people from "./data";
import "./App.css";
import Cards from "./components/Cards/Cards";
// import Nav from "./components/Navbar/Nav";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "enabled";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="darkmode-toggle">
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      {/* <Nav /> */}


      <div className="container">
        <h1>People List</h1>
        <div className="cardContainer">
          {people.map((person) => (
            <Cards
              key={person.id}
              photo={person.photo}
              name={person.name}
              age={person.age}
              occupation={person.occupation}
            />
          ))}
        </div>
      </div>

      
    </>
  );
}

export default App;
