var legacyApp = angular.module('legacyApp', ['ngRoute','ui.bootstrap', 'ngDialog']);

legacyApp.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'landing/landing.html',
    controller  : 'LandingController'
  })

  .when('/dashboard', {
    templateUrl : 'dashboard/dashboard.html',
    controller  : 'DashboardController'
  })

  .when('/letters', {
    templateUrl : 'add_edit_letter/letters.html',
    controller  : 'LettersController'
  })

  .when('/register', {
    templateUrl : 'register/register.html',
    controller  : 'RegisterController'
  })

  .when('/profile', {
    templateUrl : 'profile/profile.html',
    controller  : 'ProfileController'
  })

  .when('/trustee_confirmation', {
    templateUrl : 'confirm_appointment/trustee_confirmation.html',
    controller  : 'ConfirmAppointmentController'
  })

  .when('/request_access', {
    templateUrl : 'request_access/request_access.html',
    controller  : 'RequestAccessController'
  })

  .when('/vaults', {
    templateUrl : 'vaults/vaults.html',
    controller  : 'VaultsController'
  })

  .when('/vaults_contents', {
    templateUrl : 'vaults_contents/vaults_contents.html',
    controller  : 'VaultsContentsController'
  })

  .when('/contacts', {
    templateUrl : 'trusted_contacts/contacts.html',
    controller  : 'ContactsController'
  })

  .when('/add_contacts', {
    templateUrl : 'trusted_contacts/add_contacts.html',
    controller  : 'AddContactsController'
  })

  .otherwise({redirectTo: '/'});
});