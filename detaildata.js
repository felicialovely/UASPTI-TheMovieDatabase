// function store() {
//     var id = document.getElementById
//     localStorage.setItem('uname', 'uaspti');
//     localStorage.setItem('pw', 'uaspti');
//     check();
// }
// store();

app.controller("moviedetail", function($scope, $http){
  let movieId = location.search.split('=')[1];
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  $http.get(`${api.endpoints.detail}${movieId}?api_key=${api.api_key}&language=${api.language}`)
  .then(function(response){
      $scope.movie = response.data;
      console.log($scope.movie);
      $scope.production_companies = $scope.movie.production_companies.map(v => v['name']).join(', ');
  });

})
