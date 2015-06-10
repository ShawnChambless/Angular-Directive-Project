var app = angular.module('directivePractice');

app.controller('homeCtrl', function($scope, $http, $q) {
    $scope.users =[
        {
            name: 'Geoff McMammy',
            age: 43,
            email: 'geofdude@gmail.com',
            city: "Provo"
        },
        {
          name: "Frederick Deeder",
          age: 26,
          email: "fredeed@gmail.com",
          city: "Austin"
        },
        {
          name: "Spencer Rentz",
          age: 35,
          email: "spencerrentz@gmail.com",
          city: "Sacramento"
        },
        {
          name: "Geddup Ngo",
          age: 43,
          email: "geddupngo@gmail.com",
          city: "Orlando"
        },
        {
          name: "Donst Opbie Leevin",
          age: 67,
          email: "gernee@gmail.com",
          city: "Phoenix"
        }
    ];
    $scope.currentUser = $scope.users[0];
    $scope.setUser = function(user){
       $scope.currentUser = user;
   };
    $scope.getWeather = function(city) {
        var dfd = $q.defer();
         $http ({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial'
        }).then(function(data) {
            console.log(data)
            dfd.resolve({
                weather: data.data.weather[0].description,
                temperature: Math.round(data.data.main.temp)
            });
        })
        return dfd.promise;
    }
})
