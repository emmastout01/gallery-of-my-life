var myGalleryApp = angular.module('myGalleryApp', []);

myGalleryApp.controller('GalleryController', function(){
    var gallery = this;
    gallery.test = 'true';
    console.log('controller working');

    gallery.images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]

    gallery.imageClick = function(image) {
        image.showDescription =! image.showDescription;
        image.showImage =! image.showImage;
        image.views ++;
        if (image.views % 2 !== 0) {
            image.viewsToShow ++;
        }
    }

    gallery.likeBtnClick = function(image) {
        image.likes ++;
        }
})