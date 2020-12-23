const Key = require("./keys");

const frequencyFromA4 = (n) => 440.0 * Math.pow(2, n/12.0);

const A3 = new Key(document.getElementById('A3'), frequencyFromA4(-12));
const A3sB3b = new Key(document.getElementById('A3#/B3b'), frequencyFromA4(-11));
const B3 = new Key(document.getElementById('B3'), frequencyFromA4(-10));
const C4 = new Key(document.getElementById('C4'), frequencyFromA4(-9));
const C4sD4b = new Key(document.getElementById('C4#/D4b'), frequencyFromA4(-8));
const D4 = new Key(document.getElementById('D4'), frequencyFromA4(-7));
const D4sE4b = new Key(document.getElementById('D4#/E4b'), frequencyFromA4(-6));
const E4 = new Key(document.getElementById('E4'), frequencyFromA4(-5));
const F4 = new Key(document.getElementById('F4'), frequencyFromA4(-4));
const F4sG4b = new Key(document.getElementById('F4#/G4b'), frequencyFromA4(-3));
const G4 = new Key(document.getElementById('G4'), frequencyFromA4(-2));
const G4sA4b = new Key(document.getElementById('G4#/A4b'), frequencyFromA4(-1));
const A4 = new Key(document.getElementById('A4'), frequencyFromA4(0));
const A4sB4b = new Key(document.getElementById('A4#/B4b'), frequencyFromA4(1));
const B4 = new Key(document.getElementById('B4'), frequencyFromA4(2));
const C5 = new Key(document.getElementById('C5'), frequencyFromA4(3));
const C5sD5b = new Key(document.getElementById('C5#/D5b'), frequencyFromA4(4));
const D5 = new Key(document.getElementById('D5'), frequencyFromA4(5));