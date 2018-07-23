var myapp = angular.module('myapp',['ng-Route']);

myapp.config(function($routeProvider){

  $routeProvider
  .when('/msg1', {
    
    template:'<strong>this is first message</strong>'

  })
  .when('/msg2', {

  	template:'<strong>this is second message</strong>'
  })
  // .otherwise({
  // 	  template: '<strong>No Content Avalivale </strong>'
  // })

});