(function (global, $, angular, actions, appStrings) {
    var textWorkerModule = angular.module("textWorker", []);
    textWorkerModule.controller("TextWorkerController", ["$scope", TextWorkerController]);

    function TextWorkerController(scope) {
        var propertiesToWatch = ['actions.selectedAction'];

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
            if (currentAction) {
                scope.result.value = filterString(currentAction.perform(
                    scope.srcString.value,
                    scope.queryString.value,
                    scope.replacementString.value));
            }
        };
        scope.resetEntries.perform = function () {
            alert();
        };

        scope.$watchGroup(propertiesToWatch, function (newValues, oldValues) {
            var selectedAction = !!newValues && !!newValues[0] && newValues[0].value;

            if (selectedAction) {
                scope.queryStringInputType = selectedAction.needsQueryString ? "text" : "hidden";
                scope.replacementStringInputType = selectedAction.needsReplacementString ? "text" : "hidden";
            }
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

    function filterString(str) {
        return !!str ? str : "";
    }
})(window, window.jQuery, window.angular, window.textWorker.actions, window.textWorker.appStrings);