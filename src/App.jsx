import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import MyStack from "./components/MyStack"
import MyProjects from "./components/MyProjects"
import Footer from "./components/Footer"
import './assets/styles/App.css'


function App() {


  return (
    <div className="App">
      <Header />
      <About />
      <MyStack />
      <MyProjects/>
      <Footer/>
    </div>
  )
}

export default App
