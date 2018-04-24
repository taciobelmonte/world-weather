import React, { Component } from 'react';
import PropTypes from "prop-types";
import CityDetails from './../components/CityDetails';

class City extends Component {

    static propTypes = {
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        sunriseTime:PropTypes.number.isRequired,
        sunsetTime:PropTypes.number.isRequired,
    };

    state = {
        status : "disappear"
    };

    //Function to close lightbox
    close = ()=>{
        this.setState({
            status: "disappear",
        });
    };

    //Function to change state to visible and open Lightbox
    changeStatus = () => {
        this.setState({
            status: "visible",
        });
    };

    render() {
        const {id, name, sunriseTime, sunsetTime, forecast} = this.props;

        // Gets sunrise time
        const sunrise = new Date(sunriseTime*1000);
        const newSunriseTime = sunrise.toLocaleTimeString();

        // Gets sunset time
        const sunset = new Date(sunsetTime*1000);
        const newSunsetTime = sunset.toLocaleTimeString();

        return (
            <div className="city">
                <div className={"image-city " + name}></div>
                <h2>{name}</h2>
                <p>Sunrise time: {newSunriseTime} </p>
                <p>Sunset time: {newSunsetTime} </p>

                <div className="button-more-details">
                    <a onClick={this.changeStatus} className="more-detail">See Forecast</a>
                    <CityDetails id={id} name={name} status={this.state.status} close={this.close} forecast={forecast}/>
                </div>
            </div>
        );
    }
}

export default City;