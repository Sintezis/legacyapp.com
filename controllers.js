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

legacyApp.controller('DashboardController', function($scope) {
    $scope.message = 'Hello from DashboardController';
});

legacyApp.controller('LettersController', function($scope) {
    $scope.message = 'Hello from LettersController';
});

legacyApp.controller('RegisterController', function($scope) {
    $scope.message = 'Hello from RegisterController';
});

legacyApp.controller('ProfileController', function($scope) {
    $scope.message = 'Hello from ProfileController';
});

legacyApp.controller('ConfirmAppointmentController', function($scope) {
    $scope.message = 'Hello from ConfirmAppointmentController';
});

legacyApp.controller('RequestAccessController', function($scope) {
    $scope.message = 'Hello from RequestAccessController';
});

legacyApp.controller('VaultsController', function($scope) {
    $scope.title1 = 'Snowden';
    $scope.user1 = 'Edward Snowden';
    $scope.title2 = 'My Vault';
    $scope.user2 = 'John Doe';
    $scope.title3 = 'Random';
    $scope.user3 = 'Yoda';

});

legacyApp.controller('VaultsContentsController', function($scope) {
    $scope.message = 'Hello from VaultsContentsController';
});

legacyApp.controller('ContactsController', function($scope) {
    $scope.message = 'Hello from ContactsController';
});