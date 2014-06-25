app.directive('appFiller', function(){
    return {
        scope: {
            appFillerBtnFn: '&appFillerBtnFn',
            appFillerList: '=appFiller'
        },
        template:
            '<div class="row" data-infinite-scroll="loadMore()" data-infinite-scroll-distance="3"' +
            '   data-infinite-scroll-container="#main" data-infinite-scroll-parent>' +
            '   <div data-ng-repeat="item in appFillerList" class="col-xs-3">' +
            '       <div class="item" data-ng-bind="item"></div>' +
            '   </div>' +
            '   <div class="col-xs-6 col-xs-offset-3"><button class="btn col-xs-12" data-ng-click="doIt()">Load more</button></div>' +
            '</div>',
        link: function(scope, element, attrs, appListCtrl){
            scope.doIt = function(){
                scope.$eval(scope.appFillerBtnFn);
            }
        }
    };
});