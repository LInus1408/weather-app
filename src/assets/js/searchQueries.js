const searchQueries = {
  queries: [],

  addQuery(item) {
    if (this.queries.includes(item) === true) {
      return false;
    }
    if (this.queries.length > 30) {
      this.queries.shift();
    }
    return this.queries.push(item);
  },
};

export default searchQueries;
