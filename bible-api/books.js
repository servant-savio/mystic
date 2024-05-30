const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://catholic-bible.p.rapidapi.com/bible/books',
  headers: {
    'X-RapidAPI-Key': 'f85bc0f01cmsh6fbba8daa23c1cap148b28jsn2db4649e520a',
    'X-RapidAPI-Host': 'catholic-bible.p.rapidapi.com'
  }
};

(async () => {
  console.log("start");
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  console.log("end");
})();
