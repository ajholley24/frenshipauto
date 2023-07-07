import "./topribbon.css";
import React from "react";

export default class topribbon extends React.Component {
    render() {
        return (
            <div className="component-topribbon">

                <div className="component-logo">
                    <img src="./companylogo.png" />
                </div>

                <div className="component-buttons">
                    <div className="component-button-home">
                        <p>
                            HOME
                        </p>
                    </div>

                    <div className="component-button-about">
                        <p>
                            ABOUT
                        </p>
                    </div>

                    <div className="component-button-appointments">
                        <p>
                            APPOINTMENTS
                        </p>
                    </div>

                </div>

                <div className="component-whitespace">
                </div>

                <div className="component-contact">
                    <div className="component-icon-phone">
                        <img src="./phone-icon.png" />
                    </div>

                    <div className="component-phone-number">
                        <p>
                            (806) 855-4084
                        </p>
                    </div>


                    <div className="component-icon-mail">
                        <img src="./mail-icon.png" />
                    </div>

                    <div className="component-icon-mail-address">
                            <p>
                                frenshipautomotive@yahoo.com
                            </p>
                        </div>
                </div>


            </div>
        )
    }
}
