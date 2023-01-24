import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import data from "./data.js"

export default function App() {
  
  const cards = data.map(destination => {
    return(
        <Card 
          key = {destination.title}
          destination = {destination}
        />
      )
  })
    

  return (
    <div className="app-container">
      <Header />
      {cards}

    </div>
  )
}
