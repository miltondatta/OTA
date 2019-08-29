import React, {Component} from 'react';
import Slider from 'react-animated-slider';

// css
import 'react-animated-slider/build/horizontal.css';
import '../../assets/css/slider.css';

// Js
import {sliderContent} from "../../assets/js/landing";

class SliderComponent extends Component {
    render() {
        return (
            <Slider>
                {sliderContent.map((article, index) =>
                    <div key={index} className="slider-content" style={{background: `url('${article.image}') no-repeat center center`}}>
                        <div className="inner">
                            <h2>{article.title}  </h2>
                            <div>{article.description} </div>
                            <button className="slider-button">{article.button}</button>
                        </div>
                    </div>)}
            </Slider>
        )
    }

}

export default SliderComponent;