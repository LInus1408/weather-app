import HtmlBuilder from './dom';
import savesValues from './saves_values';
import weatherAPI from './api';

export default function chooseLang() {
  const langEng = document.querySelectorAll('.lang span');

  langEng[0].addEventListener('click', async (event) => {
    if (!event.target.classList.contains('chosen-Lang')) {
      event.target.classList.add('chosen-Lang');
      langEng[1].classList.remove('chosen-Lang');
      savesValues.currentLang = 'Eng';
      if (document.querySelector('.result-Search')) { // если есть результат поиска
        const dataGeo = await weatherAPI.getGeo(savesValues.urlGeo);
        const htmlBuilder = new HtmlBuilder('Eng', dataGeo);
        htmlBuilder.builderSearch();
      }
      if (document.querySelector('.section-currentWeather')) { // если есть открытая погода
        const urlCurrentWeather = `${savesValues.urlCurrentWeather}Eng`;
        const dataGeo = await weatherAPI.getGeo(urlCurrentWeather);
        const htmlBuilder = new HtmlBuilder('Eng', dataGeo);
        savesValues.itemWeatherCurrent = dataGeo;
        htmlBuilder.builderCurrentWeather();
        htmlBuilder.builderFutureWeather(savesValues.urlWeatherFuture);
      }
    }
  });
  langEng[1].addEventListener('click', async (event) => {
    if (!event.target.classList.contains('chosen-Lang')) {
      event.target.classList.add('chosen-Lang');
      langEng[0].classList.remove('chosen-Lang');
      savesValues.currentLang = 'Ru';
      if (document.querySelector('.result-Search')) { // если есть результат поиска
        const dataGeo = await weatherAPI.getGeo(savesValues.urlGeo);
        const htmlBuilder = new HtmlBuilder('Ru', dataGeo);
        htmlBuilder.builderSearch();
      }
    }
    if (document.querySelector('.section-currentWeather')) { // если есть открытая погода
      const urlCurrentWeather = `${savesValues.urlCurrentWeather}Ru`;
      const dataGeo = await weatherAPI.getGeo(urlCurrentWeather);
      const htmlBuilder = new HtmlBuilder('Ru', dataGeo);
      savesValues.itemWeatherCurrent = dataGeo;
      htmlBuilder.builderCurrentWeather();
      htmlBuilder.builderFutureWeather(savesValues.urlWeatherFuture);
    }
  });
}
