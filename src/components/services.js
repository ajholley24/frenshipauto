import React from "react";
import "./services.css";

export default class services extends React.Component {

    render() {
        return (

            <div className="component-services">



                <div className="component-services-wrapper">

                    <div className="component-services-title-box"><p>Services we proudly offer</p></div>

                    <div className="component-services-box"><p>Oil Change</p></div>
                    <div className="component-services-box"><p>Tire Rotation</p></div>
                    <div className="component-services-box"><p>Flat Repair</p></div>
                    <div className="component-services-box"><p>Alignments*</p></div>
                    <div className="component-services-box"><p>A/C Service</p></div>
                    <div className="component-services-box"><p>Engine Repair</p></div>
                    <div className="component-services-box"><p>Transmission Repair</p></div>
                    <div className="component-services-box"><p>Brake Service</p></div>
                    <div className="component-services-box"><p>Vehicle Diagnosis</p></div>
                    <div className="component-services-box-ast"><p>*Small cars and light duty trucks</p></div>


                </div>
            </div>

        );
    }

} 