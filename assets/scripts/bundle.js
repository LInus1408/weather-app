/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/sass/style.scss":
/*!************************************!*\
  !*** ./src/assets/sass/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/js/api.js":
/*!******************************!*\
  !*** ./src/assets/js/api.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weatherAPI = {
  async getGeo(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherAPI);


/***/ }),

/***/ "./src/assets/js/clean.js":
/*!********************************!*\
  !*** ./src/assets/js/clean.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cleanHTML() {
  if (document.querySelector('.result-Search')) {
    document.querySelector('.result-Search').remove();
  }
  if (document.querySelector('.section-currentWeather')) {
    document.querySelector('.section-currentWeather').remove();
  }
  if (document.querySelector('.section-FutureWeather')) {
    document.querySelector('.section-FutureWeather').remove();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cleanHTML);


/***/ }),

/***/ "./src/assets/js/countries.js":
/*!************************************!*\
  !*** ./src/assets/js/countries.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countries = {
  AF: 'Afghanistan',
  AX: 'Aland Islands',
  AL: 'Albania',
  DZ: 'Algeria',
  AS: 'American Samoa',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antarctica',
  AG: 'Antigua And Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AW: 'Aruba',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Bhutan',
  BO: 'Bolivia',
  BA: 'Bosnia And Herzegovina',
  BW: 'Botswana',
  BV: 'Bouvet Island',
  BR: 'Brazil',
  IO: 'British Indian Ocean Territory',
  BN: 'Brunei Darussalam',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  CV: 'Cape Verde',
  KY: 'Cayman Islands',
  CF: 'Central African Republic',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CX: 'Christmas Island',
  CC: 'Cocos (Keeling) Islands',
  CO: 'Colombia',
  KM: 'Comoros',
  CG: 'Congo',
  CD: 'Congo, Democratic Republic',
  CK: 'Cook Islands',
  CR: 'Costa Rica',
  CI: 'Cote D\'Ivoire',
  HR: 'Croatia',
  CU: 'Cuba',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  ET: 'Ethiopia',
  FK: 'Falkland Islands (Malvinas)',
  FO: 'Faroe Islands',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GF: 'French Guiana',
  PF: 'French Polynesia',
  TF: 'French Southern Territories',
  GA: 'Gabon',
  GM: 'Gambia',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Greece',
  GL: 'Greenland',
  GD: 'Grenada',
  GP: 'Guadeloupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GG: 'Guernsey',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HM: 'Heard Island & Mcdonald Islands',
  VA: 'Holy See (Vatican City State)',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IR: 'Iran, Islamic Republic Of',
  IQ: 'Iraq',
  IE: 'Ireland',
  IM: 'Isle Of Man',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JE: 'Jersey',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  KR: 'Korea',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: 'Lao People\'s Democratic Republic',
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libyan Arab Jamahiriya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macao',
  MK: 'Macedonia',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MX: 'Mexico',
  FM: 'Micronesia, Federated States Of',
  MD: 'Moldova',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands',
  AN: 'Netherlands Antilles',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigeria',
  NU: 'Niue',
  NF: 'Norfolk Island',
  MP: 'Northern Mariana Islands',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PS: 'Palestinian Territory, Occupied',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines',
  PN: 'Pitcairn',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  QA: 'Qatar',
  RE: 'Reunion',
  RO: 'Romania',
  RU: 'Russian Federation',
  RW: 'Rwanda',
  BL: 'Saint Barthelemy',
  SH: 'Saint Helena',
  KN: 'Saint Kitts And Nevis',
  LC: 'Saint Lucia',
  MF: 'Saint Martin',
  PM: 'Saint Pierre And Miquelon',
  VC: 'Saint Vincent And Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome And Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  GS: 'South Georgia And Sandwich Isl.',
  ES: 'Spain',
  LK: 'Sri Lanka',
  SD: 'Sudan',
  SR: 'Suriname',
  SJ: 'Svalbard And Jan Mayen',
  SZ: 'Swaziland',
  SE: 'Sweden',
  CH: 'Switzerland',
  SY: 'Syrian Arab Republic',
  TW: 'Taiwan',
  TJ: 'Tajikistan',
  TZ: 'Tanzania',
  TH: 'Thailand',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad And Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TC: 'Turks And Caicos Islands',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom',
  US: 'United States',
  UM: 'United States Outlying Islands',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VE: 'Venezuela',
  VN: 'Viet Nam',
  VG: 'Virgin Islands, British',
  VI: 'Virgin Islands, U.S.',
  WF: 'Wallis And Futuna',
  EH: 'Western Sahara',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countries);


/***/ }),

