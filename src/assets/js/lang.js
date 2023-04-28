import HtmlBuilder from './dom';
import savesValues from './saves_values';
import weatherAPI from './api';

export default function chooseLang() {
  const langEng = document.querySelectorAll('.lang span');

  langEng[0].addEventListener('click', async (event) => {
    if (!event.target.classList.contains('chosen-Lang')) {
      event.target.classList.add('chosen-Lang');
      langEng[1].classList.remove('chosen-Lang');
      if (document.querySelector('.result-Search')) {
        const dataGeo = await weatherAPI.getGeo(savesValues.urlGeo);
        const htmlBuilder = new HtmlBuilder('Eng', dataGeo);
        htmlBuilder.builderSearch();
      }
    }
  });
  langEng[1].addEventListener('click', async (event) => {
    if (!event.target.classList.contains('chosen-Lang')) {
      event.target.classList.add('chosen-Lang');
      langEng[0].classList.remove('chosen-Lang');
      if (document.querySelector('.result-Search')) {
        const dataGeo = await weatherAPI.getGeo(savesValues.urlGeo);
        const htmlBuilder = new HtmlBuilder('Ru', dataGeo);
        htmlBuilder.builderSearch();
      }
    }
  });
}
