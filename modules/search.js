"use strict";
let search = (obj, SearchString) => {
    // let base;
    // if (SearchString.length > 1) {
    //     console.log(SearchString[0]);
    //     switch (SearchString[0]) {
    //         case "نام":
    //             base = 'title';
    //             break;
    //         case "سایز":
    //             base = "size";
    //             break;
    //         case "رنگ":
    //             base = "color";
    //             break;
    //         case "جنس":
    //             base = "material";
    //             break;
    //         case "قیمت":
    //             base = "price";
    //             break;
    //         default:
    //             break;
    //     }            console.log(base);
    //     if (obj[`${base}`].search(SearchString[1].trim()) >= 0) {
    //         console.log('salam man injam');
    //         return true;
    //     }
    //     return false;
    // }
    if (obj.title.search(SearchString) >= 0 ||
        obj.color.search(SearchString) >= 0 ||
        obj.size.search(SearchString) >= 0 ||
        obj.material.search(SearchString) >= 0 ||
        obj.price.search(SearchString) >= 0) {
        return true;
    }
    return false;
};
module.exports = search;