(function (global, $, angular, actions, appStrings) {
    var textWorkerModule = angular.module("textWorker", []);
    textWorkerModule.controller("TextWorkerController", ["$scope", TextWorkerController]);

    function TextWorkerController(scope) {
        var propertiesToWatch = ['actions.selectedIndex',
            'queryString.value',
            'replacementString.value'
        ];

        scope.appName = appStrings.appName;
        scope.srcString = createParameter(appStrings.srcString);
        scope.actions = createParameter(appStrings.selectAnAction);
        scope.queryString = createParameter(appStrings.queryString);
        scope.replacementString = createParameter(appStrings.replacementString);
        scope.result = createParameter(appStrings.result);
        scope.resetEntries = createParameter(appStrings.resetEntries);

        scope.appShow = true;
        scope.queryStringInputType = false;
        scope.replacementStringInputType = false;
        scope.actions.selectedAction = null;
        scope.actions.options = [];

        scope.workText = function () {
            var currentAction = !!scope.actions.selectedAction && scope.actions.selectedAction.value;

            console.log(currentAction);

            scope.result.value = currentAction.perform(
                scope.srcString.value,
                scope.queryString.value,
                scope.replacementString.value);
        };
        scope.resetEntries.perform = function () {
            alert();
        };

        scope.$watchGroup(propertiesToWatch, function (newValues, oldValues) {
            var newAction = !!newValues && !!newValues[0] && newValues[0].value,
                queryString = !!newValues && !!newValues[1] && newValues[1],
                replacementString = !!newValues && !!newValues[2] && newValues[2];

            // Enable and disable queryString and replacementString input
            scope.queryStringInputType = (newAction && !newAction.queryString) ? "hidden" : "text";
            scope.replacementStringInputType = (newAction && !newAction.replacementString) ? "hidden" : "text";
            console.log(newAction, queryString, replacementString, scope.queryStringInputType, scope.replacementStringInputType);
        }, true);

        $.each(actions, function (index, action) {
            scope.actions.options.push({
                key: index,
                value: action
            });
        });
    }

    function createParameter(label, value) {
        return {
            label: label,
            value: value
        };
    }
})(window, window.jQuery, window.angular, window.textWorker.actions, window.textWorker.appStrings);