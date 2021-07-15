import React from 'react'
import "./Header.scss"

export const Header = () => {
    return (
        <div className="head">
            <h1 className="logo">SARA</h1>
            <div className="nav">
                <div className="lines">
                    <ul>
                        <li>Home</li>
                        <li>Featured</li>
                        <li>New</li>
                        <li>Subscribe</li>
                    </ul>
                </div>
                {/* @ts-ignore */}
                <div className="icon"><box-icon name='cart'></box-icon></div>
            </div>

        </div>
    )
}
export default Header
