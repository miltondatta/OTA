import React from 'react';
import {Link} from 'react-router-dom';

// Font Awesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

// Css
import '../../assets/css/footer.css';

// Image
import facebook from '../../assets/img/icon-facebook.png';
import twitter from '../../assets/img/icon-twitter.png';
import google_plus from '../../assets/img/icon-gplus.png';
import youtube from '../../assets/img/icon-youtube.png';

export default function CenteredGrid() {

    return (
        <div className={'container-fluid'}>
            <div className="row">
                <div className="col-lg-3 col-md-6 com-sm-6 col-12">

                </div>

                <div className="col-lg-3 col-md-6 com-sm-6 col-12">

                </div>

                <div className="col-lg-3 col-md-6 com-sm-6 col-12">

                </div>

                <div className="col-lg-3 col-md-6 com-sm-6 col-12">

                </div>
            </div>
        </div>
    );
}
