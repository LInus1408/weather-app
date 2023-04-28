import countries from './countries';
import savesValues from './saves_values';
import weatherAPI from './api';
import time from './time';
import cleanHTML from './clean';

class HtmlBuilder {
  constructor(lang, value) {
    this.lang = lang;
    this.value = value;
  }

  // eslint-disable-next-line class-methods-use-this
  builderCurrentWeather() { // постройка карты текущей погоды
    const main = document.querySelector('.main');
    cleanHTML();
    const section = document.createElement('section');
    section.className = 'section-currentWeather';
    main.prepend(section);
    const cardCurrentWeather = document.createElement('div');
    cardCurrentWeather.className = 'card-Current-Weather';
    section.prepend(cardCurrentWeather);

    if (this.lang === 'Ru') {
      const nameCity = document.createElement('h2');
      nameCity.className = 'current-city-name';
      nameCity.textContent = `${savesValues.nameRu} , ${savesValues.nameCountry}`;
      cardCurrentWeather.append(nameCity);

      const currentTime = document.createElement('p');
      currentTime.className = 'current-time';
      currentTime.textContent = `${time()}`;
      cardCurrentWeather.append(currentTime);

      const currentTemp = document.createElement('p');
      currentTemp.className = 'current-temp';
      currentTemp.innerHTML = (this.value.main.temp - 273 < 0) ? `${Math.trunc(this.value.main.temp - 273)}&deg;` : `+${Math.trunc(this.value.main.temp - 273)}&deg;`;
      cardCurrentWeather.append(currentTemp);

      const currentFeelsTemp = document.createElement('p');
      currentFeelsTemp.className = 'current-FeelsTemp';
      currentFeelsTemp.innerHTML = (this.value.main.feels_like - 273 < 0) ? `По ощущению ${Math.trunc(this.value.main.feels_like - 273)}&deg;` : `По ощущению +${Math.trunc(this.value.main.feels_like - 273)}&deg;`;
      cardCurrentWeather.append(currentFeelsTemp);

      const currentDescriptionWeather = document.createElement('p');
      currentDescriptionWeather.className = 'current-DescriptionWeather';
      currentDescriptionWeather.textContent = `${this.value.weather[0].description}`;
      cardCurrentWeather.append(currentDescriptionWeather);

      const currentWeatherInfo = document.createElement('div');
      currentWeatherInfo.className = 'current-WeatherInfo';
      cardCurrentWeather.append(currentWeatherInfo);

      const currentWeatherWind = document.createElement('p');
      currentWeatherWind.className = 'current-WeatherWind';
      currentWeatherWind.textContent = `Ветер ${this.value.wind.speed} м/с`;
      currentWeatherInfo.append(currentWeatherWind);

      const currentWeatherPressure = document.createElement('p');
      currentWeatherPressure.className = 'current-WeatherPleasure';
      currentWeatherPressure.textContent = `Давление ${this.value.main.pressure} мм рт. ст.`;
      currentWeatherInfo.append(currentWeatherPressure);

      const currentWeatherHumidity = document.createElement('p');
      currentWeatherHumidity.className = 'current-WeatherHumidity';
      currentWeatherHumidity.textContent = `Влажность ${this.value.main.humidity}%`;
      currentWeatherInfo.append(currentWeatherHumidity);
    } else {
      const nameCity = document.createElement('h2');
      nameCity.className = 'current-city-name';
      nameCity.textContent = `${savesValues.nameRu} , ${savesValues.nameCountry}`;
      cardCurrentWeather.append(nameCity);

      const currentTime = document.createElement('p');
      currentTime.className = 'current-time';
      currentTime.textContent = `${time()}`;
      cardCurrentWeather.append(currentTime);

      const currentTemp = document.createElement('p');
      currentTemp.className = 'current-temp';
      currentTemp.innerHTML = (this.value.main.temp - 273 < 0) ? `${Math.trunc(this.value.main.temp - 273)}&deg;` : `+${Math.trunc(this.value.main.temp - 273)}&deg;`;
      cardCurrentWeather.append(currentTemp);

      const currentFeelsTemp = document.createElement('p');
      currentFeelsTemp.className = 'current-FeelsTemp';
      currentFeelsTemp.innerHTML = (this.value.main.feels_like - 273 < 0) ? `Real feel ${Math.trunc(this.value.main.feels_like - 273)}&deg;` : `Real feel +${Math.trunc(this.value.main.feels_like - 273)}&deg;`;
      cardCurrentWeather.append(currentFeelsTemp);

      const currentDescriptionWeather = document.createElement('p');
      currentDescriptionWeather.className = 'current-DescriptionWeather';
      currentDescriptionWeather.textContent = `${this.value.weather[0].description}`;
      cardCurrentWeather.append(currentDescriptionWeather);

      const currentWeatherInfo = document.createElement('div');
      currentWeatherInfo.className = 'current-WeatherInfo';
      cardCurrentWeather.append(currentWeatherInfo);

      const currentWeatherWind = document.createElement('p');
      currentWeatherWind.className = 'current-WeatherWind';
      currentWeatherWind.textContent = `Wind ${this.value.wind.speed} m/s`;
      currentWeatherInfo.append(currentWeatherWind);

      const currentWeatherPressure = document.createElement('p');
      currentWeatherPressure.className = 'current-WeatherPleasure';
      currentWeatherPressure.textContent = `Pleasure ${this.value.main.pressure} mm Hg`;
      currentWeatherInfo.append(currentWeatherPressure);

      const currentWeatherHumidity = document.createElement('p');
      currentWeatherHumidity.className = 'current-WeatherHumidity';
      currentWeatherHumidity.textContent = `Humidity ${this.value.main.humidity}%`;
      currentWeatherInfo.append(currentWeatherHumidity);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  checkLang() { // проверка текущего языка
    return document.querySelector('.chosen-Lang').textContent;
  }

  // eslint-disable-next-line class-methods-use-this
  setAttribute(li, item) { // добавление атрибутов
    // eslint-disable-next-line no-param-reassign
    li.className = 'result-Search_item';
    li.setAttribute('data-lat', `${item.lat}`);
    li.setAttribute('data-lon', `${item.lon}`);
    li.setAttribute('data-Country', `${countries[item.country]}`);
    if ((item.local_names === undefined)) {
      li.setAttribute('data-Ru', `${item.name}`);
      li.setAttribute('data-Eng', `${item.name}`);
    // eslint-disable-next-line no-prototype-builtins
    } else if ((item.local_names.hasOwnProperty('ru') === false) && (item.local_names.hasOwnProperty('eng') === false)) {
      li.setAttribute('data-Ru', `${item.name}`);
      li.setAttribute('data-Eng', `${item.name}`);
    // eslint-disable-next-line no-dupe-else-if, no-prototype-builtins
    } else if ((item.local_names.hasOwnProperty('ru') === true) && (item.local_names.hasOwnProperty('eng') === false)) {
      li.setAttribute('data-Ru', `${item.local_names.ru}`);
      li.setAttribute('data-Eng', `${item.name}`);
    // eslint-disable-next-line no-dupe-else-if, no-prototype-builtins
    } else if ((item.local_names.hasOwnProperty('ru') === false) && (item.local_names.hasOwnProperty('eng') === true)) {
      li.setAttribute('data-Ru', `${item.name}`);
      li.setAttribute('data-Eng', `${item.local_names.eng}`);
    } else {
      li.setAttribute('data-Ru', `${item.local_names.ru}`);
      li.setAttribute('data-Eng', `${item.local_names.eng}`);
    }
  }

  builderSearch() { // результат поиска
    const main = document.querySelector('.main');
    cleanHTML();
    if (this.lang === 'Ru') {
      const ul = document.createElement('ul');
      ul.className = 'result-Search';
      main.prepend(ul);
      this.value.forEach((item, index) => {
        const li = document.createElement('li');
        this.setAttribute(li, item);
        if (item.state === undefined) {
          // eslint-disable-next-line no-param-reassign
          item.state = 'Неизвестно';
        }
        if ((item.local_names === undefined)) {
          li.innerHTML = `${index + 1}. Имя: ${item.name}. Страна: ${countries[item.country]}. Регион: ${item.state}.`;
        // eslint-disable-next-line no-prototype-builtins
        } else if (item.local_names.hasOwnProperty('ru') === false) {
          li.innerHTML = `${index + 1}. Имя: ${item.name}. Страна: ${countries[item.country]}. Регион: ${item.state}.`;
        } else {
          li.innerHTML = `${index + 1}. Имя: ${item.local_names.ru}. Страна: ${countries[item.country]}. Регион: ${item.state}.`;
        }
        ul.append(li);
      });
    }
    if (this.lang === 'Eng') {
      const ul = document.createElement('ul');
      ul.className = 'result-Search';
      main.prepend(ul);
      this.value.forEach((item, index) => {
        const li = document.createElement('li');
        this.setAttribute(li, item);
        if (item.state === undefined) {
          // eslint-disable-next-line no-param-reassign
          item.state = 'undefined';
        }
        if ((item.local_names === undefined)) {
          li.innerHTML = `${index + 1}. Name: ${item.name}. Country: ${countries[item.country]}. Region: ${item.state}.`;
        // eslint-disable-next-line no-prototype-builtins
        } else if (item.local_names.hasOwnProperty('eng') === false) {
          li.innerHTML = `${index + 1}. Name: ${item.name}. Country: ${countries[item.country]}. Region: ${item.state}.`;
        } else {
          li.innerHTML = `${index + 1}. Name: ${item.local_names.eng}. Country: ${countries[item.country]}. Region: ${item.state}.`;
        }
        ul.append(li);
      });
    }
    const resultSearch = document.querySelector('.result-Search'); // при клике на результаты поиска
    resultSearch.addEventListener('click', async (event) => {
      savesValues.nameCountry = event.target.dataset.country;
      savesValues.nameEng = event.target.dataset.eng;
      savesValues.nameRu = event.target.dataset.ru;
      savesValues.urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${event.target.dataset.lat}&lon=${event.target.dataset.lon}&appid=0f0f05a27772edf9aeced21a5cb64568&lang=`;
      const urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${event.target.dataset.lat}&lon=${event.target.dataset.lon}&appid=0f0f05a27772edf9aeced21a5cb64568&lang=${this.checkLang()}`;
      const dataGeo = await weatherAPI.getGeo(urlCurrentWeather);
      this.lang = this.checkLang();
      this.value = dataGeo;
      savesValues.itemWeatherCurrent = dataGeo;
      this.builderCurrentWeather();
    });
  }

  incorrectValue() { // некоректное значение
    const headerForm = document.querySelector('.header-form');
    const p = document.createElement('p');
    p.className = 'incorrect-value';
    if (this.lang === 'Ru') {
      p.textContent = 'Неправильное значение';
      headerForm.append(p);
    } else {
      p.textContent = 'Incorrect value';
      headerForm.append(p);
    }
    setTimeout(() => p.remove(), 2000);
  }
}

export default HtmlBuilder;
