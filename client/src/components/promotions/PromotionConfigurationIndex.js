import React, {Fragment, useEffect, useState} from 'react';
import {Link}                                 from "react-router-dom";
import {Badge, Modal, Button, Form}           from "react-bootstrap";
import {faEdit, faTrashAlt}                   from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}                      from "@fortawesome/react-fontawesome";
import axios                                  from 'axios';
import moment                                 from 'moment';
import DatePicker                             from 'react-datepicker2';
// Import Css
import '../../assets/css/airline.css';
import Alerts                                 from "../alert/alerts";
import {base_url, login}                      from "../../utils/Urls";
import {validateInput}                        from "../../utils/funcitons";
import {func}                                 from "prop-types";
import TimePicker                             from 'react-time-picker';

const PromotionConfigurationIndex = () => {
    const [data_list, set_data_list] = useState([]);
    
    const [deleteInfo, setDeleteInfo] = useState({id: '', name: ''});
    
    const [addMessage, setAddMessage] = useState({
                                                     show   : false,
                                                     variant: '',
                                                     heading: '',
                                                     message: '',
                                                     disable: false
                                                 });
    
    const [apiSources, setapiSources] = useState([]);
    
    const {show, variant, heading, message} = addMessage;
    
    const [modalShow, setShow]                = useState(false);
    const [saveButton, setSaveButton]         = useState(true);
    const [updateButton, setUpdateButton]     = useState(false);
    const [searchButton, setSearchButton]     = useState(true);
    const [countryList, setcountryList]       = useState([]);
    const [fromCityList, setfromCityList]     = useState([]);
    const [toCityList, settoCityList]         = useState([]);
    const [platingCarrier, setplatingCarrier] = useState([]);
    
    const handleClose = () => setShow(false);
    const handleShow  = () => setShow(true);
    
    const fetchData = async () => {
        const result = await axios.get(`/api/configure_promotion/all`);
        set_data_list(result.data);
    };
    
    const fetchApiSourcesList = async () => {
        const res = await axios.get(base_url + `api/api_sources/all`);
        setapiSources(res.data);
    };
    
    const fetchCountryList = async () => {
        const res = await axios.get(base_url + `api/country/all`);
        setcountryList(res.data);
    };
    
    const fetchPlatingCarrier = async () => {
        const res = await axios.get(base_url + `api/airline/getFilteredAirlines`);
        setplatingCarrier(res.data);
    };
    
    useEffect(() => {
        fetchData();
        fetchApiSourcesList();
        fetchCountryList();
        fetchPlatingCarrier();
    }, []);
    
    const [formData, setFormData] = useState({
                                                 id               : '',
                                                 promotion_name   : '',
                                                 promotion_code   : '',
                                                 from_city_country: '',
                                                 from_city        : '',
                                                 to_city_country  : '',
                                                 to_city          : '',
                                                 flight_type      : '',
                                                 plating_carrier  : '',
                                                 issue_date_from  : '',
                                                 issue_date_to    : '',
                                                 travel_date_from : '',
                                                 travel_date_to   : '',
                                                 time_from        : '',
                                                 time_to          : '',
                                                 travel_class_id  : '',
                                                 booking_class    : '',
                                                 user_group_id    : '',
                                                 user_id          : '',
                                                 api_source_id    : '',
                                                 promo_type       : '',
                                                 value_type       : '',
                                                 value            : '',
                                                 max_amount       : '',
                                                 status_id        : '',
                                             });
    
    const {
              id, promotion_name, promotion_code, from_city_country, from_city, to_city_country, to_city, flight_type, plating_carrier, issue_date_from, issue_date_to,
              travel_date_from, travel_date_to, time_from, time_to, travel_class_id, booking_class, user_group_id, user_id, api_source_id,
              promo_type, value_type, value, max_amount, status_id,
          } = formData;
    
    const booking_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                          "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    const onChange = e => {
        let valid = validateInput(e);
        if (valid || valid === '') {
            setFormData({...formData, [e.target.name]: valid});
        }
    };
    
    const loadFromCity = lfc => {
        getFilteredFromCityData(lfc);
    };
    
    const getFilteredFromCityData = async (lfc) => {
        setFormData({...formData, [lfc.target.name]: lfc.target.value});
        const filter_data = {iso_country: lfc.target.value};
        const result      = await axios.post(base_url + `api/airport/getAirportByCountry`, filter_data);
        setfromCityList(result.data);
    };
    
    const loadToCity = tfc => {
        getFilteredToCityData(tfc);
    };
    
    const getFilteredToCityData = async (tfc) => {
        setFormData({...formData, [tfc.target.name]: tfc.target.value});
        const filter_data = {iso_country: tfc.target.value};
        const result      = await axios.post(base_url + `api/airport/getAirportByCountry`, filter_data);
        settoCityList(result.data);
        
    };
    
    const resetFormData = e => {
        setFormData({
                        id               : '',
                        promotion_name   : '',
                        promotion_code   : '',
                        from_city_country: '',
                        from_city        : '',
                        to_city_country  : '',
                        to_city          : '',
                        flight_type      : '',
                        plating_carrier  : '',
                        issue_date_from  : '',
                        issue_date_to    : '',
                        travel_date_from : '',
                        travel_date_to   : '',
                        time_from        : '',
                        time_to          : '',
                        travel_class_id  : '',
                        booking_class    : '',
                        user_group_id    : '',
                        user_id          : '',
                        api_source_id    : '',
                        promo_type       : '',
                        value_type       : '',
                        value            : '',
                        max_amount       : '',
                        status_id        : '',
                    });
    };
    
    const deleteFixedValue = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const data = {
                id: deleteInfo.id
            };
            
            const result = await axios.post(`api/configure_promotion/delete/`, data, config);
            
            setAddMessage({
                              show   : true,
                              variant: 'success',
                              heading: 'Data Delete Message!',
                              message: `Promotion condition, ${deleteInfo.name} has been deleted.`
                          });
            
            fetchData();
            
            return result.data;
            
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'Data Delete Error!',
                              message: 'Promotion condition is not deleted',
                          });
        }
    };
    
    function setDataForUpdate(id) {
        data_list.find(item => {
            if (item.id == id) {
                setFormData({
                                id               : item.id,
                                promotion_name   : item.promotion_name,
                                promotion_code   : item.promotion_code,
                                from_city_country: item.from_city_country,
                                from_city        : item.from_city,
                                to_city          : item.to_city,
                                to_city_country  : item.to_city_country,
                                flight_type      : item.flight_type,
                                plating_carrier  : item.plating_carrier,
                                issue_date_from  : item.issue_date_from,
                                issue_date_to    : item.issue_date_to,
                                travel_date_from : item.travel_date_from,
                                travel_date_to   : item.travel_date_to,
                                time_from        : item.time_from,
                                time_to          : item.time_to,
                                travel_class_id  : item.travel_class_id,
                                booking_class    : item.booking_class,
                                user_group_id    : item.user_group_id,
                                user_id          : item.user_id,
                                api_source_id    : item.api_source_id,
                                promo_type       : item.promo_type,
                                value_type       : item.value_type,
                                value            : item.value,
                                max_amount       : item.max_amount,
                                status_id        : item.status_id,
                            });
                setUpdateButton(true);
                setSaveButton(false);
            }
        });
    }
    
    const saveFormData = async (data) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            console.log(formData)
            let fxd_name = formData.promotion_name;
            const res    = await axios.post(`/api/configure_promotion/store`, formData, config);
            
            setAddMessage({
                              show    : true,
                              variant : 'success',
                              headding: 'Data Added!',
                              message : `Promotion Name, ${fxd_name} has been Added!`
                          });
            
            resetFormData();
            fetchData();
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'Add Error!',
                              message: "Error... Please Try again. ",
                          });
        }
        
    };
    
    const searchFormData = async (data) => {
        /*try {
         const config = {
         headers: {
         'Content-Type': 'application/json'
         }
         };
         let fxd_name = formData.api_name;
         const res    = await axios.post(`/api/configure_promotion/store/`, formData, config);
         
         setAddMessage({
         show    : true,
         variant : 'success',
         headding: 'Data Add!',
         message : `Api Source, ${fxd_name} has been Added!`
         });
         
         resetFormData();
         fetchData();
         } catch (err) {
         setAddMessage({
         show   : true,
         variant: 'danger',
         heading: 'Add Error!',
         message: "Error... Please Try again. ",
         });
         }*/
        
    };
    
    const updateFormData = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            let fxd_name = formData.api_name;
            const res    = await axios.post(base_url + `api/configure_promotion/update/`, formData, config);
            
            setAddMessage({
                              show   : true,
                              variant: 'success',
                              heading: 'Data Update Message!',
                              message: `Api Source, ${fxd_name} has been Updated Successfully`
                          });
            fetchData();
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'Data Update Error!',
                              message: 'Api Source is not Updated',
                          });
        }
    };
    
    return <Fragment>
        <div className="user-area">
            <div className="container-fluid fixedValues-area-container">
                <div className="col-md-8 mx-auto">
                    <Alerts
                        show={show}
                        variant={variant}
                        heading={heading}
                        message={message}
                    />
                </div>
                
                <div className="text-center pb-3">
                    <h2>Promotion Configuration</h2>
                </div>
                
                <div className="row pb-3 custom-border-bottom">
                    <div className="col-md-12 col-sm-12 col-12 mx-auto  ">
                        
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Group controlId="formPromotion_name">
                                    <Form.Label>Promotion Name</Form.Label>
                                    <Form.Control type="text" name="promotion_name" value={promotion_name}
                                                  onChange={e => onChange(e)}
                                                  placeholder="Enter Promotion Name" required/>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group controlId="formPromotion_code">
                                    <Form.Label>Promotion Code</Form.Label>
                                    <Form.Control type="text" name="promotion_code" value={promotion_code}
                                                  onChange={e => onChange(e)}
                                                  placeholder="Enter Promotion Code" required/>
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-3">
                                <Form.Group controlId="from_city_country">
                                    <Form.Label>From City Country</Form.Label>
                                    
                                    <select className="form-control" name="from_city_country" value={from_city_country}
                                            onChange={lfc => loadFromCity(lfc)}>
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
                            <div className="col-md-3">
                                <Form.Group controlId="formFrom_city">
                                    <Form.Label>From City</Form.Label>
                                    
                                    <select className="form-control" name="from_city" value={from_city}
                                            onChange={e => onChange(e)}>
                                        {fromCityList.length > 0 ?
                                         <Fragment>
                                             <option>Select From City</option>
                                             {fromCityList.map((value, key) => (
                                                 <option value={value.iata_code}
                                                         key={key}>{value.municipality}</option>
                                             ))}
                                         </Fragment> :
                                         <option>Select From City</option>}
                                    </select>
                                
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="to_city">
                                    <Form.Label>To City Country</Form.Label>
                                    
                                    <select className="form-control" name="to_city_country" value={to_city_country}
                                            onChange={tfc => loadToCity(tfc)}>
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
                            <div className="col-md-3">
                                <Form.Group controlId="formTo_city">
                                    <Form.Label>To City</Form.Label>
                                    
                                    <select className="form-control" name="to_city" value={to_city}
                                            onChange={e => onChange(e)}>
                                        {toCityList.length > 0 ?
                                         <Fragment>
                                             <option>Select To City</option>
                                             {toCityList.map((value, key) => (
                                                 <option value={value.iata_code}
                                                         key={key}>{value.municipality}</option>
                                             ))}
                                         </Fragment> :
                                         <option>Select To City</option>}
                                    </select>
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-3">
                                <Form.Group controlId="flight_type">
                                    <Form.Label>Flight Type</Form.Label>
                                    <select className="form-control" name="flight_type" value={flight_type}
                                            onChange={e => onChange(e)}>
                                        <Fragment>
                                            <option>Select Flight Type</option>
                                            <option value='doms' key='doms'>Domestic</option>
                                            <option value='intn' key='intn'>International</option>
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="plating_carrier">
                                    <Form.Label>Plating Carrier</Form.Label>
                                    <select className="form-control" name="plating_carrier" value={plating_carrier}
                                            onChange={e => onChange(e)}>
                                        {platingCarrier.length > 0 ?
                                         <Fragment>
                                             <option>Select Plating Carrier</option>
                                             {platingCarrier.map((value, key) => (
                                                 <option value={value.id}
                                                         key={key}>{value.name}</option>
                                             ))}
                                         </Fragment> :
                                         <option>Select Plating Carrier</option>}
                                    </select>
                                    
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-3">
                                <Form.Group controlId="issue_date_from">
                                    <Form.Label>Issue Date From</Form.Label>
                                    <DatePicker timePicker={false}
                                                placeholder="e.g. 2020/03/03/"
                                                name="issue_date_from"
                                                id="issue_date_from"
                                                className="form-control"
                                                inputFormat="DD/MM/YYYY"
                                                value={issue_date_from}
                                                onChange={issue_date_from => setFormData({...formData, issue_date_from: issue_date_from})}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="issue_date_to">
                                    <Form.Label>Issue Date To</Form.Label>
                                    <DatePicker timePicker={false}
                                                placeholder="e.g. 2020/03/03/"
                                                name="issue_date_to"
                                                id="issue_date_to"
                                                className="form-control"
                                                inputFormat="DD/MM/YYYY"
                                                value={issue_date_to}
                                                onChange={issue_date_to => setFormData({...formData, issue_date_to: issue_date_to})}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="travel_date_from">
                                    <Form.Label>Travel Date From</Form.Label>
                                    <DatePicker timePicker={false}
                                                placeholder="e.g. 2020/03/03/"
                                                name="travel_date_from"
                                                id="travel_date_from"
                                                className="form-control"
                                                inputFormat="DD/MM/YYYY"
                                                value={travel_date_from}
                                                onChange={travel_date_from => setFormData({...formData, travel_date_from: travel_date_from})}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="travel_date_to">
                                    <Form.Label>Travel Date To</Form.Label>
                                    <DatePicker timePicker={false}
                                                placeholder="e.g. 2020/03/03/"
                                                name="travel_date_to"
                                                id="travel_date_to"
                                                className="form-control"
                                                inputFormat="DD/MM/YYYY"
                                                value={travel_date_to}
                                                onChange={travel_date_to => setFormData({...formData, travel_date_to: travel_date_to})}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-3">
                                <Form.Group controlId="time_from">
                                    <Form.Label>Flight Time From</Form.Label>
                                    <TimePicker
                                        className="form-control"
                                        value={time_from}
                                        id="time_from"
                                        onChange={time_from => setFormData({...formData, time_from: time_from})}
                                    />
                                
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="issue_date_to">
                                    <Form.Label>Flight Time To</Form.Label>
                                    <TimePicker
                                        className="form-control"
                                        value={time_to}
                                        id="time_to"
                                        onChange={time_to => setFormData({...formData, time_to: time_to})}
                                    />
                                
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="travel_class_id">
                                    <Form.Label>Travel Class</Form.Label>
                                    <select className="form-control" name="travel_class_id" value={travel_class_id}
                                            onChange={e => onChange(e)}>
                                        <Fragment>
                                            <option>Select Travel Class</option>
                                            <option value='eco' key='eco'>Economic</option>
                                            <option value='buss' key='buss'>Business</option>
                                            <option value='fst' key='fst'>First Class</option>
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="booking_class">
                                    <Form.Label>Booking Class</Form.Label>
                                    <select className="form-control" name="booking_class" value={booking_class}
                                            onChange={e => onChange(e)}>
                                        <Fragment>
                                            <option>Select Booking Class</option>
                                            {booking_list.map((value) => {
                                                return <option value={value} key={value}>{value}</option>
                                            })}
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-3">
                                <Form.Group controlId="user_group_id">
                                    <Form.Label>User Type</Form.Label>
                                    <select className="form-control" name="user_group_id" value={user_group_id}
                                            onChange={e => onChange(e)}>
                                        <Fragment>
                                            <option>Select Type</option>
                                            <option value='ur' key='ur'>User Role</option>
                                            <option value='ug' key='ug'>User Group</option>
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="user_id">
                                    <Form.Label>User ID</Form.Label>
                                    <select className="form-control" name="user_id" value={user_id}
                                            onChange={e => onChange(e)}>
                                        <Fragment>
                                            <option>Select Item</option>
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="api_source_id">
                                    <Form.Label>API Source</Form.Label>
                                    <select className="form-control" name="api_source_id" value={api_source_id}
                                            onChange={e => onChange(e)}>
                                        <Fragment>
                                            <option>Select Api Source</option>
                                            {apiSources.map((value, key) => (
                                                <option value={value.api_name}
                                                        key={key}>{value.api_name}</option>
                                            ))}
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="status_id">
                                    <Form.Label>Status</Form.Label>
                                    <select className="form-control" name="status_id" value={status_id}
                                            onChange={e => onChange(e)}>
                                        <Fragment>
                                            <option>Select Status</option>
                                            <option value='3' key='3'>Active</option>
                                            <option value='4' key='4'>Inactive</option>
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-3">
                                <Form.Group controlId="promo_type">
                                    <Form.Label>Promo Type</Form.Label>
                                    <select className="form-control" name="promo_type" value={promo_type}
                                            onChange={e => onChange(e)}>
                                        <Fragment>
                                            <option>Select Promo Type</option>
                                            <option value='d' key='d'>Discount</option>
                                            <option value='a' key='a'>Addition</option>
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="value_type">
                                    <Form.Label>Value Type</Form.Label>
                                    <select className="form-control" name="value_type" value={value_type}
                                            onChange={e => onChange(e)}>
                                        <Fragment>
                                            <option>Select Value Type</option>
                                            <option value='ps' key='ps'>Percentage</option>
                                            <option value='fxd' key='fxd'>Fixed Price</option>
                                        </Fragment>
                                    </select>
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="value">
                                    <Form.Label>Value</Form.Label>
                                    <Form.Control type="text" name="value" value={value}
                                                  onChange={e => onChange(e)} data-number={'float_only'}
                                                  placeholder="Enter Value"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-3">
                                <Form.Group controlId="max_amount">
                                    <Form.Label>Maximum Amount</Form.Label>
                                    <Form.Control type="text" name="max_amount" value={max_amount}
                                                  onChange={e => onChange(e)} data-number={'float_only'}
                                                  placeholder="Enter Maximum Amount"/>
                                </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <Button variant="outline-danger" type="reset" className="ml-2"
                                    onClick={e => resetFormData(e)}>Reset</Button>
                            {saveButton === true ?
                             <Button variant="outline-info" className="ml-2"
                                     onClick={e => saveFormData(e)}>Save</Button> : ""}
                            {searchButton === true ?
                             <Button variant="outline-warning" className="ml-2"
                                     onClick={e => searchFormData(e)}>Search</Button> : ""}
                            {updateButton === true ?
                             <Button variant="outline-success" className="ml-2"
                                     onClick={e => updateFormData(e)}>Update</Button> : ""}
                        </div>
                    
                    </div>
                </div>
                
                <div className="row pb-3">
                    <div className="col-md-8 col-sm-12 col-12 mx-auto mt-4">
                        <table className="table table-bordered table-responsive-md text-center table-striped table-hover table-condensed">
                            <thead className="font-weight-bold">
                            <tr>
                                <td>Serial No</td>
                                <td>Promotion Name</td>
                                <td>Promotion Code</td>
                                <td>Markup Type</td>
                                <td>Value Type</td>
                                <td>Value</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                            {data_list.length > 0 ? <Fragment>
                                {data_list.map((value, key) => (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{value.promotion_name}</td>
                                        <td>{value.promotion_code}</td>
                                        <td>{(value.promo_type) === 'd' ? 'Discount' : 'Addition'}</td>
                                        <td>{(value.value_type) === 'ps' ? 'Percentage' : 'Fixed'}</td>
                                        <td>{value.value}</td>
                                        <td>{value.status.status_name}</td>
                                        <td className="d-flex justify-content-center">
                                            <button onClick={e => setDataForUpdate(value.id)} className="btn btn-sm btn-info">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </button>
                                            <Button className="btn btn-sm btn-danger ml-2" onClick={() => {
                                                setDeleteInfo({
                                                                  id  : value.id,
                                                                  name: value.promotion_name
                                                              });
                                                
                                                setAddMessage({
                                                                  show: false
                                                              });
                                                handleShow();
                                            }}>
                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </Fragment> : <tr>
                                 <td colSpan={8}>
                                     No data found!
                                 </td>
                             </tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <Modal show={modalShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Api Source Remove</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete <span>{deleteInfo.promotion_name}</span> from here.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-danger" onClick={() => {
                            deleteFixedValue();
                            handleClose();
                        }}>
                            Confirm Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    </Fragment>
};

export default PromotionConfigurationIndex;