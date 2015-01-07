(function () {
    var bg = document.getElementById('js-background'),
        images = [
            {
                image: 'http://distilleryimage2.ak.instagram.com/0f4a5bea758311e3859712a851556c4a_8.jpg'
            },
            {
                image: 'http://distilleryimage4.ak.instagram.com/095254e2886411e380520e3a0c49f9b8_8.jpg'
            },
            {
                image: 'http://distilleryimage3.ak.instagram.com/81458d4471a211e3ac99128fcb024f53_8.jpg'
            },
            {
                image: 'http://photos-a.ak.instagram.com/hphotos-ak-xpa1/10249190_266442303533944_9042926_n.jpg'
            }
        ],
        random = (Math.floor(Math.random() * ((images.length - 1) - 0 + 1)) + 0);
    //bg.setAttribute('style', 'background-image: url(' + images[random].image + ')');
}());