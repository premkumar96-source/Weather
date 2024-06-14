import { useContext, useEffect, useState } from "react";
// import logo from "./assets/logo192.png";
// import SearchIcon from "./assets/search.png";
import humidity from "./assets/weather.png";
import wind from "./assets/wind.png";

import "./App.css";
import UserContext from "./Context/Context";
import { UserAction } from "./component/useraction";
import "./component/home.css";

function Weather() {
  const { state, dispatch } = useContext(UserContext);
  const { weather } = state;
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // console.log("state", state);
  // let apiKey = "fa02f20c2acd4e5ece34e968a6337974";

  // const [icon, setIcon] = useState("chennai");
  //   const weatherIconMap = {
  //     "01d": clearIcon,
  //     "01n": clearIcon,
  //     "02d": clearIcon,
  //     "02n": clearIcon,
  //     "03d": drizzleIcon,
  //     "03n": drizzleIcon,
  //     "04d": drizzleIcon,
  //     "04n": drizzleIcon,
  //     "09d": rainIcon,
  //     "09n": rainIcon,
  //     "10d": rainIcon,
  //     "10n": rainIcon,
  //     "13d": rainIcon,
  //     "13n": rainIcon,
  //   };
  const [text, setText] = useState("");

  // const search = async () => {
  //   const city = "Chennai";
  //   // const units = "metric"; // Ensure 'metric' is used consistently
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=Metric`;

  //   try {
  //     let res = await fetch(url);

  //     let data = await res.json();
  //     //   if (data.cod == "404") {
  //     //     //   throw new Error(`HTTP error! status: ${res.status}`);
  //     //     console.log("error", data.status);
  //     //     return;
  //     //   }
  //     setHumidity(data.main.humidity);
  //     setWind(data.wind.speed);
  //     setTemp(data.main.temp);
  //     setCity(data.name);
  //     setCountry(data.sys.country);
  //     setLog(data.coord.lon);
  //     setLat(data.coord.lat);
  //     //   const weatherIconCode = data.weather[0].icon;
  //     //   setIcon(weatherIconMap[weatherIconCode] || clearIcon);

  //     console.log("data", data);
  //   } catch (error) {
  //     console.error("Error fetching weather data:", error);
  //   }
  // };
  // console.log("error1", weather.cod);
  // console.log("error2", state.cod);

  const search = () => {
    dispatch({ type: UserAction.SEARCH, payload: text });
  };
  const searchHandler = (e) => {
    setText(e.target.value);
  };
  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  useEffect(() => {
    setText(state.search);
  }, [state.search]);

  return (
    <>
      {error ? (
        <p>{errorMsg}</p>
      ) : (
        <div className="content">
          <div className="container text-center">
            <div class="row">
              <div class="col-12">
                <input
                  className="weather-input"
                  type="text"
                  placeholder="search city"
                  onChange={searchHandler}
                  value={text}
                  onKeyDown={keyDownHandler}
                />
                <button type="button" className="search-btn" onClick={search}>
                  Get Weather
                </button>
                {/* <img className="imagetag" src={SearchIcon} alt="search icon"></img> */}
              </div>
            </div>
          </div>

          {weather && (
            <div className="container ">
              <div className="row">
                <div className="col-12">
                  <div className="text-container">
                    <p className="weather-temperature">
                      {weather.main.temp}^C{" "}
                    </p>
                    <p className="weather-name">{weather.name}</p>
                    <p className="weather-country">{weather.sys.country}</p>
                  </div>
                  <div className="container">
                    <div class="row">
                      <div class="col-6 text-container-temp">
                        <div>Latitude</div>
                        <div>{weather.coord.lat}</div>
                      </div>
                      <div class="col-6 text-container-temp">
                        <div className="log-text">Longitude</div>
                        <div className="log-value">{weather.coord.lon}</div>
                      </div>
                    </div>
                  </div>

                  <div class="row width">
                    <div class="col-6 ">
                      <img
                        class="img-responsive"
                        src={humidity}
                        alt="wind"
                        width="50"
                        height="50"
                      />
                      <div>humidity</div>
                      <div>{weather.main.humidity} %</div>
                    </div>
                    <div class="col-6 text-end">
                      <img
                        class="img-responsive"
                        src={wind}
                        alt="wind"
                        width="50"
                        height="50"
                      />

                      <div>{weather.wind.speed} km/h</div>
                      <div>wind speed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default Weather;
