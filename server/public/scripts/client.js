var myGalleryApp = angular.module('myGalleryApp', []);

myGalleryApp.controller('GalleryController', function(){
    var gallery = this;
    gallery.test = 'true';
    console.log('controller working');
    gallery.imageClick = function() {
        console.log('in image click');

    }










})