import {  } from "node:fs";
let fs = require('fs');
let filestring = fs.readFileSync("../categories.html").toString();
function SetName(){
    let CatName = document.getElementById("cat-name").value;
}
function SetCover(){
    let CatCover = document.getElementById("cat-cover").value;
}
function Finish(){
    filestring.replace(/<!--- extra --->/, '<div class="category-cont"> <img src="images/' + CatCover + '.png"><h1>' + CatName + '</h1></div>')}