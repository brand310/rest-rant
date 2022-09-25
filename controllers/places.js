const router = require('express').Router()

// GET /places
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: "images/emy-XoByiBymX20-unsplash.jpg"
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: "images/coffee-1711012_1280.jpg"
    }]      
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router