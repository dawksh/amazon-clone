import React, { useEffect, useState } from 'react'
import amazon from '../../assets/amazon.png'

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
            <img src={amazon} alt="" />
            <div className="deliver">
                <span className="light">Deliver to Daksh</span>
                <br />
                <span className="location">Agra 282010</span>
            </div>
            <div >
                <input type="text" className="search" />
                <button className="searchBtn">🔍</button>
            </div>

        </nav>
    )
}
