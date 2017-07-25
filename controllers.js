legacyApp.controller('LandingController', function($scope, ngDialog) {
    $scope.open = function() {
        ngDialog.open({
            template: 'firstDialog',
            controller: 'FirstDialogCtrl',
            className: 'ngdialog-theme-default ngdialog-theme-custom'
        });
    };
});

legacyApp.controller('FirstDialogCtrl', function($scope, ngDialog) {
    $scope.next = function() {
        ngDialog.close('ngdialog');
    };
});

legacyApp.controller('DashboardController', function($scope) {});

legacyApp.controller('LettersController', function($scope) {});

legacyApp.controller('RegisterController', function($scope) {});

legacyApp.controller('ProfileController', function($scope) {});

legacyApp.controller('ConfirmAppointmentController', function($scope) {});

legacyApp.controller('RequestAccessController', function($scope) {});

legacyApp.controller('VaultsController', function($scope) {
    $scope.title1 = 'Snowden';
    $scope.user1 = 'Edward Snowden';
    $scope.title2 = 'My Vault';
    $scope.user2 = 'John Doe';
    $scope.title3 = 'Random';
    $scope.user3 = 'Yoda';

});

legacyApp.controller('VaultsContentsController', function($scope) {});

legacyApp.controller('ContactsController', function($scope) {});