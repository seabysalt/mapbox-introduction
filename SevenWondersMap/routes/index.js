const express = require('express');
const router  = express.Router();
const Place   = require('../models/Place');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/api/places', (req, res, next) => {
  Place.find({}).then(places=>{
  res.json(places)
  })
})

router.post('/', (req, res, next) => {
  const { name, image, longitude, latitude } = req.body;
  const newPlace = {
    name, 
    imageUrl: image, 
    location: {
      coordinates: [longitude,latitude]
    }
  }
  
  Place.create(newPlace)
  .then((newPlace) => { 
    console.log(newPlace)
    res.redirect('/')
  })
  .catch(err => console.log(err))
})

module.exports = router;
