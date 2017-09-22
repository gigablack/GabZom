"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = gabzom;
function gabzom(str) {
    var translation = str;
    // si la palabra termina en "ar" se le quitan esas dos letras
    if (str.toLowerCase().endsWith("ar")) {
        translation = str.slice(0, -2);
    }
    // si la palabra inicia con Z, se le añade "pe"  al final.
    if (str.toLowerCase().startsWith("z")) {
        translation += "pe";
    }
    // si la palabra traducida tiene 10 o mas letras se debe partir
    // en dos y unir con un guion medio.
    if (translation.length >= 10) {
        var firstHalf = translation.slice(0, Math.round(translation.length / 2));
        var secondHalf = translation.slice(Math.round(translation.length / 2));
        translation = firstHalf + "-" + secondHalf;
    }
    var reverse = function reverse(str) {
        var reverseStr = void 0;
        return reverseStr = str.split("").reverse().join("");
    };
    if (str.toLowerCase() == reverse(str).toLowerCase()) {
        var newStr = void 0;
        translation = [];
        newStr = str.split("");
        for (var i = 0; i < newStr.length; i++) {
            if (i % 2 == 0) {
                translation.push(newStr[i].toUpperCase());
            } else {
                translation.push(newStr[i].toLowerCase());
            }
        }
        translation = translation.join("");
    }
    return translation;
}