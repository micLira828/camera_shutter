var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.font = "30px Arial";
ctx.fillText("Hello World", window.innerWidth/2, window.innerHeight/2);