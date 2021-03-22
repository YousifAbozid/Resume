import React from "react"
import NavBar from "./NavBar"

const Layout = ({ children }) => {
    return (
        <div className="row">
            <div className="col-md-4" style={{ border: "1px solid black" }}>
                picture
            </div>
            <div className="col-md-8" style={{ border: "1px solid black" }}>
                <NavBar />
                {children}
            </div>
        </div>
    )
}

export default Layout
