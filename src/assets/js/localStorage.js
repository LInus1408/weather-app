import search from './search';
import chooseLang from './lang';
import savesValues from './saves_values';
import weatherAPI from './api';
import HtmlBuilder from './dom';

export default async function getLocalStorage() {
  try {
    const savedValues = JSON.parse(localStorage.getItem('myValues'));
      const savedLang = JSON.parse(localStorage.getItem('lang'));
      const langEng = document.querySelectorAll('.lang span');
      if (savedLang === 'Eng') {
        langEng[0].classList.add('chosen-Lang');
        langEng[1].classList.remove('chosen-Lang');
        savesValues.currentLang = 'Eng';
      }
      if (savedValues.urlWeatherFuture) {
        if (savedValues.urlCurrentWeather) {
          const urlCurrentWeather = `${savedValues.urlCurrentWeather}${document.querySelector('.chosen-Lang').textContent}`;
          const dataGeo = await weatherAPI.getGeo(urlCurrentWeather);
          savesValues.urlWeatherCurrent = savedValues.urlCurrentWeather;
          const htmlBuilder = new HtmlBuilder(document.querySelector('.chosen-Lang').textContent, dataGeo);
          savesValues.itemWeatherCurrent = dataGeo;
          savesValues.nameRu = savedValues.nameRu;
          savesValues.nameEng = savedValues.nameEng;
          savesValues.nameCountry = savedValues.nameCountry;
          savesValues.urlWeatherFuture = savedValues.urlWeatherFuture;
          htmlBuilder.builderCurrentWeather();
          htmlBuilder.builderFutureWeather(savedValues.urlWeatherFuture);
          savesValues.currentLang = document.querySelector('.chosen-Lang').textContent;
        } else {
          const urlCurrentWeather = `${savedValues.urlWeatherCurrent}${document.querySelector('.chosen-Lang').textContent}`;
          const dataGeo = await weatherAPI.getGeo(urlCurrentWeather);
          savesValues.urlWeatherCurrent = savedValues.urlWeatherCurrent;
          const htmlBuilder = new HtmlBuilder(document.querySelector('.chosen-Lang').textContent, dataGeo);
          savesValues.itemWeatherCurrent = dataGeo;
          savesValues.nameRu = savedValues.nameRu;
          savesValues.nameEng = savedValues.nameEng;
          savesValues.nameCountry = savedValues.nameCountry;
          savesValues.urlWeatherFuture = savedValues.urlWeatherFuture;
          htmlBuilder.builderCurrentWeather();
          htmlBuilder.builderFutureWeather(savedValues.urlWeatherFuture);
          savesValues.currentLang = document.querySelector('.chosen-Lang').textContent;
        }
      }
  } catch {
    console.log('');
  }
}
