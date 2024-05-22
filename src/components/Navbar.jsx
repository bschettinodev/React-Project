import React from "react"
import ReactLogo from '../images/react-logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={ReactLogo} alt="React Logo" className="navbar--logo" />
            <h1 className="navbar--title">ReactFacts</h1>
            <h4 className="navbar--subtitle">React Course - Project 1</h4>
        </nav>
    )
}