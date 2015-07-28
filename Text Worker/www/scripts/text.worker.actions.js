(function (window, $, appStrings) {
    window.textWorker = window.textWorker || {};

    var actions = [];

    actions.push(createTextWorkerAction(appStrings.replaceAllOccurrence, replaceAllOccurrences, true, true, true));
    actions.push(createTextWorkerAction(appStrings.replaceFirstOccurrence, replaceFirstOccurrence, true, true, false));
    actions.push(createTextWorkerAction(appStrings.replaceLastOccurrence, replaceLastOccurrence, true, true, false));
    actions.push(createTextWorkerAction(appStrings.toUpper, toUpper, false, false, true));
    actions.push(createTextWorkerAction(appStrings.toLower, toLower, false, false, true));

    function createTextWorkerAction(label, perform, needsQueryString, needsReplacementString, enabled) {
        /*
         * Create an action object
         *
         * @param label                     The string that will be displayed to the user.
         * @param perform                   A function that takes a string and returns a transformed string.
         * @param needsQueryString          Indicates if the action needs a query string.
         * @param needsReplacementString    Indicates if the action needs a replacement string.
         * @param enabled                   Indicates if the action is enabled.
         */

        return {
            "label": label,
            "perform": perform,
            "needsQueryString": needsQueryString,
            "needsReplacementString": needsReplacementString,
            "enabled": enabled
        }
    }

    function replaceAllOccurrences(srcString, find, replacement) {
        return srcString.replace(new RegExp(escapeRegExp(find), 'g'), replacement);
    }

    function replaceFirstOccurrence(srcString, find, replacement) {
    }

    function replaceLastOccurrence(srcString, find, replacement) {
    }

    function toUpper(srcString) {
        return !!srcString && srcString.toUpperCase();
    }

    function toLower(srcString) {
        return !!srcString && srcString.toLowerCase();
    }

    function escapeRegExp(string) {
        return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    window.textWorker.actions = actions;
})(window, window.jQuery, window.textWorker.appStrings);