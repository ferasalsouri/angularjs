app.directive('installApp',function () {
    return {
        restrict: 'E',
        scope: {
            install: "="
        },
        templateUrl: 'js/directives/installApp.html',
        link: function (scope, element, attrs) {
            scope.buttonText = 'install';
            scope.installed = false;


            scope.download = function () {

                element.toggleClass('btn-class');

                if (scope.installed) {
                    scope.installed = false;
                    scope.buttonText = "install";
                } else {
                    scope.buttonText = 'uninstall';
                    scope.installed = true;
                }

            };


        }
    }
});