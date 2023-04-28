const weatherAPI = {
  async getGeo(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  },
};

export default weatherAPI;
