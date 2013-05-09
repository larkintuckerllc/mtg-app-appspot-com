require.config({
      paths: {
          "jquery": "/js/lib/jquery-1.9.1.min",
          "jquerymobile": "/js/lib/jquery.mobile-1.3.0.min",
          "underscore": "/js/lib/underscore-min",
          "backbone": "/js/lib/backbone-min"
      },
      shim: {
            "backbone": {
                  "deps": [ "underscore", "jquery" ],
                  "exports": "Backbone"
            }
      }
});

require(["jquery"],function($) {
	var options = {conferenceId: 1};
	$(document).on("mobileinit",
			function(){
				$.mobile.linkBindingEnabled = false;
				$.mobile.hashListeningEnabled = false;
			}
	);
	require(["routers/Router"],function(Router) {
		this.router = new Router(options);
	});
});