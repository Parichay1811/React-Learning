import blogPosts from './data'
import './App.css'
import Card from './components/Card/Card'
import { useState, useEffect } from "react";

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
      <div className="container">
        <h1>Blog page</h1>
        <div className='blog-list'>
          {blogPosts.map((blog) => (
            <Card key={blog.id} title={blog.title} date={blog.date} author={blog.author} category={blog.category} content={blog.content} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
