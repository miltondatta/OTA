import React, {Fragment, useState} from 'react'

const TicketDetails = () => {
    const [ticketView, toggleTicketView] = useState(true);

    return (
        <Fragment>
            Traveler 1: Adult <span className="right bold green">$787.25</span>
            <button type="button" className="collapsebtn3 collapsed mt-5" onClick={() => toggleTicketView(!ticketView)}></button>
            {ticketView && <div id="collapse1" className="collapse in">
                <div className="left size14">
                    Flight<br/>
                    Taxes & Fees
                </div>
                <div className="right size14">
                    $458.00<br/>
                    $329.25
                </div>
                <div className="clearfix"></div>
            </div>}
            <div className="mt10"></div>
        </Fragment>
    )
};


export default TicketDetails;
