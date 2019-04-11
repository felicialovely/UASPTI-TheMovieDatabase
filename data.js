var app = angular.module("movieApp", []);

app.controller("movie", function($scope, $http){
    $http.get(`${api.endpoints.now_playing}?api_key=${api.api_key}&language=${api.language}&page=1`)
    .then(function(response){
      $scope.movies = [];
      // response.data.results.forEach(el => {
      //   el.overview = el.overview.slice(0, 100) + '...';
      // });
      for(i = 0; i < response.data.results.length / 4; i++) {
        $scope.movies[i] = response.data.results.slice(i * 4, i * 4 + 4);
        console.log($scope.movies);
      }
    });
})