app.directive('infiniteList', function($q){
    return function(scope, element, attrs){
        scope.items = [];
        scope.loadAmount = 4;
        var caption = attrs.infiniteList;

        scope.loadMore = function(){
            var currentAmount = scope.items.length;

//            console.log('loading more for ' + caption + '. current total: ' + currentAmount);

            for(var i=currentAmount; i<currentAmount+scope.loadAmount; i++){
                scope.items.push(caption + ' ' + i);
            }
        };

        scope.loadMore();
    }
});