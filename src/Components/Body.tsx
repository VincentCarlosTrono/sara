import React from 'react'
import "./Body.scss"
import banner from "../Media/home.png"

export const Body = () => {
    return (
        <div className="main-head">
            <div className="tags">
                <h1>NEW</h1>
                <h2>ARRIVALS</h2>


                <button className="btn"> GO SHOPPING
                </button>

            </div>
            <img src={banner} />
        </div>
    )
}
export default Body
