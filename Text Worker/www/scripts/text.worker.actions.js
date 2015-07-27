(function (window, $, appStrings) {
    window.textWorker = window.textWorker || {};

    var actions = [];

    actions.push(createTextWorkerAction(
        appStrings.replaceAllOccurrence,
        replaceAllOccurrences,
        appStrings.queryString,
        appStrings.replacementString,
        true
    ));
    actions.push(createTextWorkerAction(
        appStrings.replaceFirstOccurrence,
        replaceFirstOccurrence,
        appStrings.queryString,
        appStrings.replacementString,
        false
    ));
    actions.push(createTextWorkerAction(
        appStrings.replaceLastOccurrence,
        replaceLastOccurrence,
        appStrings.queryString,
        appStrings.replacementString,
        false
    ));
    actions.push(createTextWorkerAction(appStrings.toUpper, toUpper, null, null, true));
    actions.push(createTextWorkerAction(appStrings.toLower, toLower, null, null, true));

    function createTextWorkerAction(label, perform, queryString, replacementString, enabled) {
        /*
         * Create an action object
         *
         * @param label             The string that will be displayed to the user.
         * @param perform           A function that takes a string and returns a transformed string.
         * @param queryString       The string to search for.
         * @param replacementString The string to replace with.
         * @param enabled           Is this action enabled
         */

        return {
            "label": label,
            "perform": perform,
            "queryString": queryString,
            "replacementString": replacementString,
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