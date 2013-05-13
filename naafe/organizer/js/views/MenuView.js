define(["backbone"],function(Backbone) {
    var View = Backbone.View.extend({
        events: {
        	"click #schedule_button": "schedule",
        	"click #registrants_button": "registrants",        	
        	"click #import_button": "import"
        },
        schedule: function() {
        	$.mobile.activePage.focus();        	
        	window.open("https://docs.google.com/spreadsheet/ccc?key=" + router.conference.spreadsheet() + "&usp=sharing");
        },
        registrants: function() {
        	$.mobile.activePage.focus();        	
        	window.open("https://docs.google.com/spreadsheet/ccc?key=" + router.conference.participants() + "&usp=sharing");
        },
        import: function() {
        	$.mobile.activePage.focus(); 
			$('#block-ui').show();
			$.mobile.loading("show");
        	$.ajax({
				type: "GET",
				url: "/conferenceimport?id=" + router.conference.id,
				timeout: 120000,
				success: function(data) {
					$.mobile.loading("hide");
					$('#block-ui').hide();
				},
				error: function(request, status, err) {
					router.error();
				}
			});
        }
    });
    return View;
});
