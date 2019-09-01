import React, {Component} from 'react'

class Sorting extends Component {
    render() {
        return (
            <div className="hpadding20">
                <div className="topsortby">
                    <div className="col-md-4 offset-0">

                        <div className="left mt7"><b>Sort by:</b></div>

                        <div className="right wh70percent">
                            <select className="form-control mySelectBoxClass ">
                                <option selected>Departure</option>
                                <option>Morning (5:00a - 11:59a)</option>
                                <option>Afternoon (12:00p - 5:59p)</option>
                                <option>Evening (6:00p - 11:59p)</option>
                            </select>
                        </div>


                    </div>
                    <div className="col-md-4">
                        <div className="w50percent">
                            <div className="wh90percent">
                                <select className="form-control mySelectBoxClass ">
                                    <option selected>Arrival</option>
                                    <option>Morning (5:00a - 11:59a)</option>
                                    <option>Afternoon (12:00p - 5:59p)</option>
                                    <option>Evening (6:00p - 11:59p)</option>
                                </select>
                            </div>
                        </div>
                        <div className="w50percentlast">
                            <div className="wh90percent">
                                <select className="form-control mySelectBoxClass ">
                                    <option selected>Price</option>
                                    <option>Ascending</option>
                                    <option>Descending</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Sorting;