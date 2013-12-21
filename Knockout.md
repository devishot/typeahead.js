Knockout Binding Handler
---------------

Main features:
====
Using typeahead is a breze with knockout driven pages.
The binding handler makes it so  much simpler task to hookup typeahead to input box.

Two-way data binding to viewmodel eliminates the need of setting up and manipulating event handlers for the control.  Instead knockout subscription can be used to customize what to do when the selected typeahead datum changes.

The handler takes care of the task of generating the datum objects the typeahead control uses.  Instead the user simply specifies options on how to map data columns to datum objects.

The handler is also able to interpred simplified syntax of the typeahead options


First thins first - data for the suggestions:
====
The typeahead control relies on list of available options.  This can be both preset-data using the Prefetch or local options, or remote data, fetched on demand from server when user enters characters.
In both cases the data has to be groomed in format the typeahad control will understand.   
The minimum requirement is one value field.  
Moe advanced options require specification of unique key, display name, search prases and optional fields to be available for the item template for each option.
The binding handler assumes that the underlying list to be bound to is an array of objects (like Json results) or Knockout Observable Array.
Bindibg handler options are then used to specify how to pickup columns from this array into the typeahead `Datum` structure.

Example 1, as simple as you can:
=====
Lets say we have in our viewmodel list of special countries:

    var countryList = [
      {code: 'IS', name: 'Iceland', localName: 'Ísland'},
      {code: 'GB', name: 'Great Britain', localName: ''},
      {code: 'US', name: 'USA', localName: ''},
      {code: 'AE', name: 'UNITED ARAB EMIRATES', localName: 'دولة الإمارات العربية المتحدة'},
      {code: 'IE', name: 'IRELAND', localName: 'Éire'},
      {code: 'IL', name: 'ISRAEL', localName: 'מְדִינַת יִשְׂרָאֵל'},
      {code: 'IM', name: 'ISLE OF MAN', localName: 'Ellan Vannin'},
      {code: 'IQ', name: 'BRITISH INDIAN OCEAN TERRITORY', localName: 'Chagos Islands'},
      {code: 'JP', name: 'JAPAN', localName: ''}
    ];
This list is on typical JavaScript/Json form.  However the data binder is also able to iterprete data on knockoutObservable form (knockoutObservable and knockoutObservableArray). 

This data would typically be stored in or made accessible by javascript viewmodel bound to the html layout.  
	
	var vm = (function () {
	var selectedCountry = ko.observable(); //The selecte country object
    var selectedText = ko.observable();  //The text entered in the control
	var countryList = [
	    Our countries...
	];
	var vm = { 
       selectedCountry: selectedCountry,
       selectedText: selectedText
	   countryList: countryList,
	};
	return vm;
	})();
	ko.applyBindings(vm);
	
Let's say we want to take the simple road first: just allow typeahead of the names (since we know they are uinique).

Here we can choose between the options on using data binds or events to handle the data data updates to or from the model.  The usual approach would be to databind the **selectedCountry** and possibly the **selectedText** to the typeahead control. 
However if we want to grab the events from the control we can do it like this:  
  `<input id="country1" type="text" data-bind="typeahead: {local: vm.countryList, valueKey: 'name', onSelected: vm.onCountrySelected, onAutoCompleted: vm.onCountryAutoCompleted}">`

Then the event handlers in the model could look something like this:
	
    function onCountrySelected(e, data) {
    	vm.selectedCountry(data);
    	alert('Country selected: ' + (vm.selectedCountry() ? vm.selectedCountry().name : 'null'));
    }

Still there is no need to set-up events and manipulate the data.  Simple databinding will do:  
	

Note that the event handler will return the original record, not the actual `Datum` record that was generated behind the sceens for the typeahead control. 
Here we can 
See this this example in action on [Plunker](http://plnkr.co/edit/dg8oYI?p=info)

Example2, add inn the groovy stuff:
=======
Now we want to do some heavy lifting with the countr data we have.  






   
