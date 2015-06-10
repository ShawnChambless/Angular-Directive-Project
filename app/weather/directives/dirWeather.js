var app = angular.module('directivePractice');
app.directive('dirWeather', function(){
    return {
        scope: {
            currentUser: '=',
            weatherCall: '&'
        },
        templateUrl: 'app/weather/directives/dirWeather.html',
        controller: function($scope){
            $scope.$watch('currentUser', function() {
                $scope.weatherCall({city: $scope.currentUser.city})
                .then(function(data){
                        $scope.weather = data.weather;
                        $scope.temperature = data.temperature;
                    })
            })
        }
    }
});
