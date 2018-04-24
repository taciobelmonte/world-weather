import React  from 'react';
import './../assets/css/main.min.css';
import './../assets/css/responsive.min.css';
import WorldWeather from './../components/WorldWeather';
import Search from './../components/Search';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as API from './../utils/API'

class App extends React.Component {

    //Defining states
    state = {
       weatherInfos : [],
       dataForecast: [],
       searchQueryInfos: [],
       searchDataForecast: []
    };

    //Lifecycle
    componentDidMount(){

        //London 2643743  //Paris 2988507  //Berlin 2950159  //Amsterdam 2759794 //Rome 6539761

        //Array with IDs from each city that will be requested infos from
        const citiesIds = [2643743,2988507,2950159,2759794,4219762];

        //API request to retrieve weather infos from 5 cities
        API.get(citiesIds, "cities").then( (response) => {
            const weatherInfosData = [];
            const forecastInfosData = [];

            console.log(response);

            //Iterates over the results and push data to array
            response.list.forEach(function(element){

                weatherInfosData.push({
                    id:element.id,
                    name:element.name,
                    sunrise: element.sys.sunrise,
                    sunset: element.sys.sunset,
                });
            });

            //Loop through array again to push forecast data
            weatherInfosData.forEach(function(element, index) {
               API.get(element.id, 'forecast').then( (res) => {

                   //Filter forecast list and create a new array with only data from 09:00:00
                   const dataForecast = res.list.filter((el) => {
                       var hours = el.dt_txt.split(" ")[1].trim();
                       if(hours === "09:00:00"){
                           return el;
                       }
                       return 0;
                   });

                   //Append forecast data to Forecast array data
                   forecastInfosData.push({id:element.id, dataForecast});
                });
            });

            //Updates state with new data collected from API
            if(response && !response.error){
                this.setState({
                    weatherInfos: weatherInfosData,
                    dataForecast: forecastInfosData
                });
            }
        });
    }

    //Function to get city from API based on a query
    search = (query) => {
        API.get(query, 'city').then( (response) => {
            const searchQueryInfos = [];
            const searchDataForecast = [];

            if(response && !response.error){

                searchQueryInfos.push({
                    id:response.id,
                    name:response.name,
                    sunrise: response.sys.sunrise,
                    sunset: response.sys.sunset,
                });

                API.get(response.id, 'forecast').then( (res) => {

                    //Filter forecast list and create a new array with only data from 09:00:00
                    const dataForecast = res.list.filter((el) => {
                        var hours = el.dt_txt.split(" ")[1].trim();
                        if(hours === "09:00:00")
                            return el;
                        return 0;
                    });

                    //Append forecast data to Forecast array data
                    searchDataForecast.push({id:response.id, dataForecast});
                });

                //Updates state with new data collected from API
                if(response && !response.error){
                    this.setState({
                        searchQueryInfos: searchQueryInfos,
                        searchDataForecast: searchDataForecast
                    });
                }
            }
        });
    };

  render() {
    const {weatherInfos, dataForecast, searchQueryInfos, searchDataForecast} = this.state;
    return (
        <div>
            <Route
                exact
                path="/"
                render={
                    ()=>(
                        <div>
                            <WorldWeather weatherInfos={weatherInfos} forecastInfos={dataForecast}/>
                            <div className="open-search">
                                <Link to='/search'>Search city</Link>
                            </div>
                        </div>
                    )
                }
            />
            <Route
                exact
                path="/search"
                render={
                    ()=>(
                        <div>
                            <Search search={this.search} searchQueryInfos={searchQueryInfos} forecastInfos={searchDataForecast} />
                        </div>
                    )
                }
            />
        </div>
    );
  }
}

export default App;