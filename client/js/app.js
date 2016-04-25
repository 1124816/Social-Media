var app = angular.module('chat', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'template/home.html',
      controller: 'MainCtrl'
    });
    
  $stateProvider
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'template/posts.html',
      controller: 'PostsCtrl'
    });
    
  $urlRouterProvider.otherwise('home');
}]);

app.factory('posts', [function(){
  var o = {
    posts: [ 
  {title: 'post 1', upvotes: 5, link: '',   comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]},
  {title: 'post 2', upvotes: 2, link: '',   comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]},
  {title: 'post 3', upvotes: 15, link: '',   comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]},
  {title: 'post 4', upvotes: 9, link: '',   comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]},
  {title: 'post 5', upvotes: 4, link: '',   comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]}
  ]
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
  
    $scope.upvote = function(comment){
    comment.upvotes+=1;  
  };
  
  $scope.addComment = function() {
    if($scope.ctext != "" && $scope.ctext) {
      $scope.post.comments.push({author:'user', body: $scope.ctext, upvotes:0})
      $scope.ctext = "";
    }
  }
  
}]);