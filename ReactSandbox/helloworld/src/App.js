
import React from "react"
import Header from "./components/Header"
import LeftSide from "./components/LeftSide"
import RightSide from "./components/RightSide"
import Footer from "./components/Footer"



// This handles the actual page - works as a 'table of contents'
function App() {
  return (
    <div>
      <Header />
      <LeftSide />
      <RightSide />
      <Footer />
    </div>
  )
}

export default App;

