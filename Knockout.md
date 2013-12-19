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
Bindibg handler options are then used to specify how to pickup columns from this array into the typeahead 'Datum' structure.

Example1, Datum mapping:
=====
Lets say we have in our viewmodel list of special countries:
   
