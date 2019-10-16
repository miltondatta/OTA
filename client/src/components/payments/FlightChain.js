import React, {Fragment} from 'react';

const FlightChain = () => {
    return (
        <Fragment>
            <div>
                <div className="wh33percent left size12 bold dark">
                    BUC
                </div>
                <div className="wh33percent left center size12 bold dark">
                    FRA
                </div>
                <div className="wh33percent right textright size12 bold dark">
                    DUB
                </div>
                <div className="clearfix"></div>

                <div className="wh33percent left">
                    <div className="fcircle">
                        <span className="fdeparture"></span>
                    </div>
                </div>
                <div className="wh33percent left">
                    <div className="fcircle center">
                        <span className="fstop"></span>
                    </div>
                </div>
                <div className="wh33percent right">
                    <div className="fcircle right">
                        <span className="farrival"></span>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="fline2px"></div>

                <div className="wh33percent left size12">
                    04:05 PM
                </div>
                <div className="wh33percent left center size12">
                    1 h 20 m
                </div>
                <div className="wh33percent right textright size12">
                    07:35 PM
                </div>
                <div className="clearfix"></div>
            </div>
            <br/>
            <div>
                <div className="wh33percent left size12 bold dark">
                    DUB
                </div>
                <div className="wh33percent left center size12 bold dark">
                    FRA
                </div>
                <div className="wh33percent right textright size12 bold dark">
                    BUC
                </div>
                <div className="clearfix"></div>
                <div className="wh33percent left">
                    <div className="fcircle">
                        <span className="fdeparture"></span>
                    </div>
                </div>
                <div className="wh33percent left">
                    <div className="fcircle center">
                        <span className="fstop"></span>
                    </div>
                </div>
                <div className="wh33percent right">
                    <div className="fcircle right">
                        <span className="farrival"></span>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="fline2px"></div>
                <div className="wh33percent left size12">
                    17:00 PM
                </div>
                <div className="wh33percent left center size12">
                    1 h 00 m
                </div>
                <div className="wh33percent right textright size12">
                    21:35 PM
                </div>
                <div className="clearfix"></div>
            </div>
        </Fragment>
    )
};


export default FlightChain;
