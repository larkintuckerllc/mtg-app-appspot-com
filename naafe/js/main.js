require.config({
      paths: {
          "jquery": "/js/lib/jquery",
          "jquerymobile": "/js/lib/jquery.mobile",
          "underscore": "/js/lib/underscore",
          "backbone": "/js/lib/backbone",
          "mustache": "/js/lib/mustache",
          "backbonelocalstorage": "/js/lib/backbone.localStorage",
          "date": "/js/lib/date",
          "util": "/js/util"
      },
      shim: {
            "backbone": {
                  "deps": [ "underscore", "jquery" ],
                  "exports": "Backbone"
            },
            "date": {
            	"deps": [ "jquery"],
            	exports: "timezoneJS"
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
	require(["date","jquerymobile"],function(timezoneJS) {
		$('#block-ui').show();
		$.mobile.loading("show");
		timezoneJS.timezone.zoneFileBasePath = '/tz';
		timezoneJS.timezone.init();	
		var storage,
	    	fail,
	    	uid;
		storage = window.localStorage;
		if (storage != null) {
			uid = new Date;
			storage.setItem(uid, uid);
			fail = storage.getItem(uid) != uid;
			storage.removeItem(uid);
			fail && (storage = false);
		} else {
			storage = false;
		}
		if (storage) {	
			require(["routers/Router"],function(Router) {
				this.router = new Router(options);
			});
		} else {
			require(["routers/NoStorageRouter"],function(NoStorageRouter) {
				this.router = new NoStorageRouter(options);
			});
		}
	});
});