/***/ "./src/assets/js/dom.js":
/*!******************************!*\
  !*** ./src/assets/js/dom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries */ "./src/assets/js/countries.js");
/* harmony import */ var _saves_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saves_values */ "./src/assets/js/saves_values.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/assets/js/api.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time */ "./src/assets/js/time.js");
/* harmony import */ var _clean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clean */ "./src/assets/js/clean.js");






class HtmlBuilder {
  constructor(lang, value) {
    this.lang = lang;
    this.value = value;
  }

  // eslint-disable-next-line class-methods-use-this
  async builderFutureWeather(url) { // создание погоды на будущее
    const dataGeo = await _api__WEBPACK_IMPORTED_MODULE_2__["default"].getGeo(url);
    const main = document.querySelector('.main');
    const section = document.createElement('section');
    section.className = 'section-FutureWeather';
    main.append(section);
    const cardsFutureWeather = document.createElement('div');
    cardsFutureWeather.className = 'cards-Future-Weather';
    section.prepend(cardsFutureWeather);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 40; i++) {
      const cardFutureWeather = document.createElement('div');
      cardFutureWeather.className = 'card-Future-Weather';
      cardsFutureWeather.append(cardFutureWeather);

      const futureTime = document.createElement('p');
      futureTime.className = 'future-time';
      futureTime.textContent = dataGeo.list[i].dt_txt;
      cardFutureWeather.append(futureTime);

      const futureWeatherPic = document.createElement('img');
      futureWeatherPic.className = 'pic-future';
      futureWeatherPic.src = `https://openweathermap.org/img/wn/${dataGeo.list[i].weather[0].icon}@2x.png`;
      cardFutureWeather.append(futureWeatherPic);

      const futureTemp = document.createElement('p');
      futureTemp.className = 'future-temp';
      futureTemp.innerHTML = (dataGeo.list[i].main.temp - 273 < 0) ? `${Math.trunc(dataGeo.list[i].main.temp - 273)}&deg;` : `+${Math.trunc(dataGeo.list[i].main.temp - 273)}&deg;`;
      cardFutureWeather.append(futureTemp);

      const FutureWeatherWind = document.createElement('p');
      FutureWeatherWind.className = 'future-wind';
      FutureWeatherWind.innerHTML = `${dataGeo.list[i].wind.speed} &#x1F32C;`;
      if (dataGeo.list[i].wind.speed <= 2) {
        FutureWeatherWind.style.backgroundColor = '#DCDCDC';
      } else if (dataGeo.list[i].wind.speed <= 5) {
        FutureWeatherWind.style.backgroundColor = '#808080';
      } else if (dataGeo.list[i].wind.speed <= 8) {
        FutureWeatherWind.style.backgroundColor = '#FFA07A';
      } else if (dataGeo.list[i].wind.speed <= 12) {
        FutureWeatherWind.style.backgroundColor = '#FFA500';
      } else if (dataGeo.list[i].wind.speed <= 16) {
        FutureWeatherWind.style.backgroundColor = '#CD5C5C';
      } else if (dataGeo.list[i].wind.speed <= 20) {
        FutureWeatherWind.style.backgroundColor = '#FF0000';
      } else {
        FutureWeatherWind.style.backgroundColor = '#8B0000';
      }
      cardFutureWeather.append(FutureWeatherWind);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  builderCurrentWeather() { // постройка карты текущей погоды
    const main = document.querySelector('.main');
    (0,_clean__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const section = document.createElement('section');
    section.className = 'section-currentWeather';
    main.prepend(section);
    const cardCurrentWeather = document.createElement('div');
    cardCurrentWeather.className = 'card-Current-Weather';
    section.prepend(cardCurrentWeather);
    if (this.lang === 'Ru') {
      const nameCity = document.createElement('h2');
      nameCity.className = 'current-city-name';
      nameCity.textContent = `${_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].nameRu} , ${_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].nameCountry}`;
      cardCurrentWeather.append(nameCity);

      const currentTime = document.createElement('p');
      currentTime.className = 'current-time';
      currentTime.textContent = `${(0,_time__WEBPACK_IMPORTED_MODULE_3__["default"])()}`;
      cardCurrentWeather.append(currentTime);

      const wetherIcon = document.createElement('div');
      wetherIcon.className = 'wetherIcon';
      if (this.value.weather[0].icon === '01d' || this.value.weather[0].icon === '02d') {
        wetherIcon.innerHTML = `<div icon="sunny" data-label="Sunny">
        <span class="sun"></span>
      </div>`;
      } else if (this.value.weather[0].icon === '01n' || this.value.weather[0].icon === '02n' || this.value.weather[0].icon === '03n' || this.value.weather[0].icon === '04n') {
        wetherIcon.innerHTML = `<div icon="supermoon" data-label="Cool!">
        <span class="moon"></span>
        <span class="meteor"></span>
      </div>`;
      } else if (this.value.weather[0].icon === '03d' || this.value.weather[0].icon === '04d') {
        wetherIcon.innerHTML = `<div icon="cloudy" data-label="Perfect">
        <span class="cloud"></span>
        <span class="cloud"></span>
      </div>`;
      } else if (this.value.weather[0].icon === '09d' || this.value.weather[0].icon === '09n' || this.value.weather[0].icon === '10d' || this.value.weather[0].icon === '10n' || this.value.weather[0].icon === '11d' || this.value.weather[0].icon === '11n') {
        wetherIcon.innerHTML = `<div icon="stormy" data-label="Soggy">
        <span class="cloud"></span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>`;
      } else {
        wetherIcon.innerHTML = `<div icon="snowy" data-label="Chilly">
        <span class="snowman"></span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>`;
      }
      cardCurrentWeather.append(wetherIcon);

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
      nameCity.textContent = `${_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].nameEng} , ${_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].nameCountry}`;
      cardCurrentWeather.append(nameCity);

      const currentTime = document.createElement('p');
      currentTime.className = 'current-time';
      currentTime.textContent = `${(0,_time__WEBPACK_IMPORTED_MODULE_3__["default"])()}`;
      cardCurrentWeather.append(currentTime);

      const wetherIcon = document.createElement('div');
      wetherIcon.className = 'wetherIcon';
      if (this.value.weather[0].icon === '01d' || this.value.weather[0].icon === '02d') {
        wetherIcon.innerHTML = `<div icon="sunny" data-label="Sunny">
        <span class="sun"></span>
      </div>`;
      } else if (this.value.weather[0].icon === '01n' || this.value.weather[0].icon === '02n' || this.value.weather[0].icon === '03n' || this.value.weather[0].icon === '04n') {
        wetherIcon.innerHTML = `<div icon="supermoon" data-label="Cool!">
        <span class="moon"></span>
        <span class="meteor"></span>
      </div>`;
      } else if (this.value.weather[0].icon === '03d' || this.value.weather[0].icon === '04d') {
        wetherIcon.innerHTML = `<div icon="cloudy" data-label="Perfect">
        <span class="cloud"></span>
        <span class="cloud"></span>
      </div>`;
      } else if (this.value.weather[0].icon === '09d' || this.value.weather[0].icon === '09n' || this.value.weather[0].icon === '10d' || this.value.weather[0].icon === '10n' || this.value.weather[0].icon === '11d' || this.value.weather[0].icon === '11n') {
        wetherIcon.innerHTML = `<div icon="stormy" data-label="Soggy">
        <span class="cloud"></span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>`;
      } else {
        wetherIcon.innerHTML = `<div icon="snowy" data-label="Chilly">
        <span class="snowman"></span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>`;
      }
      cardCurrentWeather.append(wetherIcon);

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
    li.setAttribute('data-Country', `${_countries__WEBPACK_IMPORTED_MODULE_0__["default"][item.country]}`);
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
    (0,_clean__WEBPACK_IMPORTED_MODULE_4__["default"])();
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
          li.innerHTML = `${index + 1}. Имя: ${item.name}. Страна: ${_countries__WEBPACK_IMPORTED_MODULE_0__["default"][item.country]}. Регион: ${item.state}.`;
        // eslint-disable-next-line no-prototype-builtins
        } else if (item.local_names.hasOwnProperty('ru') === false) {
          li.innerHTML = `${index + 1}. Имя: ${item.name}. Страна: ${_countries__WEBPACK_IMPORTED_MODULE_0__["default"][item.country]}. Регион: ${item.state}.`;
        } else {
          li.innerHTML = `${index + 1}. Имя: ${item.local_names.ru}. Страна: ${_countries__WEBPACK_IMPORTED_MODULE_0__["default"][item.country]}. Регион: ${item.state}.`;
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
          li.innerHTML = `${index + 1}. Name: ${item.name}. Country: ${_countries__WEBPACK_IMPORTED_MODULE_0__["default"][item.country]}. Region: ${item.state}.`;
        // eslint-disable-next-line no-prototype-builtins
        } else if (item.local_names.hasOwnProperty('eng') === false) {
          li.innerHTML = `${index + 1}. Name: ${item.name}. Country: ${_countries__WEBPACK_IMPORTED_MODULE_0__["default"][item.country]}. Region: ${item.state}.`;
        } else {
          li.innerHTML = `${index + 1}. Name: ${item.local_names.eng}. Country: ${_countries__WEBPACK_IMPORTED_MODULE_0__["default"][item.country]}. Region: ${item.state}.`;
        }
        ul.append(li);
      });
    }
    const resultSearch = document.querySelector('.result-Search'); // при клике на результаты поиска
    resultSearch.addEventListener('click', async (event) => {
      _saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].nameCountry = event.target.dataset.country;
      _saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].nameEng = event.target.dataset.eng;
      _saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].nameRu = event.target.dataset.ru;
      _saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${event.target.dataset.lat}&lon=${event.target.dataset.lon}&appid=0f0f05a27772edf9aeced21a5cb64568&lang=`;
      const urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${event.target.dataset.lat}&lon=${event.target.dataset.lon}&appid=0f0f05a27772edf9aeced21a5cb64568&lang=${this.checkLang()}`;
      const dataGeo = await _api__WEBPACK_IMPORTED_MODULE_2__["default"].getGeo(urlCurrentWeather);
      this.lang = this.checkLang();
      this.value = dataGeo;
      _saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].itemWeatherCurrent = dataGeo;
      this.builderCurrentWeather();
      _saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlWeatherFuture = `https://api.openweathermap.org/data/2.5/forecast?lat=${event.target.dataset.lat}&lon=${event.target.dataset.lon}&appid=0f0f05a27772edf9aeced21a5cb64568`;
      this.builderFutureWeather(_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlWeatherFuture);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HtmlBuilder);


