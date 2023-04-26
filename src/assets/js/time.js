function time() {
  const dateHeader = document.querySelector('.header-datetime');
  const now = new Date();
  dateHeader.textContent = `${now.getMonth()}/${now.getDate()}/${now.getFullYear()}`;
  dateHeader.dateTime = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
}

export default time;
