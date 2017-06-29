var canvas=document.getElementsByClassName("canvas");
var canvasA = document.getElementById("canvasA");
var contextA = canvasA.getContext("2d");

window.onload = function() {
	for(var i=1;i<=canvas.length;i++){
		var image = new Image();
		image.src = "img/head"+i+".png";
	}
	image.src = "img/head1.png";
	image.onload = function() {
		contextA.drawImage(image, 0, 0, canvasA.width, canvasA.height);
	}
}

function greyEffect() {
	var imageData = contextA.getImageData(0, 0, canvasA.width, canvasA.height);
	var pixelData = imageData.data;

	for(var i = 0; i < canvasB.width * canvasB.height; i++) {
		var r = pixelData[i * 4 + 0];
		var g = pixelData[i * 4 + 1];
		var b = pixelData[i * 4 + 2];

		var grey = r * 0.3 + g * 0.59 + b * 0.11;

		pixelData[i * 4 + 0] = grey;
		pixelData[i * 4 + 1] = grey;
		pixelData[i * 4 + 2] = grey;
	}

	contextA.putImageData(imageData, 0, 0, 0, 0, canvasB.width, canvasB.height);
}