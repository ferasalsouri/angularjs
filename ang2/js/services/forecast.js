app.factory('forecast', ['$http', function ($http) {

    return $http.get('https://content.codecademy.com/courses/ltp4/forecast-api/forecast.json')
        .success((data) => data)
        .error((err) => err);

}]);