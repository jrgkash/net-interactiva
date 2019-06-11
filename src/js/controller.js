var App = angular.module('routingDemoApp',['ngRoute']);

App.config(['$routeProvider', function($routeProvider){

                $routeProvider

                .when('/home',{
                  templateUrl:'home.html'
                })
                .when('/about',{
                  templateUrl:'about.html'
                })
                .when('/contact',{
                  templateUrl:'contact.html'
                })
                .when('/submenu',{
                  templateUrl:'submenu.html'
                })
                .when('/submenu2',{
                  templateUrl:'submenu2.html'
                })
                .otherwise({redirectTo:'/'});
            }]);
