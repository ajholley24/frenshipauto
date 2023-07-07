import "./building.css";
import React from "react";


export default class building extends React.Component {

    render() {
        return (

            <div className="component-shop-front-wrapper">
                <div className="component-box-1">
                    <h1>
                        Automotive Service.<br/>
                        Simplified.
                    </h1>
                </div>

                <div className="component-box-2">
                    <img src="./building.jpg" />
                </div>
                <div className="component-box-2-gradient"></div>
                <div className="component-box-4">
                    <h1>Business Hours:</h1>
                </div>

                <div className="component-box-3">
                    <h1>
                        M - 8:00 AM - 6:00 PM <br />
                        T - 8:00 AM - 6:00 PM <br />
                        W - 8:00 AM - 6:00 PM <br />
                        T - 8:00 AM - 6:00 PM <br />
                        F - 8:00 AM - 6:00 PM <br />
                        Sa - Closed <br />
                        Su - Closed <br />
                    </h1>
                </div>
            </div>

        );
    }

}