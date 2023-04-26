class HtmlBuilder {
  constructor(value) {
    this.value = value;
  }

  searchBuilder(elements) {
    const ul = document.createElement('ul');
    ul.className = 'search-list';
    this.value.after(ul);

    elements.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'search-item';
      li.textContent = item;
      ul.prepend(li);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  deleteNode(element) {
    element.remove();
  }
}

export default HtmlBuilder;
