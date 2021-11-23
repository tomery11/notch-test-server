const Joi = require('joi')
const express = require('express');
const router = express.Router();
const Helper = require('../helper/spider')

const localDB = {}

router.post('/', async (req, res) => {
    const schema = Joi.object({
        userName: Joi.string().required(),
        language: Joi.string().min(2).required()
    })
    try {
        const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
    }
    catch (err) { }
    // const ans = await crawl()
    const ans = await Helper.foo()
    res.json({
        name: 'my-route',
        age: ans
    })
})


module.exports = router;
