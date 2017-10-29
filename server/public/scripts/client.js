var myGalleryApp = angular.module('myGalleryApp', []);

myGalleryApp.controller('GalleryController', function(){
    var gallery = this;
    gallery.test = 'true';
    console.log('controller working');

    var image1 = {
        path: 'images/heather_and_emma.jpg', 
        description: 'this is the image description.',
        showImage: true,
        showDescription: false,
        likes: 0, 
        views: 0,
        viewsToShow: 0
    }

    var image2 = {
        path: 'images/pride.jpg',
        description: 'another description!',
        showImage: true,
        showDescription: false,
        likes: 0,
        views: 0,
        viewsToShow: 0
    }

    gallery.images = [image1, image2]

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