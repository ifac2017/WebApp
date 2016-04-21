/**
 * @ngdoc directive
 * @name webapp.directive:wa-admin-conferences-create
 * @restrict E
 * @description Admin conferences creation manager component.
 */
angular.module('webapp').component('waAdminConferencesCreate', {
    controller: 'AdminConferencesCreateCtrl',
    templateUrl: ['$element', function($element) {
        angular.element($element).addClass('layout-column')
        return 'adminConferencesCreate.html'
    }],
    bindings: {
        $router: '<'
    },
    $canActivate: ['AuthService', '$rootRouter', function(AuthService, $rootRouter) {
        return AuthService.requireAdminAuth()
        .then(function(){
          return true
        })
        .catch(function(error){
          $rootRouter.navigate(['Login'])
          return false
        })
    }]
})
