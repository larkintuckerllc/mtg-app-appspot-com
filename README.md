mtg-app-appspot-com
===================

Mobile Web Application for Conference Attendees


Meeting App is a mobile web application designed to provide a simple enhancement to a conference attendees experience by providing a searchable (by presentation speaker or title) schedule and a messaging system for conference organizers to provide timely updates.

This client-side code is provided as an example of building a mobile web application interacting with server-side RESTful services (server-side code not provided).


KEY FEATURES

The key features of this web application are:

* Designed primarily for mobile devices but works just fine in any modern desktop browser.

* Application (HTML5 cache manifest) and data (HTML5 local storage) caching for quick loading and offline usage (degrades to online only when device does not support data caching).


DEPENDENCIES

Meeting App is developed upon the following JavaScript libraries.

* Backbone.js (backbone.js): Provides a lightweight model-view-controller (MVC) framework.

* Backbone.localstorage (backbone.localStorage.js): Extension to Backbone.js to support HTML5 local storage.

* JQuery Mobile (jquery.mobile.js): Provides a robust mobile friendly user interface.

* Mustache.js (mustache.js): Templating library to separate HTML/CSS code from the JavaScript code.

* RequireJS (require.js): File/module loader to improve the readabilty and performance of JavaScript code.

* TimezoneJS (date.js): Timezone-enabled, drop-in replacement for teh stock JavaScript Date.

* JQuery (jquery.js): "It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler..."

* Underscore.js (underscore.js): "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support..." 

These Javascript libraries and accompanying files are expected to be stored as follows:  

Files accompanying Jquery Mobile.

* /css/images/ajax-loader.gif
* /css/images/icons-18-black.png
* /css/images/icons-18-white.png
* /css/images/icons-36-black.png
* /css/images/icons-36-white.png
* /css/lib/jquery.mobile.structure.css

JavaScript libraries.

* /js/lib/backbone.localStorage.js
* /js/lib/backbone.js
* /js/lib/date.js
* /js/lib/jquery.mobile.js
* /js/lib/jquery.js
* /js/lib/mustache.js
* /js/lib/require.js
* /js/lib/underscore.js

Files accompanying TimezoneJS.

* /tz/northamerica


LICENSE

Meeting App - Mobile Web Application for Conference Attendees
Copyright (C) 2013  Larkin & Tucker, LLC

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License or any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
