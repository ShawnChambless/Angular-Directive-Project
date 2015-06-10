var app = angular.module('directivePractice');

app.directive('dirDisplay', function() {
    return {
        templateUrl: 'app/home/directives/displayTmpl.html',
        scope: {
            setUser: '&',
            user: '='
        },
        link: function(scope, elem, attr) {
            elem.on('click', function() {
                scope.show = !scope.show;
                scope.setUser({user: scope.user});
                scope.$apply();
            })
        }
    };
})
