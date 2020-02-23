import React, {Fragment, useEffect, useState} from "react";
import {Button, ButtonToolbar, Form}          from "react-bootstrap";
import axios                                  from "axios";
import {withRouter}                           from 'react-router-dom';

// Css
import '../../assets/css/airline.css';

import Alerts          from "../alert/alerts";
import {base_url}      from "../../utils/Urls";
import {validateInput} from "../../utils/funcitons";

const AirportAdd = ({history, match}) => {
    const [airportIndex, setAirportIndex] = useState([]);
    const [countryList, setcountryList]   = useState([]);
    const [addMessage, setAddMessage]     = useState({
                                                         show   : false,
                                                         variant: '',
                                                         heading: '',
                                                         message: '',
                                                         disable: false
                                                     });
    const [formData, setFormData]         = useState({
                                                         ident            : '',
                                                         type             : '',
                                                         name             : '',
                                                         latitude_deg     : '',
                                                         longitude_deg    : '',
                                                         elevation_ft     : '',
                                                         continent        : '',
                                                         iso_country      : '',
                                                         iso_region       : '',
                                                         municipality     : '',
                                                         scheduled_service: '',
                                                         gps_code         : '',
                                                         iata_code        : '',
                                                         local_code       : '',
                                                         home_link        : '',
                                                         wikipedia_link   : '',
                                                         keywords         : '',
                                                         score            : '',
                                                         last_updated     : '',
                                                     });
    
    useEffect(() => {
        fetchCountryList();
    }, []);
    
    const fetchCountryList = async () => {
        const res = await axios.get(base_url + `api/country/all`);
        setcountryList(res.data);
    };
    
    const onChange = e => {
        let valid = validateInput(e);
        if (valid || valid === '') {
            setFormData({...formData, [e.target.name]: valid});
        }
    };
    
    const onSubmit = e => {
        e.preventDefault();
        const data = {
            ident            : formData.ident,
            type             : formData.type,
            name             : formData.name,
            latitude_deg     : formData.latitude_deg,
            longitude_deg    : formData.longitude_deg,
            elevation_ft     : formData.elevation_ft,
            continent        : formData.continent,
            iso_country      : formData.iso_country,
            iso_region       : formData.iso_region,
            municipality     : formData.municipality,
            scheduled_service: formData.scheduled_service,
            gps_code         : formData.gps_code,
            iata_code        : formData.iata_code,
            local_code       : formData.local_code,
            home_link        : formData.home_link,
            wikipedia_link   : formData.wikipedia_link,
            keywords         : formData.keywords,
            score            : formData.score,
        };
        
        const res = addNewAirport(data);
    };
    
    const addNewAirport = async (data) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const res = await axios.post(`/api/airport/store/`, data, config);
            
            localStorage.setItem('airport_add_message', res.data.msg);
            
            history.push('/airports');
            return res.data;
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'Airport Add Error!',
                              message: err.response.data.msg,
                          });
            return err.response.data;
        }
    };
    
    const resetFormData = e => {
        e.preventDefault();
        setFormData({
                        ident            : '',
                        type             : '',
                        name             : '',
                        latitude_deg     : '',
                        longitude_deg    : '',
                        elevation_ft     : '',
                        continent        : '',
                        iso_country      : '',
                        iso_region       : '',
                        municipality     : '',
                        scheduled_service: '',
                        gps_code         : '',
                        iata_code        : '',
                        local_code       : '',
                        home_link        : '',
                        wikipedia_link   : '',
                        keywords         : '',
                        score            : '',
                        last_updated     : '',
                    });
    };
    
    const {
              ident, type, name, latitude_deg, longitude_deg, elevation_ft, continent, iso_country, iso_region, municipality,
              scheduled_service, gps_code, iata_code, local_code, home_link, wikipedia_link, keywords, score, last_updated,
          } = formData;
    
    const {show, variant, heading, message, disable} = addMessage;
    
    return <Fragment>
        <div className="airline-area">
            <div className="container-fluid airline-area-container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <Alerts
                            show={show}
                            variant={variant}
                            heading={heading}
                            message={message}
                        />
                        <div className="card bg-light">
                            <div className="card-header">
                                Add Airport
                            </div>
                            <div className="card-body">
                                <Form onSubmit={e => onSubmit(e)}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group controlId="formIdent">
                                                <Form.Label>Ident</Form.Label>
                                                <Form.Control type="text" name="ident" value={ident}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter ident" required/>
                                            </Form.Group>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <Form.Group controlId="formType">
                                                <Form.Label>Type</Form.Label>
                                                <Form.Control type="text" name="type" value={type}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter type" required/>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group controlId="formName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" name="name" value={name}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter name"/>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group controlId="formElevation_ft">
                                                <Form.Label>Elevation Ft</Form.Label>
                                                <Form.Control type="text" name="elevation_ft" value={elevation_ft}
                                                              onChange={e => onChange(e)} data-number={'integer_only'}
                                                              placeholder="Enter elevation Ft" required/>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group controlId="formLatitude_deg">
                                                <Form.Label>Latitude Deg</Form.Label>
                                                <Form.Control type="text" name="latitude_deg" value={latitude_deg}
                                                              onChange={e => onChange(e)} data-number={'float_only'}
                                                              placeholder="Enter latitude Deg" required/>
                                            </Form.Group>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <Form.Group controlId="formLongitude_deg">
                                                <Form.Label>Longitude Deg</Form.Label>
                                                <Form.Control type="text" name="longitude_deg" value={longitude_deg}
                                                              onChange={e => onChange(e)} data-number={'float_only'}
                                                              placeholder="Enter longitude Deg"/>
                                            </Form.Group>
                                        </div>
                                    
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group controlId="formContinent">
                                                <Form.Label>Continent</Form.Label>
                                                <Form.Control type="text" name="continent" value={continent}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter Continent"/>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group controlId="formIso_country">
                                                <Form.Label>ISO Country</Form.Label>
                                                <select className="form-control" name="iso_country" value={iso_country}
                                                        onChange={e => onChange(e)}>
                                                    {countryList.length > 0 ?
                                                     <Fragment>
                                                         <option>Select Country</option>
                                                         {countryList.map((value, key) => (
                                                             <option value={value.iso3166_1_alpha_2}
                                                                     key={key}>{value.country_name}</option>
                                                         ))}
                                                     </Fragment> :
                                                     <option>Select Country</option>}
                                                </select>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group controlId="formIso_region">
                                                <Form.Label>ISO Region</Form.Label>
                                                <Form.Control type="text" name="iso_region" value={iso_region}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter ISO Region"/>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group controlId="formMunicipality">
                                                <Form.Label>Municipality</Form.Label>
                                                <Form.Control type="text" name="municipality" value={municipality}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter municipality" required/>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group controlId="formScheduled_service">
                                                <Form.Label>Scheduled Service</Form.Label>
                                                <Form.Control type="text" name="scheduled_service" value={scheduled_service}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter Scheduled Service"/>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group controlId="formGps_code">
                                                <Form.Label>GPS Code</Form.Label>
                                                <Form.Control type="text" name="gps_code" value={gps_code}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter Gps Code" required/>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group controlId="formIata_code">
                                                <Form.Label>IATA Code</Form.Label>
                                                <Form.Control type="text" name="iata_code" value={iata_code}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter IATA Code"/>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group controlId="formLocal_code">
                                                <Form.Label>Local Code</Form.Label>
                                                <Form.Control type="text" name="local_code" value={local_code}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter Local Code" required/>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group controlId="formHome_link">
                                                <Form.Label>Home Link</Form.Label>
                                                <Form.Control type="text" name="home_link" value={home_link}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter Home Link"/>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group controlId="formWikipedia_link">
                                                <Form.Label>Wikipedia Link</Form.Label>
                                                <Form.Control type="text" name="wikipedia_link" value={wikipedia_link}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter Wikipedia Link" required/>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group controlId="formKeywords">
                                                <Form.Label>Keywords</Form.Label>
                                                <Form.Control type="text" name="keywords" value={keywords}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter Keywords"/>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group controlId="formScore">
                                                <Form.Label>Score</Form.Label>
                                                <Form.Control type="text" name="score" value={score}
                                                              onChange={e => onChange(e)} data-number={'integer_only'}
                                                              placeholder="Enter Score" required/>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex justify-content-center">
                                        <Button variant="outline-success" type="submit" className="" disabled={disable}>Add
                                            Now</Button>
                                        <Button variant="outline-warning" type="reset" className="ml-2"
                                                onClick={e => resetFormData(e)}>Reset</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>;
};

export default withRouter(AirportAdd);