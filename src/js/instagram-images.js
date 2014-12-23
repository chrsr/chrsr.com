(function () {
    var bg = document.getElementById('js-background'),
        credit = document.getElementById('js-credit'),
        images = [
            {
                image: 'http://distilleryimage2.ak.instagram.com/0f4a5bea758311e3859712a851556c4a_8.jpg',
                url: 'https://www.google.com.au/maps/place/1-25+Mountain+View+Rd,+Moorina+QLD+4506/@-27.147242,152.8659813,17z/data=!4m7!1m4!3m3!1s0x6b93f79ff5cb3903:0xe18ab16ce96170f3!2sMoorina+Rd,+Narangba+QLD+4504!3b1!3m1!1s0x6b93f79f88e890d7:0x249a6b65bd9404fb?hl=en',
                credit: '5th January 2014, Moorina Road, Moorina Qld.'
            },
            {
                image: 'http://distilleryimage4.ak.instagram.com/095254e2886411e380520e3a0c49f9b8_8.jpg',
                url: 'https://www.google.com.au/maps/place/Shorncliffe+Jetty/@-27.3238201,153.0845428,16z/data=!4m2!3m1!1s0x0000000000000000:0xa97e3c0fe9e82907?hl=en',
                credit: '29th January 2014, Foreshore &amp; Jetty, Sandgate, Qld.'
            },
            {
                image: 'http://distilleryimage3.ak.instagram.com/81458d4471a211e3ac99128fcb024f53_8.jpg',
                url: 'https://www.google.com.au/maps/place/Redcliffe+Jetty/@-27.225353,153.114704,17z/data=!3m1!4b1!4m2!3m1!1s0x6b93e6016223e911:0xd1fdb6a9ceaf4618',
                credit: '31st December 2013, Jetty, Redcliffe, Qld.'
            },
            {
                image: 'http://photos-a.ak.instagram.com/hphotos-ak-xpa1/10249190_266442303533944_9042926_n.jpg',
                url: 'https://www.google.com.au/maps/place/Browns+Creek+Rd,+Narangba+QLD+4504/data=!4m2!3m1!1s0x6b93fa1bed17a20b:0xcd0d5b84cf8a1218?sa=X&ei=Fr6YVMXaCpLq8AX-i4L4BQ&ved=0CBwQ8gEwAA',
                credit: '19th April 2014, Browns Creek Road, Narangba, Qld.'
            }
        ],
        random = (Math.floor(Math.random() * ((images.length - 1) - 0 + 1)) + 0);
    //bg.setAttribute('style', 'background-image: url(' + images[random].image + ')');
    //credit.setAttribute('href', images[random].url);
    //credit.innerHTML = images[random].credit;
}());