import React, { Component, Fragment } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';

import slider1 from '../../assets/img/slider1.jpg';
import slider2 from '../../assets/img/slider2.jpg';
import slider3 from '../../assets/img/slider3.jpg';


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
				<div className="container mt-130 z-index100">
					<div className="row">
						<div className="col-md-12">
							<div className="bs-example bs-example-tabs cstyle04">
								<ul className="nav nav-tabs" id="myTab">
									<li onclick="mySelectUpdate()" className="active"><Link data-toggle="tab" to="#air2"><span className="flight"></span><span className="hidetext">Air</span>&nbsp;</Link></li>
								</ul>
								<div className="tab-content2" id="myTabContent">
									<div id="air2" className="tab-pane fade active in">
										<div className="col-md-4">
											<div className="w50percent">
												<div className="wh90percent textleft">
													<span className="opensans size13"><b>Flying from</b></span>
													<input type="text" className="form-control" placeholder="City or airport" />
												</div>
											</div>
											<div className="w50percentlast">
												<div className="wh90percent textleft right">
													<span className="opensans size13"><b>To</b></span>
													<input type="text" className="form-control" placeholder="City or airport" />
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="w50percent">
												<div className="wh90percent textleft">
													<span className="opensans size13"><b>Departing</b></span>
													<input type="text" className="form-control mySelectCalendar" id="datepicker3" placeholder="mm/dd/yyyy" />
												</div>
											</div>
											<div className="w50percentlast">
												<div className="wh90percent textleft right">
													<span className="opensans size13"><b>Returning</b></span>
													<input type="text" className="form-control mySelectCalendar" id="datepicker4" placeholder="mm/dd/yyyy" />
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="room1" >
												<div className="w50percent">
													<div className="wh90percent textleft">
														<span className="opensans size13"><b>Adult</b></span>
														<select className="form-control mySelectBoxclassName">
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
														<select className="form-control mySelectBoxclassName">
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
								<div className="searchbg2">
									<div className="left ca01"><Link to="#">Advanced +</Link></div>
									<form action="#">
										<button type="submit" className="btn-search right mr30">Search</button>
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
