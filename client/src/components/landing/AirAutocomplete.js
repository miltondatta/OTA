import React, { Component, Fragment } from 'react';
import axios from 'axios';

import '../../assets/css/air-auto-complete.css';

class AirAutocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // The active selection's index
            activeSuggestion: 0,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            showSuggestions: false,
            // What the user has entered
            userInput: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        let filteredSuggestions = [];
        let search_value = e.currentTarget.value;
        if(search_value === '') {
            this.setState({
                activeSuggestion: 0,
                filteredSuggestions: [],
                showSuggestions: false,
                userInput: search_value
            });
            return;
        }

        this.setState({
            userInput: search_value
        });
        
         axios
            .get('/api/global/get_airports?airport_search=' + search_value)
            .then(res => {  
                console.log(res.data);
                res.data.forEach(element => {
                    filteredSuggestions.push(element.iata_code + ", " + element.name + ", " + element.iso_country);
                });
                this.setState({
                    activeSuggestion: 0,
                    filteredSuggestions,
                    showSuggestions: true,
                });
            })
            .catch(err =>
                console.log("Error: " + err)
            );           
    }


    onClick(e) {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
        this.props.handlerFromParant(e.currentTarget.innerText); 
    }




    render() {
        const {
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput && filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul className="suggestions">
                    {filteredSuggestions.map((suggestion, index) => {
                        let className;
                        // Flag the active suggestion with a class
                        if (index === activeSuggestion) {
                            className = "suggestion-active";
                        }
                        return (
                            <li className={className} key={index} onClick={this.onClick}>
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        }


        return (
            <Fragment>
                <input type="text"
                    required autoComplete="off"
                    name={this.props.name}
                    className="form-control"
                    placeholder="City or airport"
                    onChange={this.onChange}
                    value={userInput}
                />
                {suggestionsListComponent}
            </Fragment>
        )
    }
}


export default AirAutocomplete;
