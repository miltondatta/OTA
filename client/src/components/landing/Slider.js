import React, {Component} from 'react';
import Slider from 'react-animated-slider';

// css
import 'react-animated-slider/build/horizontal.css';
import "../../assets/css/slider.css";
import "../../assets/css/slider-animations.css";

// Js
import {sliderContent} from "../../assets/js/landing";

class SliderComponent extends Component {
    render() {
        return (
            <Slider autoplay={3000}>
                {sliderContent.map((article, index) =>
                    <div key={index} className="slider-content"
                         style={{background: `url('${article.image}') no-repeat center center`}}>
                        <div className="inner">
                            <h1>{article.title}</h1>
                            <p>{article.description}</p>
                            <button>{article.button}</button>
                        </div>
                    </div>)}
            </Slider>
        )
    }

}

export default SliderComponent;