/***/ }),

/***/ "./src/assets/js/lang.js":
/*!*******************************!*\
  !*** ./src/assets/js/lang.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chooseLang)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/assets/js/dom.js");
/* harmony import */ var _saves_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saves_values */ "./src/assets/js/saves_values.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/assets/js/api.js");




function chooseLang() {
  const langEng = document.querySelectorAll('.lang span');

  langEng[0].addEventListener('click', async (event) => {
    if (!event.target.classList.contains('chosen-Lang')) {
      event.target.classList.add('chosen-Lang');
      langEng[1].classList.remove('chosen-Lang');
      _saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].currentLang = 'Eng';
      if (document.querySelector('.result-Search')) { // если есть результат поиска
        const dataGeo = await _api__WEBPACK_IMPORTED_MODULE_2__["default"].getGeo(_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlGeo);
        const htmlBuilder = new _dom__WEBPACK_IMPORTED_MODULE_0__["default"]('Eng', dataGeo);
        htmlBuilder.builderSearch();
      }
      if (document.querySelector('.section-currentWeather')) { // если есть открытая погода
        if (_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlCurrentWeather) {
          const urlCurrentWeather = `${_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlCurrentWeather}Eng`;
          const dataGeo = await _api__WEBPACK_IMPORTED_MODULE_2__["default"].getGeo(urlCurrentWeather);
          const htmlBuilder = new _dom__WEBPACK_IMPORTED_MODULE_0__["default"]('Eng', dataGeo);
          _saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].itemWeatherCurrent = dataGeo;
          htmlBuilder.builderCurrentWeather();
          htmlBuilder.builderFutureWeather(_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlWeatherFuture);
        } else {
          const urlCurrentWeather = `${_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlWeatherCurrent}Eng`;
          const dataGeo = await _api__WEBPACK_IMPORTED_MODULE_2__["default"].getGeo(urlCurrentWeather);
          const htmlBuilder = new _dom__WEBPACK_IMPORTED_MODULE_0__["default"]('Eng', dataGeo);
          _saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].itemWeatherCurrent = dataGeo;
          htmlBuilder.builderCurrentWeather();
          htmlBuilder.builderFutureWeather(_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlWeatherFuture);
        }
      }
    }
  });
  langEng[1].addEventListener('click', async (event) => {
    if (!event.target.classList.contains('chosen-Lang')) {
      event.target.classList.add('chosen-Lang');
      langEng[0].classList.remove('chosen-Lang');
      _saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].currentLang = 'Ru';
      if (document.querySelector('.result-Search')) { // если есть результат поиска
        const dataGeo = await _api__WEBPACK_IMPORTED_MODULE_2__["default"].getGeo(_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlGeo);
        const htmlBuilder = new _dom__WEBPACK_IMPORTED_MODULE_0__["default"]('Ru', dataGeo);
        htmlBuilder.builderSearch();
      }
    }
    if (document.querySelector('.section-currentWeather')) { // если есть открытая погода
      if (_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlCurrentWeather) {
        const urlCurrentWeather = `${_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlCurrentWeather}Ru`;
        const dataGeo = await _api__WEBPACK_IMPORTED_MODULE_2__["default"].getGeo(urlCurrentWeather);
        const htmlBuilder = new _dom__WEBPACK_IMPORTED_MODULE_0__["default"]('Ru', dataGeo);
        _saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].itemWeatherCurrent = dataGeo;
        htmlBuilder.builderCurrentWeather();
        htmlBuilder.builderFutureWeather(_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlWeatherFuture);
      } else {
        const urlCurrentWeather = `${_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlWeatherCurrent}Ru`;
        const dataGeo = await _api__WEBPACK_IMPORTED_MODULE_2__["default"].getGeo(urlCurrentWeather);
        const htmlBuilder = new _dom__WEBPACK_IMPORTED_MODULE_0__["default"]('Ru', dataGeo);
        _saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].itemWeatherCurrent = dataGeo;
        htmlBuilder.builderCurrentWeather();
        htmlBuilder.builderFutureWeather(_saves_values__WEBPACK_IMPORTED_MODULE_1__["default"].urlWeatherFuture);
      }
    }
  });
}


