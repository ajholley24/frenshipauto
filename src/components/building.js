import "./building.css";
import React from "react";


export default class building extends React.Component {

    render() {
        return (
            <div className="component-shop-front">
                <img src="./building.jpg" />



                <div className="component-shop-front-text-box">
                    <div className="component-shop-front-text">
                        <h1>
                            Automotive Repair. <br />
                            Simplified.
                        </h1>
                    </div>

                </div>

            </div>
        );
    }

}