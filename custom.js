jQuery(document).ready(function() {
	
	var
		currentBackgroundImagesNumber = 1,
		maxBackgroundImages = 5,
		timer = setInterval(function() {

			currentBackgroundImagesNumber++;
			if ( currentBackgroundImagesNumber > 5 ) 
			{
				currentBackgroundImagesNumber = 1;
			}
			jQuery('body').css('backgroun-image', 'url(путь картинки/' + currentBackgroundImagesNumber + '.jpg)' );
		}, 3000);
});