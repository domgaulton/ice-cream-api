const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

const iceCreams = [
  {
    name: `Netflix & Chilll'd™`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/netflix-chilld-detail-open.png',
    url: 'https://www.benjerry.com/flavors/netflix-and-chillld-ice-cream',
    date: new Date(2020, 02, 17),
    categories: ['OG'],
    description: `There's something for everyone to watch on Netflix & flavours for everyone to enjoy from Ben & Jerry's, so we've teamed up to bring you a chillaxing new creation that's certain to satisfy any sweet or salty snack craving. It's a flavourful world, and everyone is invited to grab a spoon.`,
    tasting_notes: `Pure bliss`,
    rating: 5,
  },{
    name: `Cone Together`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/cone-together-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/cone-together-ice-cream',
    date: new Date(2020, 02, 21),
    categories: ['OG'],
    description: 'When good things come together, great things happen. Take the chocolatey waffle cone pieces & caramelly swirls in this euphoric flavour. Or people coming together to demand justice for those seeking safety. Together we can make a difference. We can call on our leaders to protect & advance the rights of refugees & people seeking asylum.',
    tasting_notes: `Not biggest fan of the waffle pieces`,
    rating: 3,
  },{
    name: `Chocolate Cookie Dough`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/chocolate-cookie-dough-moophoria-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/chocolate-cookie-dough-moophoria',
    date: new Date(2020, 02, 24),
    categories: ['Moo-Phoria™'],
    description: `Our Flavor Gurus have concocted our Moo-Phoria™ to be full of the chunks and swirls you love with fewer calories than regular ice cream.`,
    tasting_notes: `Should have known, judging by the weight when I picked up the tub that good things weren't to come`,
    rating: 1,
  },{
    name: `Blondie Brownie`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/blondie-brownie-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/blondie-brownie-core',
    date: new Date(2020, 03, 02),
    categories: ['OG'],
    description: `A soft salted caramel core surrounded by chocolate & vanilla ice creams with chocolate brownie chunks & blondie brownie chunks`,
    tasting_notes: `Salted caramel and vanilla ice cream - what's not to like?`,
    rating: 4,
  },{
    name: 'Cookie Dough',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/cookie-dough-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/cookie-dough-ice-cream',
    date: new Date(2020, 03, 06),
    categories: ['OG'],
    description: `Vanilla ice cream with chunks of chocolate chip cookie dough and chocolatey chunks`,
    tasting_notes: `Classic and simple but nothing too exciting - perhaps a little sweet but you know what you're getting!`,
    rating: 3,
  },{
    name: 'Birthday Cake',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/birthday-cake-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/birthday-cake-ice-cream',
    date: new Date(2020, 03, 11),
    categories: ['OG'],
    description: `Vanilla Cake Batter Ice Cream with Pink Frosting & Strawberry Swirls and Cake Pieces`,
    tasting_notes: `Bit too sweet`,
    rating: 2,
  },{
    name: 'Phish Food',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/phish-food-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/phish-food-ice-cream',
    date: new Date(2020, 03, 11),
    categories: ['OG'],
    description: `Chocolate ice cream with marshmallow, caramel and chocolatey shaped fish`,
    tasting_notes: `Not the biggest fan of the marshmallow, chocolate ice cream combo`,
    rating: 2,
  },{
    name: 'Half Baked®',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/half-baked-detail.png',
    url: 'https://www.benjerry.com/flavors/half-baked-ice-cream',
    date: new Date(2020, 03, 19),
    categories: ['OG'],
    description: `Chocolate & Vanilla Ice Creams mixed with Gobs of Chocolate Chip Cookie Dough & Fudge Brownies`,
    tasting_notes: `Classic Cookie Dough and more!`,
    rating: 4,
  },{
    name: 'Caramel Chew Chew',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/caramel-chew-chew-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/caramel-chew-chew-ice-cream',
    date: new Date(2020, 03, 29),
    categories: ['OG'],
    description: `Caramel Ice Cream with a Caramel Swirl and Chocolatey Covered Caramel Chunks`,
    tasting_notes: `Sugary caramel and vanilla ice cream - yum!`,
    rating: 5,
  },{
    name: 'Peanut Butter Cup',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/peanut-butter-cup-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/peanut-butter-cup-ice-cream',
    date: new Date(2020, 03, 29),
    categories: ['OG'],
    description: `Peanut Butter Ice Cream with Peanut Butter Cups`,
    tasting_notes: `Slightly savoury peanut butter big cup chunks on vanilla`,
    rating: 4,
  },{
    name: 'Salted Caramel Brownie',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/topped-salted-caramel-brownie-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/salted-caramel-brownie-topped',
    date: new Date(2020, 04, 08),
    categories: ['OG'],
    description: `Vanilla ice cream with a salted caramel swirl, chocolate brownie pieces, chocolatey chunks and chocolatey topping.`,
    tasting_notes: `Lovely bits of fun surroudned by vanilla ice cream`,
    rating: 4,
  },{
    name: 'Baked Alaska',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/baked-alaska-detail-open.png',
    url: 'https://www.benjerry.co.uk/flavours/baked-alaska-ice-cream',
    date: new Date(2020, 04, 08),
    categories: ['OG'],
    description: `Vanilla ice cream with a marshmallow swirl and white polar bear shaped chunks`,
    tasting_notes: `Didn't think I would get on with it, but vanilla and bits of sugar is just too good!`,
    rating: 3,
  },{
    name: 'Chocolate Fudge Brownie',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/chocolate-fudge-brownie-detail-new.png',
    url: 'https://www.benjerry.co.uk/flavours/chocolate-fudge-brownie-ice-cream',
    date: new Date(2020, 04, 15),
    categories: ['OG'],
    description: `Chocolate ice cream with chocolate brownie pieces`,
    tasting_notes: `Didn't think I'd like it as much given the chocolate ice cream but rather surprised.`,
    rating: 3,
  },{
    name: 'Topped Chocolate Caramel Cookie Dough',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/topped-chocolate-caramel-cookie-dough-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/chocolate-caramel-cookie-dough-topped',
    date: new Date(2020, 04, 31),
    categories: ['OG'],
    description: `Chocolate ice cream with a caramel swirl, chunks of chocolate chip cookie dough, chocolatey chunks and chocolatey topping`,
    tasting_notes: `Enjoyed the topped chocolate more this time around but sadly the cookie dough and caramel still couldn't outweigh the rich chocolate ice cream.`,
    rating: 3,
  },{
    name: 'Sofa So Good Together',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/sofa-so-good-together-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/sofa-so-good-together-ice-cream',
    date: new Date(2020, 05, 02),
    categories: ['OG'],
    description: `Caramel Ice Cream with a Salted Caramel Swirl, Chocolate Brownies and Chocolate Cookies`,
    tasting_notes: `The classic OG flavours with salted caramel - what a combo!`,
    rating: 5,
  },{
    name: 'Karamel Sutra',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/karamel-sutra-detail-closed.png',
    url: 'https://www.benjerry.co.uk/flavours/karamel-sutra-core',
    date: new Date(2020, 05, 11),
    categories: ['OG'],
    description: `A core of soft caramel surrounded by chocolate & caramel ice creams with chocolatey chunks`,
    tasting_notes: `Nice bits of caramel and excellent vanilla but wasn't a fan of the chocolate ice cream!`,
    rating: 4,
  },{
    name: 'Peanut Butter & Cookies',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/peanut-butter-and-cookies-non-dairy-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/peanut-butter-and-cookies-non-dairy',
    date: new Date(2020, 05, 23),
    categories: ['Non-Diary'],
    description: `Vanilla non-dairy ice cream with chocolate sandwich cookies & crunchy peanut butter swirls`,
    tasting_notes: `Bought this as I couldn't find any new flavours but was amazed! The peanut butter has fat so it feels luxurious and the cookies are delcious!`,
    rating: 5,
  },{
    name: 'Poppin Popcorn',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/poppin-popcorn-moophoria-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/poppin-popcorn-moophoria',
    date: new Date(2020, 06, 01),
    categories: ['Moo-Phoria™'],
    description: `Buttery brown sugar ice cream with sweet and salty caramel swirl and chocolatey popcorn pieces`,
    tasting_notes: `Surprised as I disliked the previous Moo-Phoria™ but this was pretty good! The caramel and popcorn were a nice crunch but the ice cream still lacks (even if it is a good vanilla!)`,
    rating: 3,
  },{
    name: 'Chocolate Fudge Brownie',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/chocolate-fudge-brownie-non-dairy-detail.png',
    url: 'https://www.benjerry.com/flavors/chocolate-fudge-brownie-non-dairy',
    date: new Date(2020, 06, 04),
    categories: ['Non-Diary'],
    description: `Chocolate Non-Dairy Frozen Dessert with Fudge Brownies`,
    tasting_notes: `Not the best as it lacks the fat in normal ice cream. Thought it might be like Peanut Butter & Cookies but missed the mark!`,
    rating: 1,
  },{
    name: 'Chocolate Cherry Garcia',
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/chocolate-cherry-garcia-moophoria-detail-open.png',
    url: 'https://www.benjerry.co.uk/flavours/chocolate-cherry-garcia-moophoria',
    date: new Date(2020, 06, 09),
    categories: ['Moo-Phoria™'],
    description: `Chocolate Ice cream with cherries and chocolatey chunks`,
    tasting_notes: `Surprised with this as Moo-Phoria™ can be hit and miss.`,
    rating: 3,
  },{
    name: `Cookie Dough S'wich Up`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/cookie-dough-switch-up-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/cookie-dough-swich-up-wich',
    date: new Date(2020, 06, 12),
    categories: ['Remastered'],
    description: `Vanilla ice cream with chocolatey sandwich cookies and chunks of chocolate chip cookie dough and a chocolatey cookie swirl. Our legendary Cookie Dough flavour took us 5 years to perfect. 25 years on, we wondered how could we make it even cookier!`,
    tasting_notes: `Nothing too exciting here - the chocolate sandwich bits tasted a bit like Oreo but with a strange after taste.`,
    rating: 3,
  },{
    name: `Fairway to Heaven`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/fairway-to-heaven-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/fairway-to-heaven-ice-cream',
    date: new Date(2020, 06, 27),
    categories: ['Fairtrade'],
    description: `This caramelly new Fairtrade flavour magically descended down to us Earthlings from its cosmic existence to become the newest and chunkiest mayor of Caramelville.`,
    tasting_notes: `A very nice caramel flavour and a solid 4, but nothing particularly exciting from a new flavour in 2020.`,
    rating: 4,
  },{
    name: `Minter Wonderland`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/minter-wonderland-closed-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/chip-happens-ice-cream',
    date: new Date(2020, 10, 28),
    categories: ['Limited Edition'],
    description: `Mint Ice Cream with Chocolatey Chunks. Back by popular demand for the chilly season, one of Ben & Jerry's most wintry flavours...Minter Wonderland!`,
    tasting_notes: `Pretty plain mint flavour so wasn't too wowwed by this.`,
    rating: 3,
  },{
    name: `Chip Happens`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/chip-happens-opened-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/chip-happens-ice-cream',
    date: new Date(2021, 00, 02),
    categories: ['Limited Edition'],
    description: `A Cold Mess of Chocolate Ice Cream with Chocolatey Chips & Crunchy Potato Chip Swirls`,
    tasting_notes: `You wouldn't think that crisps go with ice cream but the salty crunchy texture and soft sweet ice cream are a winner!`,
    rating: 5,
  },{
    name: `Save our Swirled`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/save-our-swirled-non-dairy-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/save-our-swirled-now-non-dairy',
    date: new Date(2021, 00, 19),
    categories: ['Non-Diary'],
    description: `Coconut flavoured ice cream with caramel & cookie swirls and chocolatey pieces`,
    tasting_notes: `Far better than I thought it would be from a coconut ice cream! Nice and creamy with excellent cookie dough chunks.`,
    rating: 4,
  },{
    name: `Rain-dough Cookie Dough Twist`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/rain-dough-cookie-dough-twist-detail-open.png',
    url: 'https://www.benjerry.co.uk/flavours/rain-dough-cookie-dough-twist',
    date: new Date(2021, 01, 11),
    categories: ['Twist'],
    description: `Vanilla ice cream with a swirly rainbow sprinkled cookie dough centre and colourful chunks.`,
    tasting_notes: `Bit gimicky and not enough colourful chunks. Cookie dough in one spot and not spread around.`,
    rating: 3,
  },{
    name: `Cookie Vermont-ster Sundae`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/flavors-redesign-details-2016/ecommerce-assets/sundaes/cookie-vermont-ster-1.png',
    url: 'https://www.benjerry.co.uk/flavours/cookie-vermontster-sundae',
    date: new Date(2021, 02, 14),
    categories: ['Sundae'],
    description: `Sweet Cream Ice Cream with Chocolate Chip Cookies & Chocolatey Cookie Swirls, Topped with Creamy Whipped Ice Cream, Sea Salt Chocolatey Swirls & Chocolatey Chunks`,
    tasting_notes: `Delicious flavours and textures! Lots going on and a complete surprise!`,
    rating: 5,
  },{
    name: `Hazel-nuttin' but Chocolate Sundae`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/flavors-redesign-details-2016/ecommerce-assets/sundaes/Hazel-nuttin-but-Chocolate-1.png',
    url: 'https://www.benjerry.co.uk/flavours/hazel-nuttin-but-chocolate-sundae',
    date: new Date(2021, 03, 02),
    categories: ['Sundae'],
    description: `Chocolate Hazelnut Ice Cream with Brownie Pieces and Sea Salt Chocolatey Swirls, Topped with Creamy Whipped Ice Cream, Chocolatey Hazelnut Swirls and Chocolatey Chunks.`,
    tasting_notes: `Forgot what a treat hazelnut (think nutella) flavours in the ice cream were!`,
    rating: 5,
  },{
    name: `Caramel Brownie Party`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/caramel-brownie-party-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/caramel-brownie-party-ice-cream',
    date: new Date(2021, 06, 09),
    categories: ['Limited Edition'],
    description: `Caramel Ice Cream with Brownies, Chocolate Cookies & a Salted Caramel Swirl`,
    tasting_notes: `Really strong ice cream here, salted caramel swirls, chocolate cookies and brownies in a vanilla ice cream. Banging.`,
    rating: 5,
  },{
    name: `Coffee Coffee BuzzBuzzBuzz!`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/coffee-coffee-buzz-detail.png',
    url: 'https://www.benjerry.com/flavors/coffee-coffee-buzzbuzzbuzz-ice-cream',
    date: new Date(2021, 06, 19),
    categories: ['USA Only'],
    description: `Coffee Ice Cream with Espresso Bean Fudge Chunks`,
    tasting_notes: `Pretty decent coffee flavour but not an exciting Ben & Jerry's to write home about!`,
    rating: 3,
  },{
    name: `Vanilla Pecan Blondie`,
    brand: `Ben & Jerry's`,
    image: 'https://www.benjerry.co.uk/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/vanilla-pecan-blondie-detail.png',
    url: 'https://www.benjerry.co.uk/flavours/vanilla-pecan-blondie-ice-cream',
    date: new Date(2021, 07, 05),
    categories: [''],
    description: `Vanilla Ice Cream with a Salted Caramel Swirl, Caramelised Pecans and Blondie Brownie Chunks`,
    tasting_notes: `Bit of a plasticy taste and not much from the blondie brownie nor pecans`,
    rating: 2,
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
