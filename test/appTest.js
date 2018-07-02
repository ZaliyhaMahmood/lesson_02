const assert = require("assert")
const cheerio = require('cheerio')
const fs = require("fs")

describe("HTML-CSS TEST", function() {
    it("HTML H3", function(done){
        fs.readFile("./index.html", (err, data)=> {
            if(err)
                return done(err)
            let $ = cheerio.load(data)
            let h3 = $("html > body > h3")
            assert(h3, "Exists h3")
            assert(h3.length > 0, "h3 array")
            assert(h3[0].children, "h3 has text")
            assert(h3[0].children[0].data.toLowerCase() == "lecturers", "h3 textvalue")
            done()
        })
    })
    it("HTML IMG", function(done){
        fs.readFile("./index.html", (err, data)=> {
            if(err)
                return done(err)
            let $ = cheerio.load(data)
            let img = $("html > body > img")
            assert(img, "Exists img")
            assert(img.attr("src"), "img src exists")
            assert(img.attr("src") === "image.png", "img has correct src")
            assert(img.attr("alt") === "Green")
            assert(img.attr("height") === "10")
            assert(img.attr("width") === "10")

            done()
        })
    })


    it("CSS H3 COLOR", function(done){
        fs.readFile("./index.html", (err, data)=> {
            if(err)
                return done(err)
            let $ = cheerio.load(data)
            let h3 = $("html > body > h3")
            assert(h3, "Exists h3")
            assert(h3[0].attribs.style, "Style setted up")
            assert(h3[0].attribs.style == "color:red", "h3 red text")
            done()
        })
    })
    it("CSS IMG MARGIN", function(done){
        fs.readFile("./index.html", (err, data)=> {
            if(err)
                return done(err)
            let $ = cheerio.load(data)
            let img = $("html > body > img")
            assert(img, "Exists img")
            assert(img[0].attribs.style, "Style setted up")
            assert(img[0].attribs.style == "margin:10px", "img margin 10px")
            done()
        })
    })

      it("TABLE", function(done){
        fs.readFile("./index.html", (err, data)=> {
            if(err)
                return done(err)
            let $ = cheerio.load(data)
            let table = $("html > body > table")
            assert(table, "Exists table")
            assert(table.attr("border"), "border exists")
            assert(table.attr("border") === "1px solid black", "border values are correct")
            done()
        })
    })

        it("TABLE DATA", function(done){
        fs.readFile("./index.html", (err, data)=> {
            if(err)
                return done(err)
            let $ = cheerio.load(data)
            let headers = $("html > body > table > tr > th, tr")
            assert(headers, "Exists headers")
            done()
        })
    })
})