import React, {Component, Fragment} from 'react'

class DepartureTime extends Component {
    render() {
        return (
            <Fragment>
                <button type="button" className="collapsebtn last" data-toggle="collapse"
                        data-target="#collapse4">
                    Departure time <span className="collapsearrow"> </span>
                </button>
                <div id="collapse4" className="collapse in">
                    <div className="hpadding20">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>Morning (5:00a - 11:59a)
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>Afternoon (12:00p - 5:59p)
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>Evening (6:00p - 11:59p)
                            </label>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </Fragment>
        )
    }
}


export default DepartureTime;