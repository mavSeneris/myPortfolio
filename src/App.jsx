
import { useState } from "react"
import Header from "./components/Header"
import About from "./components/About"
import MyStack from "./components/MyStack"
import MyProjects from "./components/MyProjects"
import Footer from "./components/Footer"
import './assets/styles/App.css'



function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(isDarkMode => !isDarkMode)
  }

  const bgDark = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black"
  }

  return (
    <div style={bgDark} className="App">
      <Header
        darkMode={darkMode}
      />
      <About 
        darkMode={darkMode}
      />
      <MyStack 
        darkMode={darkMode}
      />
      <MyProjects />
      <Footer />
    </div>
  )
}

export default App
