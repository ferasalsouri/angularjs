app.factory('photos',['$http',function ($http) {
    return $http.get('https://content.codecademy.com/courses/ltp4/photos-api/photos.json')
        .success((data)=>data)
        .error((err)=>err);
}]);