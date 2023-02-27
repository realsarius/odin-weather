import config from './config';
import { OpenWeather } from './openweather';
import './styles/main.scss';
const api_key = config.API_KEY;
const ow = new OpenWeather();

const searchWeather = (e) => {
  e.preventDefault();
  const cityName = document.querySelector('#search').value;
  ow.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${api_key}`
  )
    .then((data) => {
      console.log(data);
      document.querySelector(
        '.city-name'
      ).textContent = `${data['name']}, ${data.sys.country}`;
      document.querySelector(
        '.weather'
      ).textContent = `${data.weather[0].main} (${data.weather[0].description})`;
      document.querySelector(
        '.wind'
      ).textContent = `Wind: ${data.wind.deg} Speed: ${data.wind.speed}`;
    })
    .catch((err) => {
      console.log(err);
      document.querySelector('.err').textContent = "Couldn't find it";
    });
};

document.querySelector('.searchBtn').addEventListener('click', searchWeather);
