Knockout Binding Handler Reference
---------------

Install:
====
Copy the javascript s [typeaheadKoBinding.js](dist/typeaheadKoBinding.js>)
 and  [typeahead.js](dist/typeahead.js) to your scripts directory.  
Include the link reference to the scripts in you html file.  Place the scripts after your knockout line, in this order:  typeahead.js, typeaheadKoBinding.js

Compatibility to the official typeahead.js
====
<b>Note that at his moment, the binder [typeaheadKoBinding.js](dist/typeaheadKoBinding.js>) will not work with the official typeahead.js version, you have to use the accompanying version: [typeahead.js](dist/typeahead.js)</b>.  The main reason is that the official does not include many of the features provided here.  Also at this moment the official also contains critical bugs. See the [typeahead issue list](https://github.com/twitter/typeahead.js/issues?state=open) for details on that.  However this version is fully backward bompatible with the official version so you should not loose any functionality with your previous modifications if you replace your version of typeahead.js with this one. If you do, please report it at my [typeahead fork](https://github.com/Svakinn/typeahead.js/issues)

Data bind
======
There are two values you can data bind to your viewmodel:
# 1) the input value
Here you use the normal Knockout value databinding:
	
	<input data-bind="value: vm.myText, typeahead: {.. the rest of the options..}">

   The datatype in your viewmodel should be knockoutObservable() on text item.
# 2) the selected datum
The selected datum is the object that includes the data in the underlying options list that is currently selected.  When nothing is selected the value will be null.  When you have selected item in the typeahead by 'autocompletion' or by 'selection' the value of your binding will be the underlying record you used for the typeahead dataset (local,remote,prefetch).
	
	<input data-bind="tyepahead: {selectedDatum: vm.myDatum, .... the rest of the options......}">

Initialization options of the typeahead
======

#Eeeeeee

