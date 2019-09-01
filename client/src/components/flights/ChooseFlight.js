import React, {Component} from 'react';


import SearchFlight from "./SearchFlight";

class ChooseFlight extends Component {
    render() {
        return (
            <div className="bookfilters hpadding20">
                <div className="size30 dark">Flights</div>
                <table>
                    <tr>
                        <td>
                            <div className="radio radiomargin0">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios1"
                                           value="option1" checked/>
                                    Roundtrip&nbsp;&nbsp;&nbsp;
                                </label>
                            </div>
                        </td>
                        <td>
                            <div className="radio radiomargin0">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios2"
                                           value="option2"/>
                                    One Way
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="radio radiomargin0">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios3"
                                           value="option3"/>
                                    Multiple destinations
                                </label>
                            </div>
                        </td>
                    </tr>
                </table>
                <div className="clearfix"></div>
                <br/>
                <SearchFlight/>
            </div>
        )
    }
}


export default ChooseFlight;