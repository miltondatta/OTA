import React from 'react'

const CardPayment = ({card}) => {
    return (
        card && <div className="tab-pane active" id="card">
                <div className="col-md-4 textright">
                    <div className="margtop15"><span
                        className="dark">Debit/Credit Card Number:</span><span
                        className="red">*</span>
                    </div>
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control margtop10" placeholder=""/>
                </div>
                <div className="col-md-4 textleft">
                </div>
                <div className="clearfix"></div>
                <br/>
                <div className="col-md-4 textright">
                    <div className="margtop7"><span className="dark">Card Type:</span><span
                        className="red">*</span></div>
                </div>
                <div className="col-md-4">
                    <select className="form-control mySelectBoxClass">
                        <option selected>xxx-xxx-xxx-772</option>
                        <option>xxx-xxx-xxx-039</option>
                    </select>
                </div>
                <div className="col-md-4 textleft">
                </div>
                <div className="clearfix"></div>
                <br/>
                <div className="col-md-4 textright">
                    <div className="margtop7"><span className="dark">Expiration Date:</span><span
                        className="red">*</span></div>
                </div>
                <div className="col-md-4">
                    <div className="w50percent">
                        <div className="wh90percent">
                            <select className="form-control mySelectBoxClass">
                                <option selected>01 JAN</option>
                                <option>02 FEB</option>
                                <option>03 MAR</option>
                                <option>04 APR</option>
                                <option>05 MAY</option>
                                <option>06 JUN</option>
                                <option>07 JUL</option>
                                <option>08 AUG</option>
                                <option>09 SEP</option>
                                <option>10 OCT</option>
                                <option>11 NOV</option>
                                <option>12 DEC</option>
                            </select>
                        </div>
                    </div>
                    <div className="w50percentlast">
                        <div className="wh90percent right">
                            <select className="form-control mySelectBoxClass">
                                <option selected>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                            </select>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="col-md-4 textleft">
                </div>
                <div className="clearfix"></div>
                <br/>
                <div className="col-md-4 textright">
                    <div className="margtop15"><span
                        className="dark">Card Identification Number:</span><span
                        className="red">*</span></div>
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control margtop10" placeholder=""/>
                </div>
                <div className="col-md-4 textleft margtop15">What's this?
                </div>
                <div className="clearfix"></div>
                <div className="col-md-4 textright">
                    <div className="margtop15"><span className="dark">Billing ZIP Code:</span><span
                        className="red">*</span></div>
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control margtop10" placeholder=""/>
                </div>
                <div className="col-md-4 textleft margtop15">
                </div>
                <div className="clearfix"></div>
                <div className="col-md-4 textright">
                    <div className="margtop15"><span className="dark"> Cardholder Name:</span><span
                        className="red">*</span></div>
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control margtop10" placeholder=""/>
                </div>
                <div className="col-md-4 textleft margtop15">(as it appears on the card)
                </div>
                <div className="clearfix"></div>
            </div>
    );
};


export default CardPayment;
