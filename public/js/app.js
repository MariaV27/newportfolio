function equalizeHeight() {
    var e = $("html").not(".ie6").find(".section");
    e.css({
        "min-height": $(window).height() - 30 + "px"
    }), $(window).resize(function() {
        e.css({
            "min-height": $(window).height() - 30 + "px"
        })
    })
}

function onScroll() {
    var e = $(document).scrollTop();
    $("#menu li a").each(function() {
        var o = $(this),
            i = $(o.attr("href"));
        i.position().top <= e && i.position().top + i.height() > e ? ($("#menu li a").removeClass("active"), o.addClass("active")) : o.removeClass("active")
    })
}
var num = 50;
$(window).bind("scroll", function() {
    jQuery(window).scrollTop() > num ? jQuery(".main-menu").addClass("floating-menu") : jQuery(".main-menu").removeClass("floating-menu")
}), equalizeHeight(), (new WOW).init(), smoothScroll.init({
    speed: 1e3,
    easing: "easeInOutCubic",
    offset: 0,
    updateURL: !1,
    callbackBefore: function() {},
    callbackAfter: function() {}
}), $(document).on("scroll", onScroll), $("div.bgParallax").each(function() {
    var e = $(this);
    $(window).scroll(function() {
        var o = -($(window).scrollTop() / e.data("speed")),
            i = "50% " + o + "px";
        e.css("background-position", i)
    })
}), $(window).load(function() {
    $(".hcaption").hcaptions({
        effect: "fade"
    })
}), $(document).ready(function() {
    $("a.nivo-light").nivoLightbox({
        effect: "fade",
        theme: "default",
        keyboardNav: !0
    })
}), $(".carousel").carousel({
    interval: 3e3
}), jQuery(document).ready(function() {
    var e = 220,
        o = 500;
    jQuery(window).scroll(function() {
        jQuery(this).scrollTop() > e ? jQuery(".back-to-top").fadeIn(o) : jQuery(".back-to-top").fadeOut(o)
    }), jQuery(".back-to-top").click(function(e) {
        return e.preventDefault(), jQuery("html, body").animate({
            scrollTop: 0
        }, o), !1
    })
}), $("#contact-form").bootstrapValidator({
    message: "This value is not valid",
    feedbackIcons: {
        valid: "glyphicon glyphicon-ok",
        invalid: "glyphicon glyphicon-remove",
        validating: "glyphicon glyphicon-refresh"
    },
    fields: {
        Name: {
            validators: {
                notEmpty: {
                    message: "The Name is required and cannot be empty"
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: "The email address is required"
                },
                emailAddress: {
                    message: "The email address is not valid"
                }
            }
        },
        Message: {
            validators: {
                notEmpty: {
                    message: "The Message is required and cannot be empty"
                }
            }
        }
    }
}), $(window).load(function() {
    $("#status").fadeOut(), $("#preloader").delay(350).fadeOut("slow"), $("body").delay(350).css({
        overflow: "visible"
    })
});