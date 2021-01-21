const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/search', (req,res)=>{
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
    .then(response=>{
        res.json(response.data.results)
    })
    .catch(error=>{
        console.log(error)
    })
})

router.get('/items/:id', (req,res)=>{
    axios.get(`https://api.mercadolibre.com/items/${req.params.id}`)
    .then(response=>{
        res.json(response.data)
    })
    .catch(error=>{
        console.log(error)
    })
})

module.exports = router