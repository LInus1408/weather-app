import HtmlBuilder from './dom';
import weatherAPI from './api';
import savesValues from './saves_values';

export default function search() {
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
      const htmlBuilder = new HtmlBuilder(checkLang());
      htmlBuilder.incorrectValue();
      return false;
    }
    const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=0f0f05a27772edf9aeced21a5cb64568`;
    savesValues.urlGeo = urlGeo;
    const dataGeo = await weatherAPI.getGeo(urlGeo);
    if (dataGeo.length === 0) {
      const htmlBuilder = new HtmlBuilder(checkLang());
      htmlBuilder.incorrectValue();
      return false;
    }
    const htmlBuilder = new HtmlBuilder(checkLang(), dataGeo);
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
