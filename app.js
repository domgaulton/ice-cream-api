const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const iceCreams = [
  {
    name: 'Cookie Dough',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/cookie-dough-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/cookie-dough-ice-cream',
    date: new Date(2020, 03, 06),
    rating: 3,
  },{
    name: 'Caramel Chew Chew',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/caramel-chew-chew-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/caramel-chew-chew-ice-cream',
    date: new Date(2020, 03, 29),
    rating: 5,
  },{
    name: `Netflix & Chilll'd™`,
    image: 'https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/netflix-chilld-detail-open.png',
    url: 'https://www.benjerry.com/flavors/netflix-and-chillld-ice-cream',
    date: new Date(2020, 02, 17),
    rating: 5,
  },{
    name: `Moo-Phoria Chocolate Cookie Dough`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/chocolate-cookie-dough-moophoria-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/chocolate-cookie-dough-moophoria',
    date: new Date(2020, 02, 24),
    rating: 1,
  }
];

// Netflix and Chill 5* - 17/03/2020
// Waffle cone together 3* - 21/04/2020
// Moophoria 1* - 24/03/2020
// Blondie Brownie core 4* - 02/04/2020
// Cookie Dough 4* - 06/04/2020
// Birthday Cake 2* - 11/04/2020
// Phish Food 2* - 11/04/2020
// Half Baked 3* - 19/04/2020
// Caramel chew chew 5* - 29/04/2020
// Peanut butter cup 4* - 29/04/2020
// Topped Salted Caramel Brownie 3* - 08/05/2020
// Baked Alaska 3* - 08/05/2020
// Chocolate Fudge Brownie 3* - 15/05/2020

app.get('/', function(req, res) {
  res.send(iceCreams)
});

app.get('/worst', function(req, res) {
  const worst = iceCreams.reduce(function(prev, current) {
    return (prev.rating < current.rating) ? prev : current
  }) //returns object
  const worstRating = worst.rating;
  const worstList = iceCreams.filter(iceCream => {
    return iceCream.rating === worstRating
  })
  res.send(worstList);
})

app.get('/favourite', function(req, res) {
  const fav = iceCreams.reduce(function(prev, current) {
    return (prev.rating > current.rating) ? prev : current
  }) //returns object
  const favRating = fav.rating;
  const favList = iceCreams.filter(iceCream => {
    return iceCream.rating === favRating
  })
  res.send(favList);
});

app.get('/recent', function(req, res) {
  const recent = iceCreams.reduce(function(prev, current) {
    return (prev.date > current.date) ? prev : current
  }) //returns object
  res.send(recent);
});

app.listen(3000, function() {
  console.log("Server is listening on port 3000...");
});

app.post('/dogs', function(req, res) {
  var dog = req.body;
  console.log(dog);
  dogsArr.push(dog);
  res.send("Dog added!");
});