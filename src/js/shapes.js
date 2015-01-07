(function () {
    function randomNumber() {
        return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    }
    function randomRGBA() {
        return randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ', 0.4';
    }
    var max = 50;
    var left = -200;
    var increment = 47;
    for( var i = 0; i < max; i++) {
        var el = document.createElement("div");
        el.setAttribute('class', 'shape');
        el.style.left = (left) + 'px';
        el.style.backgroundColor = 'rgba(' + randomRGBA() + ')';
        document.getElementById('shapes').appendChild(el);
        left += increment;
    }
    setInterval(function() {
        var els = document.querySelectorAll('.shape');
        var max = els.length;
        els[Math.floor(Math.random() * (max - 0 + 1)) + 0].style.backgroundColor = 'rgba(255, 255, 255, 0)';
        if (max === 0) {
            document.querySelector('body').style.backgroundColor = 'rgba(255, 255, 255, 0)';
        }
    }, 20);
}());