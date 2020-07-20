import React from "react"
import "./style.css"

function Footer() {
    return (
        /* <footer className="footer">
            <a href="https://github.com/KevinW1008/Stocks" style={{color: "#F8F8FF"}}>
                Check out our GitHub!
            </a>
            <p>Don't forget to comment!</p>
        </footer> */
        <ul className ="footer">
            <li><a href="https://github.com/KevinW1008/Stocks">Github</a></li>
            <li><a href="FindoneServ">Contact us</a></li>
            <li><a href="rank.jsp"   >About</a></li>
        </ul>
    )
}

export default Footer