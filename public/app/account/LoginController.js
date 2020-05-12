angular.module('covidemergencyfundaltApp').controller('loginController', function($scope, $http, $filter,$timeout, $window, Notifier, mvAuth,mvIdentity, $state) {

  $scope.loginClicked = false;
  $scope.setFocus = function () {
    $timeout(function () {
      $('#login').focus();
    });
  };

  $scope.submitLogin = function (lang) {
    $scope.loginClicked = true;
    if (!$scope.loginAppForm.$valid) {
      //Notifier.error("Please enter your password and username.");
      return;
    }

    var index = $scope.user.username.indexOf('@');
    if (index > -1) {
      $scope.user.username = $scope.user.username.slice(0, index);
    }
    mvAuth.authenticateUser($scope.user).then(function (success) {
      //Dennis, Lonnie, Jason Campbell, and Alex Weng ​
      // if (
      //     // ($scope.user.username.indexOf('ddorman')> -1) ||
      // // ($scope.user.username.indexOf('aberns')> -1) ||
      // // ($scope.user.username.indexOf('dmacklin')> -1) ||
      // // ($scope.user.username.indexOf('lewashington')> -1) ||
      // // ($scope.user.username.indexOf('jcampbell')> -1) ||
      //     ($scope.user.username.indexOf('yweng3') > -1)) {
      //   $state.go('admin');
      //   return;
      // }


      if (success) {
        switch (lang) {
          // case 'ES':
          //   Notifier.notify('Bienvenido y Bienvenida ' + mvIdentity.currentUser.GivenName + '.  Acaba de entrar al sistema.');
          //   $state.go('applicationES.screen');
          //   break;
          // case 'POL':
          //   Notifier.notify('Welcome' + mvIdentity.currentUser.GivenName + '.  You have successfully signed in!');
          //   $state.go('applicationPOL.screen');
          //   break;
          default:
            Notifier.notify('Welcome' + mvIdentity.currentUser.GivenName + '.  You have successfully signed in!');
            $state.go('application.screen');
            break;

        }
      } else {
        switch (lang) {
          // case 'ES':
          //   Notifier.error('La informacion proporcionada no functiono');
          //   break;
          // case 'POL':
          //   Notifier.error('Username and Password combination incorrect');
          //   break;
          default:
            Notifier.error('Username and Password combination incorrect');
            break;

        }

      }

    });
  }

});

