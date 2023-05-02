const http = require('http');

http.get('http://localhost:3001',res =>{
    const { statusCode } = res;
    console.log(statusCode,"stat");

    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
      //  const parsedData = JSON.parse(rawData); //in Case the data is json data
        console.log(rawData); //console.log(parsedData)
      } catch (e) {
        console.error(e.message);
      }
    });
})


/*
http.get('http://www.fiverr.com/',res =>{
    const { statusCode } = res;
    console.log(statusCode,"stat");

    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
      //  const parsedData = JSON.parse(rawData); //in Case the data is json data
        console.log(rawData); //console.log(parsedData)
      } catch (e) {
        console.error(e.message);
      }
    });
})*/