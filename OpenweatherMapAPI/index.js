let loctaion = 'jalandhar'
const url = `https://apis.scrimba.com/openweathermap/data/2.5/weather?q=${loctaion}&units=metric` ;

fetch(url).then(response=>response.json())
        .then(data =>{
            console.log(data);
        } )