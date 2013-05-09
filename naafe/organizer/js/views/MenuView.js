define(["backbone"],function(Backbone) {
    var View = Backbone.View.extend({
        events: {
        	"click #edit_button": "edit",
        	"click #import_button": "import"
        },
        edit: function() {
        	$.mobile.activePage.focus();        	
        	window.open("https://docs.google.com/spreadsheet/ccc?key=" + router.conference.spreadsheet() + "&usp=sharing");
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
