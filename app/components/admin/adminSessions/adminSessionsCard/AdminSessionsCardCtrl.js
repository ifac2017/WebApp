angular.module('webapp').controller('AdminSessionsCardCtrl', AdminSessionsCardCtrl)
AdminSessionsCardCtrl.$inject = ['SessionsService', 'ConferencesService', '$mdDialog']

/**
 * @ngdoc controller
 * @name webapp.controller:AdminSessionsCardCtrl
 * @description In charge of the admin sessions card view.
 */
function AdminSessionsCardCtrl(SessionsService, ConferencesService, $mdDialog) {
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
    vm.conferences = []
    vm.showConferences = false

    vm.toggleConferences = function() {
        if (!vm.conferences.length) {
            vm.getConferences()
        }
        vm.showConferences = !vm.showConferences

    }

    vm.getConferences = function() {
        if (vm.session.conferences) {
            for (var i = 0; i < vm.session.conferences.length; i++) {
                vm.conferences.push(ConferencesService.getConferenceById(vm.session.conferences[i]))
            }
            console.log(vm.conferences)
        }
    }

}
