const router = require('express').Router()
const db = require('../models')

//index
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

//post new
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

//new
router.get('/new', (req, res) => {
  res.render('places/new')
})

//show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

//
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

//delete
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

//edit
router.get('/:id/edit', (req, res) => {
  res.send('GET /places/:id/edit stub')
})

//rant post
router.post('/:id/rant', (req, res) => {
  res.send('POST /places/:id/rant stub')
})

//rant delete
router.delete('/:id/rant/:randId', (req, res) => {
  res.send('DELETE /places/:id/rant/:randId stub')
})

module.exports = router