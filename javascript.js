// Use JSON to create a collection of “items”, displaying them in a structured manner on your page. Each item must have at least three pieces of information or data that are used when displaying- text, images, numbers, colors, etc…

let title = document.getElementById('title');
let vid1 = document.getElementById('vid1');
let vid2 = document.getElementById('vid2');
let vid3 = document.getElementById('vid3');
let vid4 = document.getElementById('vid4');

let vid1JSON = {
	"name" : "Miami",
	"video" : "miami.mov",
	"year" : 2023,
}

let vid2JSON = {
	"name" : "Brooklyn",
	"video" : "IMG_3025.mov",
	"year" : 2024,
}

let vid3JSON = {
	"name" : "WSP",
	"video" : "IMG_1368.mov",
	"year" : 2024,
}

let vid4JSON = {
	"name" : "D.C.",
	"video" : "MVI_1325.mov",
	"year" : 2024,
}

let styleJSON = {
	"color" : "#d3d3d3",
	"font" : "sans-serif",
	"titlesize" : "50px",
	"namesize" : "20px",
	"padding" : "20px",
	"width" : "290px",
}

printvid1(vid1JSON['name'] + " — " + vid1JSON["year"] + "<p><video src=" + vid1JSON['video'] + " controls height='500'></p>");

function printvid1(incoming) {
	vid1.innerHTML = incoming;
}

printvid2(vid2JSON['name'] + " — " + vid2JSON["year"] + "<p><video src=" + vid2JSON['video'] + " controls height='500'></p>");

function printvid2(incoming) {
	vid2.innerHTML = incoming;
}

printvid3(vid3JSON['name'] + " — " + vid3JSON["year"] + "<p><video src=" + vid3JSON['video'] + " controls height='500'></p>");

function printvid3(incoming) {
	vid3.innerHTML = incoming;
}

printvid4(vid4JSON['name'] + " — " + vid4JSON["year"] + "<p><video src=" + vid4JSON['video'] + " controls height='500'></p>");

function printvid4(incoming) {
	vid4.innerHTML = incoming;
}

title.style.fontFamily = styleJSON["font"];
title.style.fontSize = styleJSON["titlesize"];
title.style.padding = styleJSON["padding"];

maindiv.style.fontFamily = styleJSON["font"];
maindiv.style.backgroundColor = styleJSON["color"];
maindiv.style.padding = styleJSON["padding"];
maindiv.style.display = "flex";
maindiv.style.justifyContent = "space-evenly";
maindiv.style.fontSize = styleJSON["namesize"];

vid1.style.width = styleJSON["width"];
vid2.style.width = styleJSON["width"];
vid3.style.width = styleJSON["width"];
vid4.style.width = styleJSON["width"];