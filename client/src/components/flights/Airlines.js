import React, {Component, Fragment} from 'react'

class Airlines extends Component {
    render() {
        return (
            <Fragment>
                <button type="button" className="collapsebtn last" data-toggle="collapse"
                        data-target="#collapse3">
                    Airlines <span className="collapsearrow"> </span>
                </button>
                <div id="collapse3" className="collapse in">
                    <div className="hpadding20">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>Qatar Airways (6)
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>Emirates (11)
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>Olympic (15)
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>Wizz(15)
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>Tarom
                            </label>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </Fragment>
        )
    }
}


export default Airlines;