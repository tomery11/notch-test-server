
const express = require('express');
const router = express.Router();
const Helper = require('../helper/spider')


router.get('/', async (req, res) => {
    // const ans = await crawl()
    const ans = await Helper.foo()
    res.json({
        name: 'my-route',
        age: ans
    })
})
router.get('/:articleName', async (req, res) => {
    //validate input
    if (!Helper.isAlphaNumeric(req.params.articleName)){
        res.status(400).send('bad input')
        return
    }
    //get introduction
    try{
        const toReturn = await Helper.getData(req.params.articleName,'https://en.wikipedia.org/wiki/')
        res.status(200).send(toReturn)
    }catch (e){
        res.status(400).send(e)

    }


})


module.exports = router;
