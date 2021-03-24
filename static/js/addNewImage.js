var lastIndex = 0;
var usedImages = {};
var usedImagesCount = 0;
var imagesArray = [
	'axelAngle.png',
	'axles.png',
	'connector1.png',
	'connector1-1.png',
	'connector2.png',
	'connector2-1.png',
	'connector3.png',
	'connector3-1.png',
	'connector4.png',
	'connector4-1.png',
	'liftarm1.png',
	'liftarm2.png',
	'motor1.png',
	'motor2.png',
	'pin1.png',
	'pin2.png',
	'transGear36tooth.png',
	'transGear36tooth2.png'
];
function addRefImage (){
		console.log('inside add ref image')
		var theImage = document.getElementById('exampleimage');
   		var imgDir = './static/images/';

		var num = Math.floor(Math.random() * (imagesArray.length));
		if (!usedImages[num]){
			//document.canvas.src = imagesArray[num];
			console.log('do I get here')
			theImage.src = imgDir + imagesArray[num];
			theImage.alt = imagesArray[num]
			usedImages[num] = true;
			usedImagesCount++;
			if (usedImagesCount === imagesArray.length){
				usedImagesCount = 0;
				usedImages = {};
			}
		} else {
			addRefImage();
		}
	}