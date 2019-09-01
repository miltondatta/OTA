import React, {Component} from 'react'

class SearchFlight extends Component {
    render() {
        return (
            <div className="hotelstab2">
                <div className="wh100percent">
                    <div className="wh100percent textleft">
                        <span className="opensans size13">Flying from</span>
                        <input type="text" className="form-control" placeholder="City or airport"/>
                    </div>
                </div>

                <div className="wh100percent">
                    <div className="wh100percent textleft">
                        <span className="opensans size13">To</span>
                        <input type="text" className="form-control" placeholder="City or airport"/>
                    </div>
                </div>
                <div className="clearfix pbottom15"></div>
                <div className="w50percent">
                    <div className="wh90percent textleft">
                        <span className="opensans size13">Departing</span>
                        <input type="text" className="form-control" id="datepicker3"
                               placeholder="mm/dd/yyyy"/>
                    </div>
                </div>
                <div className="w50percentlast">
                    <div className="wh90percent textleft right">
                        <span className="opensans size13">Returning</span>
                        <input type="text" className="form-control" id="datepicker4"
                               placeholder="mm/dd/yyyy"/>
                    </div>
                </div>
                <div className="clearfix pbottom15"></div>
                <div className="room1">
                    <div className="w50percent">
                        <div className="wh90percent textleft">
                            <span className="opensans size13">Adult</span>
                            <select className="form-control mySelectBoxClass">
                                <option>1</option>
                                <option selected>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13">Child</span>
                            <select className="form-control mySelectBoxClass">
                                <option>0</option>
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <br/>
                <button type="submit" className="btn-search3">Search</button>
            </div>
        )
    }
}


export default SearchFlight;