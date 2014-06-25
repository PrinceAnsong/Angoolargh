app.animation('.page', function(){
    return {
        leave: function(element, done){
            TweenMax.fromTo(element, 0.4, {opacity: 1}, {opacity: 0, onComplete: done});
        },
        enter: function(element, done){
            TweenMax.fromTo(element, 0.8, {opacity: 0}, {opacity: 1, onComplete: done});
        }
    };
});