const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

const iceCreams = [
  {
    name: `Netflix & Chilll'd™`,
    image: 'https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/netflix-chilld-detail-open.png',
    url: 'https://www.benjerry.com/flavors/netflix-and-chillld-ice-cream',
    date: new Date(2020, 02, 17),
    categories: ['OG'],
    description: `There's something for everyone to watch on Netflix & flavours for everyone to enjoy from Ben & Jerry's, so we've teamed up to bring you a chillaxing new creation that's certain to satisfy any sweet or salty snack craving. It's a flavourful world, and everyone is invited to grab a spoon.`,
    tasting_notes: `Pure bliss`,
    rating: 5,
  },{
    name: `Cone Together`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/cone-together-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/cone-together-ice-cream',
    date: new Date(2020, 02, 21),
    categories: ['OG'],
    description: 'When good things come together, great things happen. Take the chocolatey waffle cone pieces & caramelly swirls in this euphoric flavour. Or people coming together to demand justice for those seeking safety. Together we can make a difference. We can call on our leaders to protect & advance the rights of refugees & people seeking asylum.',
    tasting_notes: `Not biggest fan of the waffle pieces`,
    rating: 3,
  },{
    name: `Moo-Phoria Chocolate Cookie Dough`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/chocolate-cookie-dough-moophoria-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/chocolate-cookie-dough-moophoria',
    date: new Date(2020, 02, 24),
    categories: ['Moo-Phoria™'],
    description: `Our Flavor Gurus have concocted our Moo-Phoria™ to be full of the chunks and swirls you love with fewer calories than regular ice cream.`,
    tasting_notes: `Should have known, judging by the weight when I picked up the tub that good things weren't to come`,
    rating: 1,
  },{
    name: `Blondie Brownie`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/blondie-brownie-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/blondie-brownie-core',
    date: new Date(2020, 03, 02),
    categories: ['OG'],
    description: `A soft salted caramel core surrounded by chocolate & vanilla ice creams with chocolate brownie chunks & blondie brownie chunks`,
    tasting_notes: `Salted caramel and vanilla ice cream - what's not to like?`,
    rating: 4,
  },{
    name: 'Cookie Dough',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/cookie-dough-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/cookie-dough-ice-cream',
    date: new Date(2020, 03, 06),
    categories: ['OG'],
    description: `Vanilla ice cream with chunks of chocolate chip cookie dough and chocolatey chunks`,
    tasting_notes: `Classic and simple`,
    rating: 3,
  },{
    name: 'Birthday Cake',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/birthday-cake-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/birthday-cake-ice-cream',
    date: new Date(2020, 03, 11),
    categories: ['OG'],
    description: `Vanilla Cake Batter Ice Cream with Pink Frosting & Strawberry Swirls and Cake Pieces`,
    tasting_notes: `Bit too sweet`,
    rating: 2,
  },{
    name: 'Phish Food',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/phish-food-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/phish-food-ice-cream',
    date: new Date(2020, 03, 11),
    categories: ['OG'],
    description: `Chocolate ice cream with marshmallow, caramel and chocolatey shaped fish`,
    tasting_notes: `Not the biggest fan of the marshmallow, chocolate ice cream combo`,
    rating: 2,
  },{
    name: 'Half Baked®',
    image: 'https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/half-baked-detail.png',
    url: 'https://www.benjerry.com/flavors/half-baked-ice-cream',
    date: new Date(2020, 03, 19),
    categories: ['OG'],
    description: `Chocolate & Vanilla Ice Creams mixed with Gobs of Chocolate Chip Cookie Dough & Fudge Brownies`,
    tasting_notes: `Classic Cookie Dough and more!`,
    rating: 4,
  },{
    name: 'Caramel Chew Chew',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/caramel-chew-chew-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/caramel-chew-chew-ice-cream',
    date: new Date(2020, 03, 29),
    categories: ['OG'],
    description: `Caramel Ice Cream with a Caramel Swirl and Chocolatey Covered Caramel Chunks`,
    tasting_notes: `Sugary caramel and vanilla ice cream - yum!`,
    rating: 5,
  },{
    name: 'Peanut Butter Cup',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/peanut-butter-cup-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/peanut-butter-cup-ice-cream',
    date: new Date(2020, 03, 29),
    categories: ['OG'],
    description: `Peanut Butter Ice Cream with Peanut Butter Cups`,
    tasting_notes: `Slightly savoury peanbut butter big cup chunks on vanilla`,
    rating: 4,
  },{
    name: 'Salted Caramel Brownie',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/topped-salted-caramel-brownie-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/salted-caramel-brownie-topped',
    date: new Date(2020, 04, 08),
    categories: ['OG'],
    description: `Vanilla ice cream with a salted caramel swirl, chocolate brownie pieces, chocolatey chunks and chocolatey topping.`,
    tasting_notes: `Lovely bits of fun surroudned by vanilla ice cream`,
    rating: 4,
  },{
    name: 'Baked Alaska',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/baked-alaska-detail-open.png',
    url: 'https://www.benjerry.co.uk/flavours/baked-alaska-ice-cream',
    date: new Date(2020, 04, 08),
    categories: ['OG'],
    description: `Vanilla ice cream with a marshmallow swirl and white polar bear shaped chunks`,
    tasting_notes: `Didn't think I would get on with it, but vanilla and bits of sugar is just too good!`,
    rating: 3,
  },{
    name: 'Chocolate Fudge Brownie',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/chocolate-fudge-brownie-detail-new.png',
    url: 'https://www.benjerry.co.uk/flavours/chocolate-fudge-brownie-ice-cream',
    date: new Date(2020, 04, 15),
    categories: ['OG'],
    description: `Chocolate ice cream with chocolate brownie pieces`,
    tasting_notes: `Didn't think I'd like it as much given the chocolate ice cream but rather surprised.`,
    rating: 3,
  },{
    name: 'Topped Chocolate Caramel Cookie Dough',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/topped-chocolate-caramel-cookie-dough-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/chocolate-caramel-cookie-dough-topped',
    date: new Date(2020, 04, 31),
    categories: ['OG'],
    description: `Chocolate ice cream with a caramel swirl, chunks of chocolate chip cookie dough, chocolatey chunks and chocolatey topping`,
    tasting_notes: `Enjoyed the topped chocolate more this time around but sadly the cookie dough and caramel still couldn't outweigh the rich chocolate ice cream.`,
    rating: 3,
  },{
    name: 'Sofa So Good Together',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/sofa-so-good-together-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/sofa-so-good-together-ice-cream',
    date: new Date(2020, 05, 02),
    categories: ['OG'],
    description: `Caramel Ice Cream with a Salted Caramel Swirl, Chocolate Brownies and Chocolate Cookies`,
    tasting_notes: `The classic OG flavours with salted caramel - what a combo!`,
    rating: 5,
  },{
    name: 'Karamel Sutra',
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/karamel-sutra-detail-closed.png',
    url: 'https://www.benjerry.co.uk/flavours/karamel-sutra-core',
    date: new Date(2020, 06, 11),
    categories: ['OG'],
    description: `A core of soft caramel surrounded by chocolate & caramel ice creams with chocolatey chunks`,
    tasting_notes: `Nice bits of caramel and excellent vanilla but wasn't a fan of the chocolate ice cream!`,
    rating: 4,
  },{
    name: 'Peanut Butter & Cookies (Non-Diary)',
    image: 'https://www.benjerry.co.uk/flavours/peanut-butter-and-cookies-non-dairy',
    url: 'https://www.benjerry.co.uk/flavours/peanut-butter-and-cookies-non-dairy',
    date: new Date(2020, 06, 23),
    categories: ['Non-Diary'],
    description: `Vanilla non-dairy ice cream with chocolate sandwich cookies & crunchy peanut butter swirls`,
    tasting_notes: `Bought this as I couldn't find any new flavours but was amazed! The peanut butter has fat so it feels luxurious and the cookies are delcious!`,
    rating: 5,
  }


];

// use it before all route definitions
app.use(cors({origin: '*'}));

app.get('/', function(req, res) {
  res.send(iceCreams)
});

app.get('/worst', function(req, res) {
  const worst = iceCreams.reduce(function(prev, current) {
    return (prev.rating < current.rating) ? prev : current
  })
  const worstRating = worst.rating;
  const worstList = iceCreams.filter(iceCream => {
    return iceCream.rating === worstRating
  })
  res.send(worstList);
})

app.get('/favourite', function(req, res) {
  const fav = iceCreams.reduce(function(prev, current) {
    return (prev.rating > current.rating) ? prev : current
  })
  const favRating = fav.rating;
  const favList = iceCreams.filter(iceCream => {
    return iceCream.rating === favRating
  })
  res.send(favList);
});

app.get('/recent', function(req, res) {
  const recent = iceCreams.reduce(function(prev, current) {
    return (prev.date > current.date) ? prev : current
  })
  res.send(recent);
});

app.listen(port, function() {
  console.log(`Server is listening on port ${port}...`);
});
