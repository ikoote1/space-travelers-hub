import React from "react";
import rocket1 from "../images/rocket1.jpg"
import rocket2 from "../images/rocket2.jpg"

const Rockets = () => {
    return(
        <div className="rockets">
            <div className="rocket">
                <div className="rocketImage"><img src={rocket1} alt="rocket"></img></div>
                <div className="aboutR">
                    <h1>Falcon1</h1>
                    <p className="desc">The Rockets section displays a list of all
                        available SpaceX rockets. Users can book each rocket by clicking the reservation
                        button or cancel the previously made booking. The same layout is
                        used to form the Dragons section</p>
                    <button type="button">Reserve Rocket</button>
                    <button type="button">Cancel Reservation</button>
                </div>
                <div className="rocketImage"><img src={rocket2} alt="rocket"></img></div>
                <div className="aboutR">
                    <h1>Falcon1</h1>
                    <p className="desc">The Rockets section displays a list of all
                        available SpaceX rockets. Users can book each rocket by clicking the reservation
                        button or cancel the previously made booking. The same layout is
                        used to form the Dragons section</p>
                    <button type="button">Reserve Rocket</button>
                    <button type="button">Cancel Reservation</button>
                </div>
                <div className="rocketImage"><img src={rocket1} alt="rocket"></img></div>
                <div className="aboutR">
                    <h1>Falcon1</h1>
                    <p className="desc">The Rockets section displays a list of all
                        available SpaceX rockets. Users can book each rocket by clicking the reservation
                        button or cancel the previously made booking. The same layout is
                        used to form the Dragons section</p>
                    <button type="button">Reserve Rocket</button>
                    <button type="button">Cancel Reservation</button>
                </div>
            </div>
        </div>
    )
}

export default Rockets