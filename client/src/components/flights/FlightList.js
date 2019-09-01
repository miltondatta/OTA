import React, {Component} from 'react';
import {Link} from "react-router-dom";

// Css
import '../../assets/css/style01.css';
import '../../assets/css/flight-list.css';

// Component
import Sorting from "./Sorting";
import SearchResult from "./SearchResult";
import ChooseFlight from "./ChooseFlight";
import PriceRange from "./PriceRange";
import Connection from "./Connection";
import Airlines from "./Airlines";
import DepartureTime from "./DepartureTime";

class FlightList extends Component {
    render() {
        return (
            <div className="container flight-list-container">
                <div className="container pagecontainer offset-0">
                    <div className="col-md-3 filters offset-0">
                        <ChooseFlight />
                        <div className="line2"> </div>

                        <div className="padding20title"><h3 className="opensans dark">Filter by</h3></div>
                        <div className="line2"> </div>

                        <Connection />
                        <div className="line2"> </div>

                        <PriceRange />
                        <div className="line2"> </div>

                        <Airlines />
                        <div className="line2"> </div>

                        <DepartureTime />
                        <div className="line2"> </div>
                        <div className="clearfix"> </div>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className="rightcontent col-md-9 offset-0">
                        <Sorting />
                        <br/><br/>
                        <div className="clearfix"> </div>
                        <div className="itemscontainer offset-1">
                            <SearchResult />
                            <div className="clearfix"> </div>
                            <div className="offset-2">
                                <hr className="featurette-divider3"/>
                            </div>
                        </div>
                        <div className="hpadding20">
                            <ul className="pagination right paddingbtm20">
                                <li className="disabled"><Link to="#">&laquo;</Link></li>
                                <li><Link to="#">1</Link></li>
                                <li><Link to="#">2</Link></li>
                                <li><Link to="#">3</Link></li>
                                <li><Link to="#">4</Link></li>
                                <li><Link to="#">5</Link></li>
                                <li><Link to="#">&raquo;</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default FlightList;