import React, {Component} from 'react';

// Css
import '../../assets/css/flight-list.css';

// Component
import SearchFlight from "./SearchFlight";

class ChooseFlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneWay: true,
            roundTrip: false,
            multiCity: false
        };
    }

    render() {
        return (
            <div className="bookfilters hpadding20">
                <div className="size30 dark">Flights</div>
                <table>
                    <tr>
                        <td>
                            <div className="radio radiomargin0 marginRight5">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios1"
                                           value={this.state.oneWay} onClick={() => this.setState({
                                        oneWay: true,
                                        roundTrip: false,
                                        multiCity: false
                                    })} checked={this.state.oneWay ? true : false}/>
                                    One Way
                                </label>
                            </div>
                        </td>
                        <td>
                            <div className="radio radiomargin0">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios2"
                                           value={this.state.roundTrip} onClick={() => this.setState({
                                        roundTrip: true,
                                        oneWay: false,
                                        multiCity: false
                                    })} checked={this.state.roundTrip ? true : false}/>
                                    RoundTrip
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="radio radiomargin0">
                                <label>
                                    <input onClick={() => this.setState({
                                        multiCity: true,
                                        roundTrip: false,
                                        oneWay: false
                                    })} type="radio" name="optionsRadios" id="optionsRadios3"
                                           value={this.state.multiCity} checked={this.state.multiCity ? true : false}/>
                                    Multi City
                                </label>
                            </div>
                        </td>
                    </tr>
                </table>
                <div className="clearfix"> </div>
                <br/>
                <SearchFlight oneWay={this.state.oneWay} roundTrip={this.state.roundTrip} multiCity={this.state.multiCity} />
            </div>
        )
    }
}


export default ChooseFlight;