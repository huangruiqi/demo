window.onload = function() {
	document.getElementById('pano').addEventListener('change', upload, false);
};

	//转base64码
	/*var base64;
	var img = "sun.jpg";//imgurl 就是你的图片路径  

	function getBase64Image(img) {  
	     var canvas = document.createElement("canvas");  
	     canvas.width = img.width;  
	     canvas.height = img.height;  
	     var ctx = canvas.getContext("2d");  
	     ctx.drawImage(img, 0, 0, img.width, img.height);  
	     var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();  
	     var dataURL = canvas.toDataURL("image/"+ext);  
	     return dataURL;  
	}  

	var image = new Image();  
	image.src = img;  
	image.onload = function(){  
	  base64 = getBase64Image(image);  
	  //console.log(base64);  
	}*/
// Load a panorama stored on the user's computer
function upload() {
	// Retrieve the chosen file and create the FileReader object
	//console.log(sun.jpg);
	var file = document.getElementById('pano').files[0];
	var reader = new FileReader();  
	reader.onload = function() {
		var div = document.getElementById('your-pano');
		//console.log(reader.result);

		var PSV = new PhotoSphereViewer({
			// Panorama, given in base 64
			panorama: reader.result,
			// Container
			container: div,

			// Deactivate the animation
			time_anim: false,

			// Display the navigation bar
			navbar: true,

			// Resize the panorama
			size: {
				width: '100%',
				height: '500px'
			}
		});
		//console.log(reader.result);
	};

	reader.readAsDataURL(file);
}
