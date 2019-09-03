import React from 'react'

const FlightPassenger = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <span className="size13 dark">First Name</span>
                <input type="text" className="form-control " placeholder=""/>
            </div>
            <div className="col-md-4">
                <span className="size13 dark">Last Name</span>
                <input type="text" className="form-control " placeholder=""/>
            </div>
            <div className="col-md-4">
                <div className="w50percent">
                    <span className="size13 dark">Date of birth</span>
                    <input type="text" className="form-control mySelectCalendar" id="datepicker3"
                           placeholder=""/>
                </div>
                <div className="w50percentlast">
                    <div className="w90percentlast right">
                        &nbsp;<br/>
                        <div className="radio radiomargin0">
                            <label>
                                <input type="radio" checked="" name="optionsRadios2" id="optionsRadios2"
                                       value="option2"/>
                                Male
                            </label>
                        </div>
                        <div className="radio radiomargin0">
                            <label>
                                <input type="radio" name="optionsRadios2" id="optionsRadios2"
                                       value="option2"/>
                                Female
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <br/>
            <div className="col-md-4">
                <span className="size13 dark">Citizenship</span>
                <select className="form-control mySelectBoxClass">
                    <option selected>Bangladeshi</option>
                    <option>American</option>
                    <option>Canadian</option>
                    <option>Australian</option>
                </select>
            </div>
            <div className="col-md-4">
                <span className="size13 dark">NID</span>
                <input type="text" className="form-control " placeholder=""/>
            </div>
            <div className="clearfix"></div>
        </div>
    )
};


export default FlightPassenger;
