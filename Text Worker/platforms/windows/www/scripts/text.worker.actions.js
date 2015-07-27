(function (window, $, appStrings) {
    window.textWorker = window.textWorker || {};

    var actions = [];

    actions.push(createTextWorkerAction(
        appStrings.replaceAllOccurrence,
        replaceAllOccurrences,
        appStrings.queryString,
        appStrings.replacementString
    ));
    actions.push(createTextWorkerAction(
        appStrings.replaceFirstOccurrence,
        replaceFirstOccurrence,
        appStrings.queryString,
        appStrings.replacementString
    ));
    actions.push(createTextWorkerAction(
        appStrings.replaceLastOccurrence,
        replaceLastOccurrence,
        appStrings.queryString,
        appStrings.replacementString
    ));
    actions.push(createTextWorkerAction(appStrings.toUpper, toUpper));
    actions.push(createTextWorkerAction(appStrings.toLower, toLower));

    function createTextWorkerAction(label, perform, queryString, replacementString) {
        /*
         * Create an action object
         *
         * @param label             The string that will be displayed to the user.
         * @param perform           A function that takes a string and returns a transformed string.
         * @param queryString       The string to search for.
         * @param replacementString The string to replace with.
         */

        return {
            "label": label,
            "perform": perform,
            "queryString": queryString,
            "replacementString": replacementString,
        }
    }

    function replaceAllOccurrences(srcString, find, replacement) {
    }

    function replaceFirstOccurrence(srcString, find, replacement) {
    }

    function replaceLastOccurrence(srcString, find, replacement) {
    }

    function toUpper(srcString) {
    }

    function toLower(srcString) {
    }

    window.textWorker.actions = actions;
})(window, window.jQuery, window.textWorker.appStrings);