var myGalleryApp = angular.module('myGalleryApp', []);

myGalleryApp.controller('GalleryController', function(){
    var gallery = this;
    gallery.test = 'true';
    console.log('controller working');

    gallery.images = [image1, image2, image3]

    gallery.styleChange = "myStyle={'font-family': 'Georgia'}"

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