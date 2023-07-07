import React from "react";
import "./location.css";

export default class location extends React.Component {


    
        render() {
            return (
                <div className="component-location">

                    
                    <div className="component-location-map">
                    <img src="map.png" />
                    </div>

                    <div className="component-location-info-wrapper">
                        <div className="component-location-info-box-a"><p>Address: 208 E Hwy 62-82, Wolfforth, TX 79382</p></div>
                        <div className="component-location-info-box-b"><p>Servicing the greater Lubbock area since 2013</p></div>
                    </div>

                </div>
            );
        }
    }