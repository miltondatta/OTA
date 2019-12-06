import React, {Fragment} from 'react';
import spinner from '../../assets/img/3827ab69c03f02d43dcd7b4c659464a7.gif';


const Spinner = () => (
    <Fragment>
        <img
            src={spinner}
            style={{width: '300px', margin: 'auto', display: 'block'}} alt="Loading..."/>
    </Fragment>
);

export default Spinner;