/***/ }),

/***/ "./src/assets/js/localStorage.js":
/*!***************************************!*\
  !*** ./src/assets/js/localStorage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLocalStorage)
/* harmony export */ });
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./src/assets/js/search.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./src/assets/js/lang.js");
/* harmony import */ var _saves_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saves_values */ "./src/assets/js/saves_values.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/assets/js/api.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./src/assets/js/dom.js");






async function getLocalStorage() {
  const savedValues = JSON.parse(localStorage.getItem('myValues'));
  const savedLang = JSON.parse(localStorage.getItem('lang'));


  const langEng = document.querySelectorAll('.lang span');
  if (savedLang === 'Eng') {
    langEng[0].classList.add('chosen-Lang');
    langEng[1].classList.remove('chosen-Lang');
    _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].currentLang = 'Eng';
  }

  if (savedValues.urlWeatherFuture) {
    if (savedValues.urlCurrentWeather) {
      const urlCurrentWeather = `${savedValues.urlCurrentWeather}${document.querySelector('.chosen-Lang').textContent}`;
      const dataGeo = await _api__WEBPACK_IMPORTED_MODULE_3__["default"].getGeo(urlCurrentWeather);
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].urlWeatherCurrent = savedValues.urlCurrentWeather;
      const htmlBuilder = new _dom__WEBPACK_IMPORTED_MODULE_4__["default"](document.querySelector('.chosen-Lang').textContent, dataGeo);
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].itemWeatherCurrent = dataGeo;
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].nameRu = savedValues.nameRu;
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].nameEng = savedValues.nameEng;
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].nameCountry = savedValues.nameCountry;
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].urlWeatherFuture = savedValues.urlWeatherFuture;
      htmlBuilder.builderCurrentWeather();
      htmlBuilder.builderFutureWeather(savedValues.urlWeatherFuture);
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].currentLang = document.querySelector('.chosen-Lang').textContent;
    } else {
      const urlCurrentWeather = `${savedValues.urlWeatherCurrent}${document.querySelector('.chosen-Lang').textContent}`;
      const dataGeo = await _api__WEBPACK_IMPORTED_MODULE_3__["default"].getGeo(urlCurrentWeather);
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].urlWeatherCurrent = savedValues.urlWeatherCurrent;
      const htmlBuilder = new _dom__WEBPACK_IMPORTED_MODULE_4__["default"](document.querySelector('.chosen-Lang').textContent, dataGeo);
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].itemWeatherCurrent = dataGeo;
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].nameRu = savedValues.nameRu;
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].nameEng = savedValues.nameEng;
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].nameCountry = savedValues.nameCountry;
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].urlWeatherFuture = savedValues.urlWeatherFuture;
      htmlBuilder.builderCurrentWeather();
      htmlBuilder.builderFutureWeather(savedValues.urlWeatherFuture);
      _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].currentLang = document.querySelector('.chosen-Lang').textContent;
    }
  }
}


