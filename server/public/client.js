console.log('js');

const colorApp = angular.module('ColorApp', ['ngRoute']);

colorApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        template: '<h1>Home</h1>'
    }).when('/about', {
        template: '<h1>About</h1>'
    }).when('/red', {
        templateUrl: 'views/red.html',
        controller: 'RedController as vm'
    }).when('/blue', {
        templateUrl: 'views/blue.html',
        controller: 'BlueController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
}]);

colorApp.controller('RedController', [function () {
    console.log('Running RedController');
    let vm = this;

    vm.message = 'this is the red page';

}]);

colorApp.controller('BlueController', [function () {
    console.log('Running BlueController');
    let vm = this;

    vm.message = 'this is the blue page';
}]);