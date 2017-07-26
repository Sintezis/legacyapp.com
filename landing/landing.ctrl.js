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