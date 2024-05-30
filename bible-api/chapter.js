const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://catholic-bible.p.rapidapi.com/bible/chapter',
  params: {
    book_id: '50',
    chapter_num: '1'
  },
  headers: {
    'X-RapidAPI-Key': 'f85bc0f01cmsh6fbba8daa23c1cap148b28jsn2db4649e520a',
    'X-RapidAPI-Host': 'catholic-bible.p.rapidapi.com'
  }
};
(async ()=>{
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
})()
