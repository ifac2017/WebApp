angular.module('webapp').controller('AdminSessionsCardCtrl', AdminSessionsCardCtrl)
AdminSessionsCardCtrl.$inject = ['SessionsService', '$mdDialog']

/**
 * @ngdoc controller
 * @name webapp.controller:AdminSessionsCardCtrl
 * @description In charge of the admin sessions card view.
 */
function AdminSessionsCardCtrl(SessionsService, $mdDialog) {
    var vm = this

    vm.removeSession = function(event) {
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete this session?')
            .ariaLabel('Remove session')
            .targetEvent(event)
            .ok('Yes remove!')
            .cancel('Cancel')
        $mdDialog.show(confirm).then(function() {
            SessionsService.removeSession(vm.session)
        })
    }
}