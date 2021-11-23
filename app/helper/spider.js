const cheerio = require('cheerio')
const axios = require('axios')

module.exports = {
    foo: function () {
        // whatever
        return 12;
    },
    getData: async function (query,url) {
        try{
            const response = await axios.get(url + query)
            let $ = cheerio.load(response.data);
            const paragraph = $('.mw-parser-output').children('table').first().next().text()

            const title = $('#firstHeading').text()
            const introObject =  {

                'scrapeDate': Math.floor(new Date().getTime() / 1000),
                'articleName': title,
                'introduction': paragraph
            }

            // console.log(paragraph)
            console.log(introObject)
            return introObject
        }catch (e){
            return e
        }


    },


    isAlphaNumeric: function (str) {
        let code, i, len;

        for (i = 0, len = str.length; i < len; i++) {
            code = str.charCodeAt(i);
            if (!(code === 45 || code === 95) && // '-', '_'
                !(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)
                return false;
            }
        }
        return true;
    }
};



