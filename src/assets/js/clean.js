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

export default cleanHTML;
