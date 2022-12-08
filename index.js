const fs = require('node:fs');
const path = require("path");
const HTMLParser = require('node-html-parser');
const { marked } = require('marked');

const filePath = path.join(__dirname, '/input/mis-comentarios.html' );

console.log(filePath)
// read file 
fs.readFile(filePath, function (err, data){
    // take html data
    // make parse HTML to "DOM"
    const fakeDOM = HTMLParser.parse(data)
    // query select all 'li'
    const lis = fakeDOM.querySelectorAll('li')
    // convert to array
    const arrayOfHTMLs = Array.from(lis).map( item => item.innerHTML )
    console.log(typeof arrayOfHTMLs[0], arrayOfHTMLs[0].length)
    console.log(Math.max(...arrayOfHTMLs.map(item => item.length)))
    // filter by some length: longest is 159016. imma try 100k first to see how many there are
    // maybe i should filter by age first. for that maybe i should create an array of objects with properties: 
                //  date, link, if it's respuesta // Respondiste or Añadiste, rawText (with the /n)
    // const filteredArray = arrayOfHTMLs.filter(  )

})

