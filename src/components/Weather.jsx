import React, { useEffect, useState } from "react";

import "./weather.css";
import Cloud from "../assets/Cloud.svg";
import Sun from "../assets/Sun.svg";
import Search from "../assets/🦆 icon _search_.svg";
import Location from "../assets/🦆 icon _location_.svg";
import Temperature from "../assets/🦆 icon _temperature_.svg";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Ahmedabad");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9766da99094d065692c2db4e31f4e957`;
      const response = await fetch(url);
      const resJson  = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <div className="weather">
      <div className="logo">
        <img src={Sun} className="sun" />
        <img src={Cloud} className="cloud" />
      </div>

      <div className="weather_top">
        <span>WeatherMe</span>
      </div>

      <div className="weather_searchContainer">
        <img className="search" src={Search} alt="" />
        <input
          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      {!city ? (
        <p className="notfound">No found Data</p>
      ) : (
        <>
          <div className="weather_cardContainer">
            <div className="weather_card">
              <div className="location">
                <span>{search}</span>
                <img src={Location} className="weather_location" />
              </div>
              <div className="weather_deg">
                <img src={Temperature} className="weather_temperature" />
                <span>{city.temp }°C</span>
                <img src={Cloud} className="weather_cloud" />
              </div>
              <div className="forcast">
                <div className="humidity">
                  <span>Humidity</span>
                  <span>{city.humidity }%</span>
                </div>
                <div className="humidity">
                  <span>Air Pressure</span>
                  <span>{city.pressure}hPa</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
