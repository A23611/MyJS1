(function () {
  var app = angular.module('myApp', []);

  app.controller('demoCtrl', ['$scope', DemoController]);

  function DemoController($scope) {
    // Your Code Here
    $.get('https://jsonplaceholder.typicode.com/users', function (users) {
      // if we are here, which means the data is retrieved from the API
      // console.log(users);
      for(let user of users) {
        $.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`, posts => {
          // console.log(posts);
          user.posts = posts;
          for(let post of posts) {
            $.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`, comments => {
              // console.log(comments);
              post.comments = comments;
              // console.log(user);
              $scope.$apply(() => {
                $scope.users = users;
              })
            })
          }
        })
      }
    });
  }
})();
