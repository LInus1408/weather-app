import './assets/sass/style.scss';

import search from './assets/js/search';
import chooseLang from './assets/js/lang';
import savesValues from './assets/js/saves_values';
import getLocalStorage from './assets/js/localStorage';

getLocalStorage();
search();
chooseLang();
localStorage.clear();
window.addEventListener('beforeunload', () => {
  localStorage.setItem('myValues', JSON.stringify(savesValues));
  localStorage.setItem('lang', JSON.stringify(document.querySelector('.chosen-Lang').textContent));
});
