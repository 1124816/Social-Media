var app = angular.module('chat', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
    
  $stateProvider
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });
    
  $urlRouterProvider.otherwise('home');
}]);

app.factory('posts', [function(){
  var o = {
    posts: [ 
  {title: 'post 1', upvotes: 5, link: ''},
  {title: 'post 2', upvotes: 2, link: ''},
  {title: 'post 3', upvotes: 15, link: ''},
  {title: 'post 4', upvotes: 9, link: ''},
  {title: 'post 5', upvotes: 4, link: ''}]
  };
  return o;
}]);

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.posts = posts.posts;
  
  
  $scope.addPost = function(){
    if($scope.title != "" && $scope.title) {
      $scope.posts.push({title: $scope.title, upvotes: 0, link: $scope.link});
      $scope.title = "";
      $scope.link = "";
    };
  };
  
  $scope.upvote = function(post){
    post.upvotes+=1;  
  };
  
  
}]);

app.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){
  $scope.post = posts.posts[$stateParams.id];
  
  
}]);