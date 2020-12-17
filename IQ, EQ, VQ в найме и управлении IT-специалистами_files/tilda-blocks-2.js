function t509_setHeight(recid) {
    var t509__el = $("#rec" + recid);
    var t509__image = t509__el.find(".t509__blockimg");
    t509__image.each(function() {
        var t509__width = $(this).attr("data-image-width");
        var t509__height = $(this).attr("data-image-height");
        var t509__ratio = t509__height / t509__width;
        var t509__padding = t509__ratio * 100;
        $(this).css("padding-bottom", t509__padding + "%")
    });
    if ($(window).width() > 960) {
        var t509__textwr = t509__el.find(".t509__textwrapper");
        var t509__deskimg = t509__el.find(".t509__desktopimg");
        t509__textwr.each(function() { $(this).css("height", t509__deskimg.innerHeight()) })
    }
}

function t698_fixcontentheight(id) {
    var el = $("#rec" + id);
    var hcover = el.find(".t-cover").height();
    var hcontent = el.find("div[data-hook-content]").outerHeight();
    if (hcontent > 300 && hcover < hcontent) {
        var hcontent = hcontent + 120;
        if (hcontent > 1000) { hcontent += 100 }
        console.log('auto correct cover height: ' + hcontent);
        el.find(".t-cover").height(hcontent);
        el.find(".t-cover__filter").height(hcontent);
        el.find(".t-cover__carrier").height(hcontent);
        el.find(".t-cover__wrapper").height(hcontent);
        if ($isMobile == !1) {
            setTimeout(function() {
                var divvideo = el.find(".t-cover__carrier");
                if (divvideo.find('iframe').length > 0) {
                    console.log('correct video from cover_fixcontentheight');
                    setWidthHeightYoutubeVideo(divvideo, hcontent + 'px')
                }
            }, 2000)
        }
    }
}

function t698_onSuccess(t698_form) {
    var t698_inputsWrapper = t698_form.find('.t-form__inputsbox');
    var t698_inputsHeight = t698_inputsWrapper.height();
    var t698_inputsOffset = t698_inputsWrapper.offset().top;
    var t698_inputsBottom = t698_inputsHeight + t698_inputsOffset;
    var t698_targetOffset = t698_form.find('.t-form__successbox').offset().top;
    if ($(window).width() > 960) { var t698_target = t698_targetOffset - 200 } else { var t698_target = t698_targetOffset - 100 }
    if (t698_targetOffset > $(window).scrollTop() || ($(document).height() - t698_inputsBottom) < ($(window).height() - 100)) {
        t698_inputsWrapper.addClass('t698__inputsbox_hidden');
        setTimeout(function() { if ($(window).height() > $('.t-body').height()) { $('.t-tildalabel').animate({ opacity: 0 }, 50) } }, 300)
    } else {
        $('html, body').animate({ scrollTop: t698_target }, 400);
        setTimeout(function() { t698_inputsWrapper.addClass('t698__inputsbox_hidden') }, 400)
    }
    var successurl = t698_form.data('success-url');
    if (successurl && successurl.length > 0) { setTimeout(function() { window.location.href = successurl }, 500) }
}