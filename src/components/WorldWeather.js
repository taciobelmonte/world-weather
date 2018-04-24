import React, { Component } from 'react';
import City from './../components/City';
import Header from './../components/structure/Header';
import Footer from './../components/structure/Footer';

class WorldWeather extends Component {
    render() {
        const { weatherInfos, forecastInfos } = this.props;

        return (
            <div>
                <div key="app" className="App">
                    <Header />
                    <p className="App-intro">
                        See how the weather is current in the main cities of the world.
                    </p>
                    <div className="main-cities">
                        <h1>Europe</h1>

                        {weatherInfos.map((city) => (
                            <City id={city.id} key={city.id} name={city.name} sunriseTime={city.sunrise} sunsetTime={city.sunset} forecast={forecastInfos} />
                        ))}
                    </div>

                   <Footer />
                </div>
            </div>
        );
    }
}

export default WorldWeather;