(function (window) {
    window.textWorker = window.textWorker || {};

    function getStrings() {
        // TODO: Implement localization
        return getEnglishStrings();
    }

    function getEnglishStrings() {
        return {
            "appName": "Text worker",
            "replaceAllOccurrence": "Replace all occurrence",
            "replaceFirstOccurrence": "Replace first occurrence",
            "replaceLastOccurrence": "Replace last occurrence",
            "toLower": "Convert to lower case",
            "toUpper": "Convert to upper case",
            "srcString": "Enter text to work on",
            "selectAnAction": "Select an action",
            "queryString": "Text to find",
            "replacementString": "Replacement text",
            "result": "The result shows up here",
            "resetEntries": "Reset all entries"
        }
    }

    window.textWorker.appStrings = getStrings();
})(window);