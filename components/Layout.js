import React from "react"
import NavBar from "./NavBar"
import Link from "next/link"

const Layout = ({ children }) => {
    return (
        <div className="row">
            <div className="col-md-4" style={{ border: "1px solid black" }}>
                picture
            </div>
            <div className="col-md-8" style={{ border: "1px solid black" }}>
                {/* <Link href="/skills">
                    <a className="btn btn-info">skills</a>
                </Link> */}
                <NavBar />
                {children}
            </div>
        </div>
    )
}

export default Layout
