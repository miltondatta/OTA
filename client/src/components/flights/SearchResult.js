import React, {Component, Fragment} from 'react';

// Image
import tarom from '../../assets/img/tarom.png';
import wizz from '../../assets/img/wizz.png';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleSearchResult: false,
            toggleReturnSearchResult: false,
            toggleDeparture: false,
            toogleDepartureTwo: false
        }
    }

    render() {
        return (
            <Fragment>
                <div id="ticketid0123" className="offset-2">
                    <div className="fblueline"><b>Bucharest</b> Otopeni <span className="farrow"> </span>
                        <b>London</b> Heathrow
                    </div>
                    <div className="frow1">
                        <ul className="flightstable mt20">
                            <li className="ft1">
                                <img src={tarom} alt=""/>
                            </li>
                            <li className="ft2">
                                <div className="radio radiomargin0">
                                    <label>
                                        <input type="radio" checked={this.state.toggleDeparture} onClick={() => this.setState({toggleDeparture: !this.state.toggleDeparture}) } value="option1" id="optionsRadios1"
                                               name="optionsFradios"/>
                                        Departure
                                    </label>
                                </div>
                                <span className="grey">3 February, Mon</span><br/>
                                <span className="size16 dark bold">14:00</span><br/>
                            </li>
                            <li className="ft3">
                                Arrival<br/>
                                <span className="grey">3 February, Mon</span><br/>
                                <span className="size16 dark bold">17:45</span><br/>
                            </li>
                            <li className="ft4">
                                Flight<br/>
                                <span className="grey">LH-1419</span><br/>
                                Embraer ERJ-190<br/>
                            </li>
                            <li className="ft5">
                                <button className="lightbtn mt1" type="button" onClick={() => this.setState({toggleSearchResult: !this.state.toggleSearchResult})}>
                                    More
                                </button>
                            </li>
                        </ul>
                        <div className="clearfix"> </div>
                        <br/><br/>
                    </div>
                    {this.state.toggleSearchResult &&
                        <div className="frowexpand" id="collapse10">
                        <ul className="flightstable mt20">
                            <li className="ft1">
                            </li>
                            <li className="ft2">
                                Duration<br/>
                                <span className="grey">Economy</span><br/>
                                <b>5 h 45 min</b><br/>
                            </li>
                            <li className="ft3">
                                Connections<br/>
                                <span className="grey">Frankfurt, Germany</span><br/>
                                <b>1 h 25 min</b><br/>
                            </li>
                            <li className="ft4">
                                Seats left<br/><br/>
                                <b>6</b>
                            </li>
                            <li className="ft5">
                                <button className="hidebtn mt1" type="button"  onClick={() => this.setState({toggleSearchResult: !this.state.toggleSearchResult})}>Hide
                                </button>
                            </li>
                        </ul>
                        <div className="clearfix"> </div>
                        <br/><br/>

                    </div>
                    }
                    <div className="fselect">
                        <span className="size12 lightgrey">Roundtrip / per person</span> <span
                        className="size18 green bold">$770</span>&nbsp;
                        <button className="selectbtn mt1" type="button">Select</button>
                    </div>

                    <div className="fgreenline"><b>London</b> Heathrow <span className="farrow"></span>
                        <b>Bucharest</b> Otopeni
                    </div>
                    <div className="frow2">
                        <ul className="flightstable mt20">
                            <li className="ft1">
                                <img src={wizz} alt="" />
                            </li>
                            <li className="ft2">
                                <div className="radio radiomargin0">
                                    <label>
                                        <input type="radio" checked={this.state.toogleDepartureTwo} onClick={() => this.setState({toogleDepartureTwo: !this.state.toogleDepartureTwo}) } value="option2" id="optionsRadios2"
                                               name="optionsFradios2" />
                                            Departure
                                    </label>
                                </div>
                                <span className="grey">3 February, Mon</span><br/>
                                <span className="size16 dark bold">14:00</span><br/>
                            </li>
                            <li className="ft3">
                                Arrival<br/>
                                <span className="grey">3 February, Mon</span><br/>
                                <span className="size16 dark bold">17:45</span><br/>
                            </li>
                            <li className="ft4">
                                Flight<br/>
                                <span className="grey">LH-1419</span><br/>
                                Embraer ERJ-190<br/>
                            </li>
                            <li className="ft5">
                                <button className="lightbtn mt1" type="button" onClick={() => this.setState({toggleReturnSearchResult: !this.state.toggleReturnSearchResult})}>More
                                </button>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                        <br/><br/>
                    </div>
                    {this.state.toggleReturnSearchResult &&
                        <div className="frowexpand" id="collapse12">
                        <ul className="flightstable mt20">
                            <li className="ft1">
                            </li>
                            <li className="ft2">
                                Duration<br/>
                                <span className="grey">Economy</span><br/>
                                <b>5 h 45 min</b><br/>
                            </li>
                            <li className="ft3">
                                Connections<br/>
                                <span className="grey">Frankfurt, Germany</span><br/>
                                <b>1 h 25 min</b><br/>
                            </li>
                            <li className="ft4">
                                Seats left<br/><br/>
                                <b>6</b>
                            </li>
                            <li className="ft5">
                                <button className="hidebtn mt1" type="button"  onClick={() => this.setState({toggleReturnSearchResult: !this.state.toggleReturnSearchResult})}>Hide
                                </button>
                            </li>
                        </ul>
                        <div className="clearfix"> </div>
                        <br/><br/>
                        <div className="clearfix"> </div>
                    </div>
                    }
                    <div className="fselect">
                        <span className="size12 lightgrey">Roundtrip / per person</span> <span
                        className="size18 green bold">$770</span>&nbsp;
                        <button className="selectbtn mt1" type="button">Select</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default SearchResult;