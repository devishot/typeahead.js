ko.bindingHandlers.typeahead = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var value = valueAccessor();
        var name = ko.unwrap(value.name);
        var valueKey = ko.unwrap(value.valueKey);
        var nameKey = ko.unwrap(value.nameKey);
        var limit = ko.unwrap(value.limit);
        var minLength = ko.unwrap(value.minLength);
        var template = ko.unwrap(value.template);
        var templateElement = ko.unwrap(value.templateElement);
        var engine = ko.unwrap(value.engine);
        var header = ko.unwrap(value.header);
        var footer = ko.unwrap(value.footer);
        var local = ko.unwrap(value.local);
        var prefetch = ko.unwrap(value.prefetch);
        var remote = ko.unwrap(value.remote);
        var computed = ko.unwrap(value.computed);

        //For convenience we also allow remote, prefetch and computed options to be defined globally 
        var url = ko.unwrap(value.url);
        var ttl = ko.unwrap(value.ttl);
        var filter = ko.unwrap(value.filter);
        var dataType = ko.unwrap(value.dataType);
        var cache = ko.unwrap(value.cache);
        var timeout = ko.unwrap(value.timeout);
        var wildcard = ko.unwrap(value.wildcard);
        var replace = ko.unwrap(value.replace);
        var rateLimitFn = ko.unwrap(value.rateLimitFn);
        var rateLimitWait = ko.unwrap(value.rateLimitWait);
        var maxParallelRequests = ko.unwrap(value.maxParallelRequests);
        var beforeSend = ko.unwrap(value.beforeSend);
        var computedFunction = ko.unwrap(value.computedFunction);
        var onAutoCompleted = ko.unwrap(value.onAutoCompleted);
        var onNoneItemSelected = ko.unwrap(value.onNoneItemSelected);
        var options = {};
        if (name) options.name = name;
        if (valueKey) options.valueKey = valueKey;
        if (nameKey) options.nameKey = nameKey;
        if (limit) options.limit = limit;
        if (minLength) options.minLength = minLength;
        if (templateElement) options.template = $(templateElement).html();
		else if (template) options.template = template;
        if (engine) options.engine = engine;
        if (header) options.header = header;
        if (footer) options.footer = footer;
        if (local) options.local = local;
        if (prefetch) {
            var prefOptions = {};
            if (typeof prefetch == "string" || (typeof prefetch == "object" && prefetch.constructor === String))
                prefOptions.url = prefetch;
			else if (typeof prefetch == 'object') {
                var lurl = ko.unwrap(prefetch.url);
                var lttl = ko.unwrap(prefetch.ttl);
                var lfilter = ko.unwrap(prefetch.filter);
                if (lurl) prefOptions.url = url;
                if (lttl) prefOptions.ttl = ttl;
                if (lfilter) prefOptions.filter = filter;
            }
            if (url && !prefOptions.url) prefOptions.url = url;
            if (ttl && !prefOptions.ttl) prefOptions.ttl = ttl;
            if (filter && !prefOptions.filter) prefOptions.filter = filter;
            options.prefetch = prefOptions;
        }
        if (remote) {
            var remoteOptions = {};
            if (typeof remote == "string" || (typeof remote == "object" && remote.constructor === String))
                remoteOptions.url = remote;
			else if (typeof remote == 'object') {
                //Check for local options
                var lurl = ko.unwrap(remote.url);
                var ldataType = ko.unwrap(remote.url);
                var lcache = ko.unwrap(remote.cache);
                var ltimeout = ko.unwrap(remote.timeout);
                var lwildcard = ko.unwrap(remote.wildcard);
                var lreplace = ko.unwrap(remote.replace);
                var lrateLimitFn = ko.unwrap(remote.rateLimitFn);
                var lrateLimitWait = ko.unwrap(remote.rateLimitWait);
                var lmaxParallelRequests = ko.unwrap(remote.maxParallelRequests);
                var lbeforeSend = ko.unwrap(remote.beforeSend);
                var lfilter = ko.unwrap(remote.filter);
                if (lurl) remoteOptions.url = lurl;
                if (ldataType) remoteOptions.dataType = ldataType;
                if (lcache) remoteOptions.cache = lcache;
                if (ltimeout) remoteOptions.timeout = ltimeout;
                if (lwildcard) remoteOptions.wildcard = lwildcard;
                if (lreplace) remoteOptions.replace = lreplace;
                if (lrateLimitFn) remoteOptions.rateLimitFn = lrateLimitFn;
                if (lrateLimitWait) remoteOptions.rateLimitWait = lrateLimitWait;
                if (lmaxParallelRequests) remoteOptions.maxParallelRequests = lmaxParallelRequests;
                if (lbeforeSend) remoteOptions.beforeSend = lbeforeSend;
                if (lfilter) remoteOptions.filter = lfilter;
            }
            if (url && !remoteOptions.url) remoteOptions.url = url;
            if (dataType && !remoteOptions.url) remoteOptions.dataType = dataType;
            if (cache && !remoteOptions.url) remoteOptions.cache = cache;
            if (timeout && !remoteOptions.timeout)  remoteOptions.timeout = timeout;
            if (wildcard && !remoteOptions.wildcard) remoteOptions.wildcard = wildcard;
            if (replace && !remoteOptions.replace) remoteOptions.replace = replace;
            if (rateLimitFn && !remoteOptions.rateLimitFn) remoteOptions.rateLimitFn = rateLimitFn;
            if (rateLimitWait && !remoteOptions.rateLimitWait) remoteOptions.rateLimitWait = rateLimitWait;
            if (maxParallelRequests && !remoteOptions.maxPerallelRequests) remoteOptions.maxParallelRequests = maxParallelRequests;
            if (beforeSend && !remoteOptions.beforeSend) remoteOptions.beforeSend = beforeSend;
            if (filter && !remoteOptions.filter) remoteOptions.filter = filter;
            options.remote = remoteOptions;
        }
        if (computed || computedFunction) {
            var computedOptions = {};
            if (computed && typeof computed == 'function')
                computedOptions.computedFunction = computed;
				else if (computed && typeof computed == 'object') {
                var lcomputedFunction = ko.unwrap(computed.computedFunction);
                var ldataType = ko.unwrap(computed.dataType);
                var lrateLimitFn = ko.unwrap(computed.rateLimitFn);
                var lrateLimitWait = ko.unwrap(computed.rateLimitWait);
                var lmaxParallelRequests = ko.unwrap(computed.maxParallelRequests);
                var lfilter = ko.unwrap(computed.filter);
                if (lcomputedFunction) computedOptions.computedFunction = lcomputedFunction;
                if (ldataType) computedOptions.dataType = ldataType;
                if (lrateLimitFn) computedOptions.rateLimitFn = lrateLimitFn;
                if (lrateLimitWait) computedOptions.rateLimitWait = lrateLimitWait;
                if (lmaxParallelRequests) computedOptions.maxParallelRequests = lmaxParallelRequests;
                if (lfilter) computedOptions.filter = lfilter;
            }
            if (computedFunction && !computedOptions.computedFunction) computedOptions.computedFunction = computedFunction;
            if (dataType && !computedOptions.dataType) computedOptions.dataType = dataType;
            if (rateLimitFn && !computedOptions.rateLimitFn) computedOptions.rateLimitFn = rateLimitFn;
            if (rateLimitWait && !computedOptions.rateLimitWait) computedOptions.rateLimitWait = rateLimitWait;
            if (maxParallelRequests && !computedOptions.maxParallelRequests) computedOptions.maxParallelRequests = maxParallelRequests;
            if (filter && !computedOptions.filter) computedOptions.filter = filter;
            options.computed = computedOptions;
        }
        $(element).attr('autocomplete', 'off');
        if (options.template && !options.engine && Hogan) options.engine = Hogan;
        $(element).typeahead(options);
        if (onAutoCompleted) $(element).on('typeahead:selected typeahead:autocompleted', value.onAutoCompleted);
        if (onNoneItemSelected) $(element).on('change', onNoneItemSelected);
    }
};
