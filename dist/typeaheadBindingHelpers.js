    var typeaheadBindingHelpers = (function () {
        function typeaheadBindingHelpers() {
        }
        typeaheadBindingHelpers.prototype.typeaheadDestroy = function (elId) {
            var el = $(elId);
            if (el && typeof el.typeahead == 'function')
                el.typeahead('destroy');
        };
        typeaheadBindingHelpers.prototype.typeaheadGetDatum = function (elId) {
            var el = $(elId);
            if (el && typeof el.typeahead == 'function')
                return el.typeahead('getDatum');
		else
                return null;
        };
        typeaheadBindingHelpers.prototype.typeaheadSetQuery = function (elId, value) {
            var el = $(elId);
            if (el && typeof el.typeahead == 'function')
                el.typeahead('setQuery', value);
        };
        typeaheadBindingHelpers.prototype.typeaheadSetDatum = function (elId, value) {
            var el = $(elId);
            if (el && typeof el.typeahead == 'function')
                el.typeahead('setDatum', value);
        };
        typeaheadBindingHelpers.prototype.typeaheadClearCahce = function (elId) {
            var el = $(elId);
            if (el && typeof el.typeahead == 'function')
                el.typeahead('clearCache');
        };
        typeaheadBindingHelpers.prototype.typeaheadOpen = function (elId) {
            var el = $(elId);
            if (el && typeof el.typeahead == 'function')
                el.typeahead('openDropdown');
        };
        typeaheadBindingHelpers.prototype.typeaheadClose = function (elId) {
            var el = $(elId);
            if (el && typeof el.typeahead == 'function')
                el.typeahead('closeDropdown');
        };
        return typeaheadBindingHelpers;
    })();