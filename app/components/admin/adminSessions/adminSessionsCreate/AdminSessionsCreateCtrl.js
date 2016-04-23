angular.module('webapp').controller('AdminSessionsCreateCtrl', AdminSessionsCreateCtrl)
AdminSessionsCreateCtrl.$inject = ['SessionsService']

/**
 * @ngdoc controller
 * @name webapp.controller:AdminSessionsCreateCtrl
 * @description In charge of the admin sessions creation view.
 */
function AdminSessionsCreateCtrl(SessionsService) {
    var vm = this

    vm.titleName = "Add new session"
    vm.backName = "Sessions Dashboard"
    vm.backAction = function() {
        vm.$router.navigate(['AdminSessionsDashboard'])
    }

    vm.session = {
        name: null,
        date: null,
        start_time: null,
        end_time: null
    }

    vm.addSession = function() {
        SessionsService.addSession(vm.session)
            .then(function() {
                vm.$router.navigate(['AdminSessionsDashboardData', {
                    data: "creationOkay"
                }])
            })
            .catch(function() {})
    }
}