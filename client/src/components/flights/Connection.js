import React, {Component, Fragment} from 'react';

class Connection extends Component {
    render() {
        return (
            <Fragment>
                <button type="button" className="collapsebtn last" data-toggle="collapse"
                        data-target="#collapse5">
                    Connection <span className="collapsearrow"> </span>
                </button>
                <div id="collapse5" className="collapse in">
                    <div className="hpadding20">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>Offers without connection (13)
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>Offers with connection (88)
                            </label>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </Fragment>
        )
    }
}


export default Connection;