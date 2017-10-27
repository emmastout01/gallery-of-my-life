var myGalleryApp = angular.module('myGalleryApp', []);

myGalleryApp.controller('GalleryController', function(){
    var gallery = this;
    gallery.test = 'true';
    console.log('controller working');

    var image1 = {
        path: 'images/heather_and_emma.jpg', 
        description: 'this is the image description.',
        showImage: true,
        showDescription: false
    }

    var image2 = {
        path: 'images/pride.jpg',
        description: 'another description!',
        showImage: true,
        showDescription: false
    }

    gallery.images = [image1, image2]
    
    gallery.showImage = function(image) {
        
    }
   

    gallery.imageClick = function(image) {
        console.log('in image click');
        image.showDescription =! image.showDescription;
        image.showImage =! image.showImage;
    }




})

/*
Then when the image is clicked on, the description is shown instead of the image. 
To do this, in the image clicked function I need to change the display. I could hide the image (image.path), 
and show the description 
*/ 