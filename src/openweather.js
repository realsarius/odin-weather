export class OpenWeather {
  get = async (url) => {
    document.querySelector('#loader').style.display = 'block';
    document.querySelector('.err').textContent = '';
    const response = await fetch(url);

    const responseData = await response.json();
    document.querySelector('#loader').style.display = 'none';
    return responseData;
  };
}
