import React from "react"
import TodoItems from "./TodoItems"

function timeFormatter(n){
    return n > 9 ? "" + n: "0" + n
}
  
const timeStyles = {
    color: "#F8F8FF", 
    fontSize: "20px", 
    display: "flex", 
    justifyContent: "center"
}
  
function writeMessage(n1){
    if (n1 < 12) {
      timeStyles.backgroundColor = "#B22222"
      return "Good Morning!"
    } else if (n1 >= 12 && n1 < 17) {
      timeStyles.backgroundColor = "#1E90FF"
      return "Good Afternoon!"
    } else {
      timeStyles.backgroundColor = "#00008B"
      return "Good Night!"
    }
}

function RightSide() {
    const firstName = "Little"
    const lastName = "Thing"

    const date = new Date()
    var hours = timeFormatter(date.getHours())
    var minutes = timeFormatter(date.getMinutes())
    
    return (
        <div className = "rightSide">
            <TodoItems 
                info ={{num: "1", text: "Do this first"}}
            />
            <TodoItems 
                info ={{num: "2", text: "Second thing to do"}}
            />
            <TodoItems 
                info ={{num: "3", text: "Third thing to do"}}
            />
            <h1 style={{display: "flex", justifyContent: "center"}}>Hello {firstName + " " + lastName}!</h1>
            <h2 style={timeStyles}>The time is currently {hours}:{minutes}! {writeMessage(hours)}</h2>
        </div>
    )
}

export default RightSide