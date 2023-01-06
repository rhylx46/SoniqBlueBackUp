$(function () {
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            let response = grecaptcha.getResponse();
            if (response.length == 0) {
                $("#g-recaptcha-error").html("<div>");
                $('#g-recaptcha-error').append('<span style="color:red;"> This field is required, please click it before you send us a mail. Thanks. </span>');
                $('#g-recaptcha-error').append('</div>');
            } else {

                var fname = $("input#fname").val();
                var lname = $("input#lname").val();
                var email = $("input#email").val();
                var message = $("textarea#message").val();
                $.ajax({
                    url: "././mail/contact_me.php",
                    type: "POST",
                    data: {
                        fname: fname,
                        lname: lname,
                        email: email,
                        message: message
                    },
                    cache: false,
                    success: function () {
                        // Success message
                        $('#success').html("<div>");
                        $('#success').append("<strong>Thanks for contacting us, " + fname + " " + lname + ". Your message has been sent. </strong>");
                        $('#success').append('</div>');
                        //clear all fields
                        $('#contactForm').trigger("reset");
                    },
                    error: function () {
                        // Fail message
                        $('#success').html("<div>");
                        $('#success').append("<strong>Sorry " + fname + " " + lname + ", it seems that our mail server is not responding. Please try again later!</strong>");
                        $('#success').append('</div>');
                        //clear all fields
                        $('#contactForm').trigger("reset");
                    },
                })

                $("#g-recaptcha-error").html("<div>");
                $('#g-recaptcha-error').append('<span"></span>');
                $('#g-recaptcha-error').append('</div>');

            }

        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

});

