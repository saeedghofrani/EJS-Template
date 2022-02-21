"use strict";
const searchDatabase = require("../modules/search.js");
const source = require("../json/products.json");
const product = (req, res) => {
    if (req.query.data) {
        const searchContent = req.query.data;
        for (let i = 0; i < source.length; i++) {
            if (!searchDatabase(source[i], searchContent)) {
                res.write(source[i].id);
            }
        }
        res.end();
    }
    else {
        const url = req.params['num'];
        res.render('product', { data: source[url - 1] });
    }
}
module.exports = { product };