/**
 * Created by Tacio on 02/02/18.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import City from './../components/City';
import {DebounceInput} from 'react-debounce-input';
import Header from './../components/structure/Header';
import Footer from './../components/structure/Footer';

class Search extends React.Component {

    //Defining states of component
    state = {
        query : '' //State to store user query on search input
    };

    //Method to update query state
    updateQuery = (query) => {
        this.setState({ query: query.trim() });
        this.props.search(query, 30);
        //console.log(query);
    };

    render() {

        const { searchQueryInfos, forecastInfos, query } = this.props;
        return (
            <div key="app" className="App">
                <Header />

                <div className="App-intro">
                    <div>
                        <DebounceInput
                            className="input-search"
                            minLength={3}
                            debounceTimeout={1000}
                            value={query}
                            placeholder="Search a city"
                            onChange={(event)=> this.updateQuery(event.target.value)} />
                    </div>
                    <br />
                    <div className="search-result">
                        {searchQueryInfos.length === 1 && searchQueryInfos.map((city) => (
                            <City id={city.id} key={city.id} name={city.name} sunriseTime={city.sunrise} sunsetTime={city.sunset} forecast={forecastInfos} />
                        ))}
                    </div>
                    <div className="back-search">
                        <Link to='/'> Back </Link>
                    </div>
                </div>
                <div className="main-cities">
                </div>
                <Footer />
            </div>
        )
    }
}
export default Search
