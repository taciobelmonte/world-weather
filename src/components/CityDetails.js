import React from 'react'
import Waves from './../assets/images/waves.svg';
import closeIcon from './../assets/images/close.svg';

class CityDetails extends React.Component {

    componentDidMount(){
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 27){
                this.props.close();
            }
        });
    }

    //Function to get date with time and display only date
    formatDate = (date) => {
        const newValue = date.split(" ");
        const values = newValue[0].split("-");
        const year = values[0];
        const month = values[1];
        const day = values[2];
        return day + '/' + month + '/' + year + '';
    };

    render() {
        const {status, close, name, id, forecast} = this.props;

        const newDataforecast = [];

        forecast.forEach(function(element){
            if(element.id === id)
                newDataforecast.push(element);
        });

        return (
            <div className={status + " cityDetails"}>
                <a className="close" onClick={close}>
                    <img className="closeIcon" src={closeIcon} alt="Close Icon"/>
                </a>
                <h2 className="cityName">{name}</h2>
                <h3>Check in the table below the Sea level for the next 5 days at 9:00 AM</h3>

                <div key="days" className="city-infos">

                    {newDataforecast.map((city, index) => (
                        city.dataForecast.map( (ele, index) => (
                            <div key={index}>
                                <div className="day" key={index}>
                                    <p>{this.formatDate(ele.dt_txt)}</p>
                                    <div className="sea-level">
                                        <img src={Waves} alt="Waves"/>
                                        <span>{ele.main.sea_level}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        )
    }
}
export default CityDetails

