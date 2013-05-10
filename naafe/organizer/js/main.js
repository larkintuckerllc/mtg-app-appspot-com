require.config({
      paths: {
          "jquery": "/js/lib/jquery",
          "jquerymobile": "/js/lib/jquery.mobile",
          "underscore": "/js/lib/underscore",
          "backbone": "/js/lib/backbone"
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