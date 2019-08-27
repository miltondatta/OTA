import React, { Component, Fragment } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';

import slider1 from '../../assets/img/slider1.jpg';
import slider2 from '../../assets/img/slider2.jpg';
import slider3 from '../../assets/img/slider4.jpg';


const sliderContent = [
	{
		title: 'Travel the World',
		description: 'Life is short so enjoy by travelling the whole world!',
		button: 'Read More',
		image: slider1,
		user: '',
		userProfile: ''
	},
	{
		title: 'Travel Like a Brid',
		description: 'You can fly, like bird fly!',
		button: 'Discover',
		image: slider2,
		user: '',
		userProfile: ''
	},
	{
		title: 'Travel is Beauty',
		description: 'Enjoy the beauty of world in a short tip',
		button: 'Buy now',
		image: slider3,
		user: '',
		userProfile: ''
	}
];

class Landing extends Component {
	render() {
		return (
			<Fragment>
				<div className="container breadcrub"></div>
				<Slider>
					{
						sliderContent.map((article, index) => <div key={index}
							className="slider-content"
							style={{ background: `url('${article.image}') no-repeat center center` }}  >

							<div className="inner">
								<h2>{article.title}  </h2>
								<div>{article.description} </div>
							</div>
						</div>
						)}
				</Slider>

				<div class="container mt-130 z-index100">
					<div class="row">
						<div class="col-md-12">
							<div class="bs-example bs-example-tabs cstyle04">
								<ul class="nav nav-tabs" id="myTab">
									<li onclick="mySelectUpdate()" class="active"><a data-toggle="tab" href="#air2"><span class="flight"></span><span class="hidetext">Air</span>&nbsp;</a></li>
								</ul>
								<div class="tab-content2" id="myTabContent">
									<div id="air2" class="tab-pane fade active in">
										<div class="col-md-4">
											<div class="w50percent">
												<div class="wh90percent textleft">
													<span class="opensans size13"><b>Flying from</b></span>
													<input type="text" class="form-control" placeholder="City or airport" />
												</div>
											</div>
											<div class="w50percentlast">
												<div class="wh90percent textleft right">
													<span class="opensans size13"><b>To</b></span>
													<input type="text" class="form-control" placeholder="City or airport" />
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="w50percent">
												<div class="wh90percent textleft">
													<span class="opensans size13"><b>Departing</b></span>
													<input type="text" class="form-control mySelectCalendar" id="datepicker3" placeholder="mm/dd/yyyy" />
												</div>
											</div>
											<div class="w50percentlast">
												<div class="wh90percent textleft right">
													<span class="opensans size13"><b>Returning</b></span>
													<input type="text" class="form-control mySelectCalendar" id="datepicker4" placeholder="mm/dd/yyyy" />
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="room1" >
												<div class="w50percent">
													<div class="wh90percent textleft">
														<span class="opensans size13"><b>Adult</b></span>
														<select class="form-control mySelectBoxClass">
															<option>1</option>
															<option selected>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
														</select>
													</div>
												</div>
												<div class="w50percentlast">
													<div class="wh90percent textleft right">
														<span class="opensans size13"><b>Child</b></span>
														<select class="form-control mySelectBoxClass">
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
								</div>
								<div class="searchbg2">
									<div class="left ca01"><a href="#">Advanced +</a></div>
									<form action="#">
										<button type="submit" class="btn-search right mr30">Search</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Landing
