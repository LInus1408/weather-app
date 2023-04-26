import searchQueries from './searchQueries';
import HtmlBuilder from './dom';

export default async function search() {
  const searchInput = document.querySelector('.search');
  const searchInputPic = document.querySelector('.search-pic');
  async function clearSearch(event) { // очистка инпута
    event.preventDefault();
    searchInput.value = '';
    const ul = document.querySelector('.search-list');
    const listBuilder = new HtmlBuilder();
    listBuilder.deleteNode(ul);
  }
  searchInput.addEventListener('focus', () => { // при фокусе на input
    const listBuilder = new HtmlBuilder(searchInput);
    listBuilder.searchBuilder(searchQueries.queries);
  });
  searchInput.addEventListener('blur', (event) => { // потеря фокуса с инпута
    const searchList = document.querySelector('.search-list');
    if (searchList) {
      clearSearch(event);
    }
  });
  searchInput.addEventListener('keydown', (event) => { // при нажатие enter на инпуте
    if (event.keyCode === 13) {
      searchQueries.addQuery(searchInput.value);
      searchInput.blur();
    }
  });

  searchInputPic.addEventListener('click', () => { // при нажатие на картинку поиска
    searchQueries.addQuery(searchInput.value);
    searchInput.blur();
  });
}
