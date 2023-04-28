import countries from './countries';

class HtmlBuilder {
  constructor(lang, value) {
    this.lang = lang;
    this.value = value;
  }

  builderSearch() { // результат поиска
    const main = document.querySelector('.main');
    if (document.querySelector('.result-Search')) {
      document.querySelector('.result-Search').remove();
    }
    if (this.lang === 'Ru') {
      const ul = document.createElement('ul');
      ul.className = 'result-Search';
      main.prepend(ul);
      this.value.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'result-Search_item';
        li.setAttribute('data-lat', `${item.lat}`);
        li.setAttribute('data-lon', `${item.lon}`);
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
        li.className = 'result-Search_item';
        li.setAttribute('data-lat', `${item.lat}`);
        li.setAttribute('data-lon', `${item.lon}`);
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