/***/ }),

/***/ "./src/assets/js/saves_values.js":
/*!***************************************!*\
  !*** ./src/assets/js/saves_values.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const savesValues = {
  urlGeo: '',
  urlWeatherCurrent: '',
  itemWeatherCurrent: '',
  urlWeatherFuture: '',
  nameCountry: '',
  nameRu: '',
  nameEng: '',
  currentLang: '',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (savesValues);


/***/ }),

/***/ "./src/assets/js/search.js":
/*!*********************************!*\
  !*** ./src/assets/js/search.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/assets/js/dom.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/assets/js/api.js");
/* harmony import */ var _saves_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saves_values */ "./src/assets/js/saves_values.js");




function search() {
  const searchInput = document.querySelector('.search');
  const searchInputPic = document.querySelector('.search-pic');
  function checkLang() { // проверка текущего языка
    return document.querySelector('.chosen-Lang').textContent;
  }
  function clearSearch() { // очистка инпута
    searchInput.value = '';
  }
  async function getGeoWeather(value) { // проверка геолокации
    if (value.trim().length === 0) {
      const htmlBuilder = new _dom__WEBPACK_IMPORTED_MODULE_0__["default"](checkLang());
      htmlBuilder.incorrectValue();
      return false;
    }
    const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=0f0f05a27772edf9aeced21a5cb64568`;
    _saves_values__WEBPACK_IMPORTED_MODULE_2__["default"].urlGeo = urlGeo;
    const dataGeo = await _api__WEBPACK_IMPORTED_MODULE_1__["default"].getGeo(urlGeo);
    if (dataGeo.length === 0) {
      const htmlBuilder = new _dom__WEBPACK_IMPORTED_MODULE_0__["default"](checkLang());
      htmlBuilder.incorrectValue();
      return false;
    }
    const htmlBuilder = new _dom__WEBPACK_IMPORTED_MODULE_0__["default"](checkLang(), dataGeo);
    htmlBuilder.builderSearch();
    return dataGeo;
  }
  document.addEventListener('click', (event) => { // нажатие не на инпут
    if (event.target.className) {
      if ((event.target.className !== 'search') && (event.target.className !== 'search-pic')) {
        clearSearch();
      }
    } else {
      clearSearch();
    }
  });
  searchInput.addEventListener('keydown', (event) => { // при нажатие enter на инпуте
    if (event.keyCode === 13) {
      getGeoWeather(searchInput.value);
      event.preventDefault();
      searchInput.blur();
      clearSearch(event);
    }
  });
  searchInputPic.addEventListener('click', (event) => { // при нажатие на лупу
    getGeoWeather(searchInput.value);
    event.preventDefault();
    searchInput.blur();
    clearSearch(event);
  });
  // if (document.querySelector('.result-Search')) {
  //   const resultSearch = document.querySelector('.result-Search');
  //   resultSearch.addEventListener('click', (event) => {
  //     console.log('f')
  //   });
  // }
}


/***/ }),

/***/ "./src/assets/js/time.js":
/*!*******************************!*\
  !*** ./src/assets/js/time.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function time() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const date = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${year}-${month}-${date} ${hours}:${minutes}`;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (time);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sass/style.scss */ "./src/assets/sass/style.scss");
/* harmony import */ var _assets_js_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/search */ "./src/assets/js/search.js");
/* harmony import */ var _assets_js_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/lang */ "./src/assets/js/lang.js");
/* harmony import */ var _assets_js_saves_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/js/saves_values */ "./src/assets/js/saves_values.js");
/* harmony import */ var _assets_js_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/js/localStorage */ "./src/assets/js/localStorage.js");







(0,_assets_js_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_assets_js_search__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_assets_js_lang__WEBPACK_IMPORTED_MODULE_2__["default"])();
localStorage.clear();
window.addEventListener('beforeunload', () => {
  localStorage.setItem('myValues', JSON.stringify(_assets_js_saves_values__WEBPACK_IMPORTED_MODULE_3__["default"]));
  localStorage.setItem('lang', JSON.stringify(document.querySelector('.chosen-Lang').textContent));
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
