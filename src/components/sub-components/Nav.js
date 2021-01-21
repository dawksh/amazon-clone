import React, { useEffect, useState } from 'react'
import amazon from '../../assets/amazon.png'
import india from '../../assets/india.png'
import cart from '../../assets/cart.png'

export default function Nav() {

    const [location, setLocation] = useState(null)

    useEffect(() => {
        getLocation()
    }, [])

    const getLocation = async () => {
        window.navigator.geolocation.getCurrentPosition((pos) => { setLocation([pos.coords.latitude, pos.coords.longitude]) }, (err) => console.log(err))
    }

    return (
        <nav>
            <img src={amazon} alt="amazon logo" />
            <div className="deliver">
                <span className="light">Deliver to Daksh</span>
                <br />
                <span className="location">Agra 282010</span>
            </div>
            <div >
                <input type="text" className="search" />
                <button className="searchBtn">🔍</button>
            </div>
            <div>
                <span className="country"><img src={india} alt="India Flag" /></span>
            </div>
            <div className="account">
                <span className="topText">Hello, Daksh,</span>
                <span className="bottomText">Account & Lists</span>
            </div>
            <div className="account">
                <span className="topText">Returns</span>
                <span className="bottomText">& Orders</span>
            </div>
            <div className="cart">
                <img src={cart} alt="cart icon" />
                <span className="cartText">Cart</span>
            </div>
        </nav>
    )
}
