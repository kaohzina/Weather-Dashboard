fetch('api.openweathermap.org/data/2.5/onecall?lat=30.489772&lon=-99.771335'
  )
  .then(function(response){ 
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });