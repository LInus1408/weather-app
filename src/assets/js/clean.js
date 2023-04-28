function cleanHTML() {
  if (document.querySelector('.result-Search')) {
    document.querySelector('.result-Search').remove();
  }
  if (document.querySelector('.section-currentWeather')) {
    document.querySelector('.section-currentWeather').remove();
  }
}

export default cleanHTML;
