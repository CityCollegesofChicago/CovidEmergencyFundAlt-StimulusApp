angular.module('covidemergencyfundaltApp').controller('applicationController',  function ($scope, $filter, $window, $state, $timeout, mvIdentity, Application, Notifier ) {

    $window.scrollTo(0, 0);

    $scope.response = {};
    $scope.Submitted = false;
    $scope.SubmittedClicked = false;




    $scope.makeDate = function (date) {
        var convertdLocalTime = new Date(date);
        var hourOffset = convertdLocalTime.getTimezoneOffset() / 60;
        convertdLocalTime.setHours(convertdLocalTime.getHours() + hourOffset);

        return convertdLocalTime;
    };

    $scope.returnToLogin = function (lang) {

        switch (lang) {
            case 'ES':
                $timeout(function () {
                    Notifier.error("Loaner equipment is only available to credit or Adult Ed students taking classes in the spring 2020 term");

                    $timeout(function () {
                        $state.go('loginES');
                    }, 2000);

                }, 500);
                break;
            case 'POL':
                $timeout(function () {
                    Notifier.error("Loaner equipment is only available to credit or Adult Ed students taking classes in the spring 2020 term");

                    $timeout(function () {
                        $state.go('loginPOL');
                    }, 2000);

                }, 500);
                break;
            default:
                $timeout(function () {
                    Notifier.error("Loaner equipment is only available to credit or Adult Ed students taking classes in the spring 2020 term");

                    $timeout(function () {
                        $state.go('login');
                    }, 2000);

                }, 500);
                break;
        }

    };

    if (!mvIdentity.currentUser) {
        $state.go('login');
    } else {
        $scope.student = mvIdentity.currentUser;

    }

    //Notifier.error("Please complete all the required fields and check the consent box.");
    $scope.submitApplication = function (lang) {
    $scope.SubmittedClicked = true;
        if (!$scope.covidemergencyfundaltAppForm.$valid) {
            return;
        }


        // if (
        //     $scope.student.email == undefined
        //
        //     $scope.student.address == undefined  ||
        //     $scope.student.city == undefined ||
        //     $scope.student.state == undefined  ||
        //     $scope.student.postal == undefined  ||
        //     $scope.student.privacyconsent == undefined
        //     ){
        //     //Notifier.error("Please complete all the required fields and check the consent box.");
        //     return;
        //     }
        $scope.saveForm(lang);

    };

    $scope.saveForm = function (lang) {

        $scope.student.lang = lang;



        Application.save({student: $scope.student}).$promise.then(function (result) {


                $scope.Submitted = true;
                $scope.SubmittedClicked = false;
                switch (lang) {
                    // case 'ES':
                    //     Notifier.notify('Se acepto la informacion proporcionada.');
                    //     $timeout(function () {
                    //         $state.go('thanksES');
                    //
                    //     }, 500);
                    //     break;
                    // case 'POL':
                    //     Notifier.notify('Your application has been successfully submitted.');
                    //     $timeout(function () {
                    //         $state.go('thanksPOL');
                    //
                    //     }, 500);
                    //     break;
                    default:
                        Notifier.notify('Your application has been successfully submitted.');
                        $timeout(function () {
                            $state.go('thanks');

                        }, 500);
                        break;

                }
            },
            function (err) {
                Notifier.error(err.message);
            }
        );
    };

});







