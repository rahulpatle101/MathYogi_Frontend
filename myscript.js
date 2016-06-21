$(document).ready(function(){
// Initialize collapse button
  	$(".button-collapse").sideNav({
		// Initialize collapsible (uncomment the line below if you use the dropdown variation)
	  	//$('.collapsible').collapsible();
	    menuWidth: 300, // Default is 240
	    edge: 'right', // Choose the horizontal origin
	    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  	});

  	$('.scrollspy').scrollSpy();




// jQuery.validator.addMethod('answercheck', function (value, element) {
        // return this.optional(element) || /^\bcat\b$/.test(value);
    // }, "type the correct answer -_-");

// validate contact form
$(function() {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "<span style='margin-left:65px'>Name?</span>",
                minlength: "1"
            },
            email: {
                required: "<span style='margin-left:60px'>No email, no message</span>"
            },
            message: {
                required: "<span style='margin-left:80px'>Write something to send this form.</span>",
                minlength: "1"
            }
        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"website/main/contact.php",
                success: function() {
                    $('#contact').prop( "disabled", true );
                    $('#contactForm').fadeTo( "fast", "0.2", function() {
                        // $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#successMsg').fadeIn();
                        Materialize.toast('Your message was sent succssfully! We will get back to you soon.', 4000,'',function(){$('#contactForm')[0].reset(); $('#contactForm').fadeTo('slow', '1.0'); $('#contact').prop( "disabled", false );});                        
                    });
                    // setTimeout( function() {$('#contactForm').fadeTo('fast', '1.0');},6000);
                },
                error: function() {
                    $('#contactForm').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                        Materialize.toast('Something went wrong, try refreshing and submitting the form again.', 4000)
                    });
                }
            });
        }
    });
});
});