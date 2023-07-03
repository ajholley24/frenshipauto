import React from "react";
import "./services.css";

export default class services extends React.Component {

    render() {
        return (
            <div className="component-services">
                <div className="component-services-image">
                    <img src="IMG_0702.jpg" />
                </div>

                <div className="component-services-info">

                    <div className="component-services-info-days">
                        <p>
                            <b>
                                Mon <br />
                                Tue <br />
                                Wed <br />
                                Thu <br />
                                Fri <br />
                                Sat <br />
                                Sun <br />
                            </b>
                        </p>
                    </div>

                    <div className="component-services-info-hours">
                        <p>
                            8:00 AM - 6:00 PM <br />
                            8:00 AM - 6:00 PM <br />
                            8:00 AM - 6:00 PM <br />
                            8:00 AM - 6:00 PM <br />
                            8:00 AM - 6:00 PM <br />
                            Closed <br />
                            Closed <br />
                        </p>
                    </div>

                    <div className="component-services-division-bar-1">
                    </div>


                    <div className="component-services-info-text1">
                        <p>
                            Appointments ARE neccessary for most repairs. Please call ahead to schedule an appointment with us!
                        </p>
                    </div>

                    <div className="component-services-division-bar-2">
                    </div>

                    <div className="component-services-info-services">
                        <div className="component-services-info-services-title">
                            <p>
                                Services We Offer:
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}