import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

export class Landing extends Component {
    render() {
        return (
			<Fragment>
				<div id="dajy" className="fullscreen-container mtslide sliderbg fixed">
					<div className="fullscreenbanner">
						<ul>
							<li data-transition="fade" data-slotamount="1" data-masterspeed="300">

								<img src="../../travel/images/slider/paris.jpg" alt=""/>
								<div className="tp-caption scrolleffect sft"
									 data-x="center"
									 data-y="120"
									 data-speed="1000"
									 data-start="800"
									 data-easing="easeOutExpo">
									<div className="sboxpurple textcenter">
										<span className="lato size28 slim caps white">France</span><br/><br/><br/>
										<span className="lato size100 slim caps white">Paris</span><br/>
										<span className="lato size20 normal caps white">from</span><br/><br/>
										<span className="lato size48 slim uppercase yellow">$1500</span><br/>
									</div>
								</div>
							</li>
							<li data-transition="fade" data-slotamount="1" data-masterspeed="300">
								<img src="../../travel/images/slider/rome.jpg" alt=""/>
								<div className="tp-caption scrolleffect sft"
									 data-x="center"
									 data-y="120"
									 data-speed="1000"
									 data-start="800"
									 data-easing="easeOutExpo">
									<div className="sboxpurple textcenter">
										<span className="lato size28 slim caps white">Italy</span><br/><br/><br/>
										<span className="lato size100 slim caps white">Rome</span><br/>
										<span className="lato size20 normal caps white">from</span><br/><br/>
										<span className="lato size48 slim uppercase yellow">$1500</span><br/>
									</div>
								</div>
							</li>
							<li data-transition="fade" data-slotamount="1" data-masterspeed="300">
								<img src="../../travel/images/slider/santorini.jpg" alt=""/>
								<div className="tp-caption scrolleffect sft"
									 data-x="center"
									 data-y="120"
									 data-speed="1000"
									 data-start="800"
									 data-easing="easeOutExpo">
									<div className="sboxpurple textcenter">
										<span className="lato size28 slim caps white">Greece</span><br/><br/><br/>
										<span className="lato size100 slim caps white">Santorini</span><br/>
										<span className="lato size20 normal caps white">from</span><br/><br/>
										<span className="lato size48 slim uppercase yellow">$1500</span><br/>
									</div>
								</div>
							</li>


						</ul>
						<div className="tp-bannertimer none"></div>
					</div>
				</div>
				<div className="wrap cstyle03">

					<div className="container mt-130 z-index100">
						<div className="row">
							<div className="col-md-12">
								<div className="bs-example bs-example-tabs cstyle04">

									<ul className="nav nav-tabs" id="myTab">
										<li onClick="mySelectUpdate()" className="active"><a data-toggle="tab"
																							 href="#air2"><span
											className="flight"></span><span className="hidetext">Air</span>&nbsp;</a>
										</li>
										<li onClick="mySelectUpdate()" className=""><a data-toggle="tab" href="#hotel2"><span
											className="hotel"></span><span className="hidetext">Hotel</span>&nbsp;</a>
										</li>
										<li onClick="mySelectUpdate()" className=""><a data-toggle="tab"
																					   href="#car2"><span
											className="car"></span><span className="hidetext">Car</span>&nbsp;</a></li>
										<li onClick="mySelectUpdate()" className=""><a data-toggle="tab"
																					   href="#vacations2"><span
											className="suitcase"></span><span
											className="hidetext">Vacations</span>&nbsp;</a></li>
										<li onClick="mySelectUpdate()" className=""><a data-toggle="tab"
																					   href="#flighthotel2"><span
											className="flighthotel"></span><span
											className="hidetext">Flight + Hotel</span>&nbsp;</a></li>
										<li onClick="mySelectUpdate()" className=""><a data-toggle="tab"
																					   href="#cruise2"><span
											className="cruise"></span><span className="hidetext">Cruise</span>&nbsp;</a>
										</li>
										<li onClick="mySelectUpdate()" className=""><a data-toggle="tab"
																					   href="#hotelcar2"><span
											className="hotelcar"></span><span
											className="hidetext">Hotel + Car</span>&nbsp;</a></li>
										<li onClick="mySelectUpdate()" className=""><a data-toggle="tab"
																					   href="#flighthotelcar2"><span
											className="flighthotelcar"></span><span className="hidetext">Flight + Hotel + Car</span>&nbsp;
										</a></li>
									</ul>

									<div className="tab-content2" id="myTabContent">
										<div id="air2" className="tab-pane fade active in">

											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Flying from</b></span>
														<input type="text" className="form-control"
															   placeholder="City or airport"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>To</b></span>
														<input type="text" className="form-control"
															   placeholder="City or airport"/>
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Departing</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker3" placeholder="mm/dd/yyyy"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>Returning</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker4" placeholder="mm/dd/yyyy"/>
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="room1">
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>Adult</b></span>
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
															<span className="opensans size13"><b>Child</b></span>
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
											</div>
										</div>

										<div id="hotel2" className="tab-pane fade">

											<div className="col-md-4 pt-6">
												<span className="opensans size18">Where do you want to go?</span>
												<input type="text" className="form-control" placeholder="Greece"/>
											</div>

											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Check in date</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker" placeholder="mm/dd/yyyy"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>Check in date</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker2" placeholder="mm/dd/yyyy"/>
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="room1">
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 1</b></span><br/>

															<div className="addroom1 block"><a href="#room2"
																							   onClick="addroom2()"
																							   className="grey">+ Add
																room</a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
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
																	<span
																		className="opensans size13"><b>Child</b></span>
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
													</div>
												</div>

												<div className="room2 none">
													<div className="clearfix"></div>
													<div className="line1"></div>
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 2</b></span><br/>
															<div className="addroom2 block grey"><a href="#"
																									onClick="addroom3()"
																									className="grey">+
																Add room</a> | <a href="#" onClick="removeroom2()"
																				  className="orange"><img
																src="../../travel/images/delete.png" alt="delete"/></a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option>1</option>
																		<option>2</option>
																		<option selected>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
															<div className="w50percentlast">
																<div className="wh90percent textleft right">
																	<span
																		className="opensans size13"><b>Child</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>0</option>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className="room3 none">
													<div className="clearfix"></div>
													<div className="line1"></div>
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 3</b></span><br/>
															<div className="addroom3 block grey"><a href="#"
																									onClick="addroom3()"
																									className="grey">+
																Add room</a> | <a href="#" onClick="removeroom3()"
																				  className="orange"><img
																src="../../travel/images/delete.png" alt="delete"/></a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
															<div className="w50percentlast">
																<div className="wh90percent textleft right">
																	<span
																		className="opensans size13"><b>Child</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>0</option>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>


										</div>

										<div id="car2" className="tab-pane fade">

											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Picking up</b></span>
														<input type="text" className="form-control"
															   placeholder="Airport, address"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>Dropping off</b></span>
														<input type="text" className="form-control"
															   placeholder="Airport, address"/>
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Pick up date</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker5" placeholder="mm/dd/yyyy"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>Hour</b></span>
														<select className="form-control mySelectBoxClass">
															<option>12:00 AM</option>
															<option>12:30 AM</option>
															<option>01:00 AM</option>
															<option>01:30 AM</option>
															<option>02:00 AM</option>
															<option>02:30 AM</option>
															<option>03:00 AM</option>
															<option>03:30 AM</option>
															<option>04:00 AM</option>
															<option>04:30 AM</option>
															<option>05:00 AM</option>
															<option>05:30 AM</option>
															<option>06:00 AM</option>
															<option>06:30 AM</option>
															<option>07:00 AM</option>
															<option>07:30 AM</option>
															<option>08:00 AM</option>
															<option>08:30 AM</option>
															<option>09:00 AM</option>
															<option>09:30 AM</option>
															<option>10:00 AM</option>
															<option selected>10:30 AM</option>
															<option>11:00 AM</option>
															<option>11:30 AM</option>
															<option>12:00 PM</option>
															<option>12:30 PM</option>
															<option>01:00 PM</option>
															<option>01:30 PM</option>
															<option>02:00 PM</option>
															<option>02:30 PM</option>
															<option>03:00 PM</option>
															<option>03:30 PM</option>
															<option>04:00 PM</option>
															<option>04:30 PM</option>
															<option>05:00 PM</option>
															<option>05:30 PM</option>
															<option>06:00 PM</option>
															<option>06:30 PM</option>
															<option>07:00 PM</option>
															<option>07:30 PM</option>
															<option>08:00 PM</option>
															<option>08:30 PM</option>
															<option>09:00 PM</option>
															<option>09:30 PM</option>
															<option>10:00 PM</option>
															<option>10:30 PM</option>
															<option>11:00 PM</option>
															<option>11:30 PM</option>
														</select>
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Drop off date</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker6" placeholder="mm/dd/yyyy"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>Hour</b></span>
														<select className="form-control mySelectBoxClass">
															<option>12:00 AM</option>
															<option>12:30 AM</option>
															<option>01:00 AM</option>
															<option>01:30 AM</option>
															<option>02:00 AM</option>
															<option>02:30 AM</option>
															<option>03:00 AM</option>
															<option>03:30 AM</option>
															<option>04:00 AM</option>
															<option>04:30 AM</option>
															<option>05:00 AM</option>
															<option>05:30 AM</option>
															<option>06:00 AM</option>
															<option>06:30 AM</option>
															<option>07:00 AM</option>
															<option>07:30 AM</option>
															<option>08:00 AM</option>
															<option>08:30 AM</option>
															<option>09:00 AM</option>
															<option>09:30 AM</option>
															<option>10:00 AM</option>
															<option selected>10:30 AM</option>
															<option>11:00 AM</option>
															<option>11:30 AM</option>
															<option>12:00 PM</option>
															<option>12:30 PM</option>
															<option>01:00 PM</option>
															<option>01:30 PM</option>
															<option>02:00 PM</option>
															<option>02:30 PM</option>
															<option>03:00 PM</option>
															<option>03:30 PM</option>
															<option>04:00 PM</option>
															<option>04:30 PM</option>
															<option>05:00 PM</option>
															<option>05:30 PM</option>
															<option>06:00 PM</option>
															<option>06:30 PM</option>
															<option>07:00 PM</option>
															<option>07:30 PM</option>
															<option>08:00 PM</option>
															<option>08:30 PM</option>
															<option>09:00 PM</option>
															<option>09:30 PM</option>
															<option>10:00 PM</option>
															<option>10:30 PM</option>
															<option>11:00 PM</option>
															<option>11:30 PM</option>
														</select>
													</div>
												</div>
											</div>

										</div>

										<div id="vacations2" className="tab-pane fade">

											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Flying from</b></span>
														<input type="text" className="form-control"
															   placeholder="City or airport"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>To</b></span>
														<input type="text" className="form-control"
															   placeholder="City or airport"/>
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Check in date</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker7" placeholder="mm/dd/yyyy"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>Check in date</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker8" placeholder="mm/dd/yyyy"/>
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="room1">
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 1</b></span><br/>

															<div className="addroom1 block"><a href="#room2"
																							   onClick="addroom2()"
																							   className="grey">+ Add
																room</a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
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
																	<span
																		className="opensans size13"><b>Child</b></span>
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
													</div>
												</div>

												<div className="room2 none">
													<div className="clearfix"></div>
													<div className="line1"></div>
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 2</b></span><br/>
															<div className="addroom2 block grey"><a href="#"
																									onClick="addroom3()"
																									className="grey">+
																Add room</a> | <a href="#" onClick="removeroom2()"
																				  className="orange"><img
																src="../../travel/images/delete.png" alt="delete"/></a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option>1</option>
																		<option>2</option>
																		<option selected>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
															<div className="w50percentlast">
																<div className="wh90percent textleft right">
																	<span
																		className="opensans size13"><b>Child</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>0</option>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className="room3 none">
													<div className="clearfix"></div>
													<div className="line1"></div>
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 3</b></span><br/>
															<div className="addroom3 block grey"><a href="#"
																									onClick="addroom3()"
																									className="grey">+
																Add room</a> | <a href="#" onClick="removeroom3()"
																				  className="orange"><img
																src="../../travel/images/delete.png" alt="delete"/></a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
															<div className="w50percentlast">
																<div className="wh90percent textleft right">
																	<span
																		className="opensans size13"><b>Child</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>0</option>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

										</div>

										<div id="flighthotel2" className="tab-pane fade">
											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Flying from</b></span>
														<input type="text" className="form-control"
															   placeholder="City or airport"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>To</b></span>
														<input type="text" className="form-control"
															   placeholder="City or airport"/>
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Departing</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker10" placeholder="mm/dd/yyyy"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>Returning</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker9" placeholder="mm/dd/yyyy"/>
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="room1">
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 1</b></span><br/>

															<div className="addroom1 block"><a href="#room2"
																							   onClick="addroom2()"
																							   className="grey">+ Add
																room</a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
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
																	<span
																		className="opensans size13"><b>Child</b></span>
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
													</div>
												</div>

												<div className="room2 none">
													<div className="clearfix"></div>
													<div className="line1"></div>
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 2</b></span><br/>
															<div className="addroom2 block grey"><a href="#"
																									onClick="addroom3()"
																									className="grey">+
																Add room</a> | <a href="#" onClick="removeroom2()"
																				  className="orange"><img
																src="../../travel/images/delete.png" alt="delete"/></a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option>1</option>
																		<option>2</option>
																		<option selected>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
															<div className="w50percentlast">
																<div className="wh90percent textleft right">
																	<span
																		className="opensans size13"><b>Child</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>0</option>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className="room3 none">
													<div className="clearfix"></div>
													<div className="line1"></div>
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 3</b></span><br/>
															<div className="addroom3 block grey"><a href="#"
																									onClick="addroom3()"
																									className="grey">+
																Add room</a> | <a href="#" onClick="removeroom3()"
																				  className="orange"><img
																src="../../travel/images/delete.png" alt="delete"/></a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
															<div className="w50percentlast">
																<div className="wh90percent textleft right">
																	<span
																		className="opensans size13"><b>Child</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>0</option>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div id="cruise2" className="tab-pane fade">
											<div className="col-md-6">
												<span className="opensans size13"><b>Going to</b></span>
												<select className="form-control mySelectBoxClass">
													<option selected>Show all</option>
													<optgroup label="Most Popular">
														<option>Caribbean</option>
														<option>Bahamas</option>
														<option>Mexico</option>
														<option>Alaska</option>
														<option>Europe</option>
														<option>Bermuda</option>
														<option>Hawaii</option>
													</optgroup>
													<optgroup label="Other Destinations">
														<option>Africa</option>
														<option>Arctic/Antartctic</option>
														<option>Asia</option>
														<option>Australia/New Zealand</option>
														<option>Central America</option>
														<option>Cruise to Nowhere</option>
														<option>Galapagos</option>
														<option>Greenland/Iceland</option>
														<option>Middle East</option>
														<option>Pacific Coastal</option>
														<option>Panama Canal</option>
														<option>South Africa</option>
														<option>South Pacific</option>
														<option>Tahiti</option>
														<option>Transatlantic</option>
														<option>World Cruises</option>
													</optgroup>
												</select>

											</div>
											<div className="col-md-6">
												<span className="opensans size13"><b>Departure</b></span>
												<select className="form-control mySelectBoxClass">
													<option selected>Show all</option>
													<option>October 2013</option>
													<option>November 2013</option>
													<option>December 2013</option>
													<option>January 2014</option>
													<option>February 2014</option>
													<option>March 2014</option>
													<option>April 2014</option>
													<option>May 2014</option>
													<option>June 2014</option>
													<option>July 2014</option>
													<option>August 2014</option>
													<option>September 2014</option>
													<option>October 2014</option>
													<option>November 2014</option>
													<option>December 2014</option>
												</select>
											</div>
										</div>

										<div id="hotelcar2" className="tab-pane fade">
											<div className="col-md-4 pt-6">
												<span className="opensans size18">Where do you want to go?</span>
												<input type="text" className="form-control" placeholder="Greece"/>
											</div>

											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Check in date</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker11" placeholder="mm/dd/yyyy"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>Check in date</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker12" placeholder="mm/dd/yyyy"/>
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="room1">
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 1</b></span><br/>

															<div className="addroom1 block"><a href="#room2"
																							   onClick="addroom2()"
																							   className="grey">+ Add
																room</a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
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
																	<span
																		className="opensans size13"><b>Child</b></span>
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
													</div>
												</div>

												<div className="room2 none">
													<div className="clearfix"></div>
													<div className="line1"></div>
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 2</b></span><br/>
															<div className="addroom2 block grey"><a href="#"
																									onClick="addroom3()"
																									className="grey">+
																Add room</a> | <a href="#" onClick="removeroom2()"
																				  className="orange"><img
																src="../../travel/images/delete.png" alt="delete"/></a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option>1</option>
																		<option>2</option>
																		<option selected>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
															<div className="w50percentlast">
																<div className="wh90percent textleft right">
																	<span
																		className="opensans size13"><b>Child</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>0</option>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className="room3 none">
													<div className="clearfix"></div>
													<div className="line1"></div>
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 3</b></span><br/>
															<div className="addroom3 block grey"><a href="#"
																									onClick="addroom3()"
																									className="grey">+
																Add room</a> | <a href="#" onClick="removeroom3()"
																				  className="orange"><img
																src="../../travel/images/delete.png" alt="delete"/></a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
															<div className="w50percentlast">
																<div className="wh90percent textleft right">
																	<span
																		className="opensans size13"><b>Child</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>0</option>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="clearfix"></div>
											<div className="center size10 ca02 ">! An economy car will be added to your
												search. (You may change your car options later.)
											</div>
										</div>

										<div id="flighthotelcar2" className="tab-pane fade">
											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Flying from</b></span>
														<input type="text" className="form-control"
															   placeholder="City or airport"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>To</b></span>
														<input type="text" className="form-control"
															   placeholder="City or airport"/>
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Departing</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker13" placeholder="mm/dd/yyyy"/>
													</div>
												</div>

												<div className="w50percentlast">
													<div className="wh90percent textleft right">
														<span className="opensans size13"><b>Returning</b></span>
														<input type="text" className="form-control mySelectCalendar"
															   id="datepicker14" placeholder="mm/dd/yyyy"/>
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="room1">
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 1</b></span><br/>

															<div className="addroom1 block"><a href="#room2"
																							   onClick="addroom2()"
																							   className="grey">+ Add
																room</a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
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
																	<span
																		className="opensans size13"><b>Child</b></span>
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
													</div>
												</div>

												<div className="room2 none">
													<div className="clearfix"></div>
													<div className="line1"></div>
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 2</b></span><br/>
															<div className="addroom2 block grey"><a href="#"
																									onClick="addroom3()"
																									className="grey">+
																Add room</a> | <a href="#" onClick="removeroom2()"
																				  className="orange"><img
																src="../../travel/images/delete.png" alt="delete"/></a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option>1</option>
																		<option>2</option>
																		<option selected>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
															<div className="w50percentlast">
																<div className="wh90percent textleft right">
																	<span
																		className="opensans size13"><b>Child</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>0</option>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className="room3 none">
													<div className="clearfix"></div>
													<div className="line1"></div>
													<div className="w50percent">
														<div className="wh90percent textleft">
															<span className="opensans size13"><b>ROOM 3</b></span><br/>
															<div className="addroom3 block grey"><a href="#"
																									onClick="addroom3()"
																									className="grey">+
																Add room</a> | <a href="#" onClick="removeroom3()"
																				  className="orange"><img
																src="../../travel/images/delete.png" alt="delete"/></a></div>
														</div>
													</div>

													<div className="w50percentlast">
														<div className="wh90percent textleft right">
															<div className="w50percent">
																<div className="wh90percent textleft left">
																	<span
																		className="opensans size13"><b>Adult</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
															<div className="w50percentlast">
																<div className="wh90percent textleft right">
																	<span
																		className="opensans size13"><b>Child</b></span>
																	<select className="form-control mySelectBoxClass">
																		<option selected>0</option>
																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="clearfix"></div>
											<div className="center size10 ca03">! An economy car will be added to your
												search. (You may change your car options later.)
											</div>
										</div>
									</div>

									<div className="searchbg2">
										<div className="left ca01"><a href="#">Advanced +</a></div>
										<form action="http://titanicthemes.com/travel/blue/list4.html">
											<button type="submit" className="btn-search right mr30">Search</button>
										</form>
									</div>

								</div>
							</div>

						</div>
					</div>


					<div className="lastminute2 lcfix">
						<div className="container lmc">
							<img src="../../travel/images/rating-4.png" alt=""/><br/>
							LAST MINUTE: <b>Barcelona</b> - 2 nights - Flight+4* Hotel, Dep 27h Aug from
							$209/person<br/>
							<form action="http://titanicthemes.com/travel/blue/list4.html">
								<button className="btn iosbtn" type="submit">Read more</button>
							</form>
						</div>
					</div>

                    <div className="footerbgblack">
                        <div className="container">
                            <div className="col-md-3">
                                <span className="ftitleblack">Let's socialize</span>
                                <div className="scont">
                                    <a href="#" className="social1b"><img src="../../travel/images/icon-facebook.png" alt=""/></a>
                                    <a href="#" className="social2b"><img src="../../travel/images/icon-twitter.png" alt=""/></a>
                                    <a href="#" className="social3b"><img src="../../travel/images/icon-gplus.png" alt=""/></a>
                                    <a href="#" className="social4b"><img src="../../travel/images/icon-youtube.png" alt=""/></a>
                                    <br/><br/><br/>
                                    <a href="#"><img src="../../travel/images/logosmal2.png" alt=""/></a><br/>
                                    <span className="grey2">&copy; 2013  |  <a href="#">Privacy Policy</a><br/>
					                All Rights Reserved </span>
                                    <br/><br/>

                                </div>
                            </div>

                            <div className="col-md-3">
                                <span className="ftitleblack">Travel Specialists</span>
                                <br/><br/>
                                <ul className="footerlistblack">
                                    <li><a href="#">Golf Vacations</a></li>
                                    <li><a href="#">Ski & Snowboarding</a></li>
                                    <li><a href="#">Disney Parks Vacations</a></li>
                                    <li><a href="#">Disneyland Vacations</a></li>
                                    <li><a href="#">Disney World Vacations</a></li>
                                    <li><a href="#">Vacations As Advertised</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <span className="ftitleblack">Travel Specialists</span>
                                <br/><br/>
                                <ul className="footerlistblack">
                                    <li><a href="#">Weddings</a></li>
                                    <li><a href="#">Accessible Travel</a></li>
                                    <li><a href="#">Disney Parks</a></li>
                                    <li><a href="#">Cruises</a></li>
                                    <li><a href="#">Round the World</a></li>
                                    <li><a href="#">First Class Flights</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3 grey">
                                <span className="ftitleblack">Newsletter</span>
                                <div className="relative">
                                    <input type="email" className="form-control fccustom2black" id="exampleInputEmail1"
                                           placeholder="Enter email"/>
                                    <button type="submit" className="btn btn-default btncustom">Submit<img
                                        src="#!" alt=""/></button>
                                </div>
                                <br/><br/>
                                <span className="ftitleblack">Customer support</span><br/>
                                <span className="pnr">1-866-599-6674</span><br/>
                                <span className="grey2">office@travel.com</span>
                            </div>


                        </div>
                    </div>
                    <div className="footerbg3black">
                        <div className="container center grey">
                            <a href="#">Home</a> |
                            <a href="#">About</a> |
                            <a href="#">Last minute</a> |
                            <a href="#">Early booking</a> |
                            <a href="#">Special offers</a> |
                            <a href="#">Blog</a> |
                            <a href="#">Contact</a>
                            <a href="#top" className="gotop scroll"><img src="../../travel/images/spacer.png" alt=""/></a>
                        </div>
                    </div>
				</div>
			</Fragment>
        )
    }
}

export default Landing
