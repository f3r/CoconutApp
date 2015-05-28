angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  
})

.controller('SignUpCtrl', function($scope) {})
.controller('SignInCtrl', function($scope, $state) {
  $scope.user = {};
  $scope.form = {};

  $scope.form.login = function(){
    console.log("Logging In to Coconut Account!")

    var url = "<%= ENV['URL'] %>" || "http://localhost:3000/";
    var data = {
      user: $scope.user
    };

    console.log(data)

    // $http.post(url + "users/sign_in", data).success(function(response){
    //   console.log("You Are Now Signed In To Coconut...");

      $state.go('tab.dash'); //Need To Determine where to go after signin.
    // });
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
