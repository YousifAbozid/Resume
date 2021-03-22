import React from "react"
import Avatar from "./Avatar"
import NavBar from "./NavBar"
import SocialButtons from "./SocialButtons"

const Layout = ({ children }) => {
    return (
        <div className="row">
            <div className="col-md-4" style={{ border: "1px solid black" }}>
                <Avatar />
                <div className="bio">
                    <h2>Yousif Abozid</h2>
                    <p>Full Stack Web Developer</p>
                </div>
                <SocialButtons />
            </div>
            <div className="col-md-8" style={{ border: "1px solid black" }}>
                <NavBar />
                {children}
            </div>
        </div>
    )
}

export default Layout
