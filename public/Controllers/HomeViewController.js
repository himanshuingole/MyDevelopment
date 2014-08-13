angular.module('MyApp')
  .controller('HomeViewController', ['$scope', 'ShowService', function($scope, ShowService) {

	//Initialization 

   $scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];
    $scope.genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
      'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
      'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
      'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
      'Travel'];
    $scope.headingTitle = 'Top 12 Shows';
    $scope.shows = ShowService.query();

    //function definition 
    $scope.filterByGenre = function(genre)
     {
      $scope.shows = ShowService.query({ genre: genre });
      $scope.headingTitle = genre;
    };
    
    $scope.filterByAlphabet = function(char) 
    {
      $scope.shows = ShowService.query({ alphabet: char });
      $scope.headingTitle = char;
    };
  }]);