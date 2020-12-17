function t_animate__getAttrByRes(t, a) { var e, n = $(window).width(); return n >= 1200 ? (e = t.attr("data-animate-" + a), e) : "y" == t.attr("data-animate-mobile") ? n >= 960 ? (e = t.attr("data-animate-" + a + "-res-960"), e || (e = t.attr("data-animate-" + a)), e) : n >= 640 ? (e = t.attr("data-animate-" + a + "-res-640"), e || (e = t.attr("data-animate-" + a + "-res-960")), e || (e = t.attr("data-animate-" + a)), e) : n >= 480 ? (e = t.attr("data-animate-" + a + "-res-480"), e || (e = t.attr("data-animate-" + a + "-res-640")), e || (e = t.attr("data-animate-" + a + "-res-960")), e || (e = t.attr("data-animate-" + a)), e) : n >= 320 ? (e = t.attr("data-animate-" + a + "-res-320"), e || (e = t.attr("data-animate-" + a + "-res-480")), e || (e = t.attr("data-animate-" + a + "-res-640")), e || (e = t.attr("data-animate-" + a + "-res-960")), e || (e = t.attr("data-animate-" + a)), e) : void 0 : void t.css("transition", "none") }

function t_animate__init() {
    if (1 == window.isSearchBot || "yes" == $(".t-records").attr("data-blocks-animationoff") || t_animate__checkIE() || "edit" == $(".t-records").attr("data-tilda-mode")) $(".t-animate").removeClass("t-animate");
    else {
        t_animate__wrapTextWithOpacity(), t_animate__addNoHoverClassToBtns(), $("[data-animate-style=fadeinleft]:not(.t396__elem)").length > 0 && $(".t-records#allrecords").css("overflow-x", "hidden");
        var t = $(".t-animate[data-animate-style='animatednumber']");
        $(window).width() >= 1200 && t_animate__parseNumberText(t), setTimeout(function() { t_animate__startAnimation() }, 1500)
    }
}

function t_animate__checkMobile(t) { return t.filter(function() { return "y" === $(this).attr("data-animate-mobile") || ($(this).removeClass("t-animate"), !1) }), t }

function t_animate__startAnimation() {
    function t() { t_animate__getGroupsOffsets(a), t_animate__getChainOffsets(e), t_animate__getElemsOffsets(n) }
    var a = $(".r").has(".t-animate[data-animate-group=yes]"),
        e = $(".r").has(".t-animate[data-animate-chain=yes]"),
        n = $(".t-animate:not([data-animate-group=yes]):not([data-animate-chain=yes])");
    $(window).width() < 1200 && (a = t_animate__checkMobile(a), e = t_animate__checkMobile(e), n = t_animate__checkMobile(n)), (void 0 !== a && 0 != a.length || void 0 !== n && 0 != n.length || void 0 !== e && 0 != e.length) && (t_animate__setAnimationState(a, e, n), a = a.filter(".r:has(.t-animate_wait)"), n = n.filter(".t-animate_wait"), e = e.filter(".r:has(.t-animate_wait)"), t(), $(window).bind("resize", t_throttle(t, 200)), setInterval(t, 5e3), $(window).bind("scroll", t_throttle(function() { t_animate__animateOnScroll(a, e, n) }, 200)))
}

function t_animate__animateOnScroll(t, a, e) {
    if (0 != t.length || 0 != a.length || 0 != e.length) {
        var n = $(window).scrollTop(),
            i = n + $(window).height();
        if ($("body").is(":animated")) { for (var s = 0; s < t.length; s++) t[s].curTopOffset <= n && $(t[s]).find(".t-animate").removeClass("t-animate t-animate_wait t-animate_no-hover"); for (s = 0; s < e.length; s++) e[s].curTopOffset <= n && $(e[s]).removeClass("t-animate t-animate_no-hover") }
        t_animate__animateGroups(t, i), t_animate__animateChainsBlocks(a, i), t_animate__animateElems(e, i)
    }
}

function t_animate__animateGroups(t, a) {
    if (t.length)
        for (var e = 0; e < t.length; e++)
            if (t[e].curTopOffset < a) {
                var n = $(t[e]),
                    i = n.find(".t-animate:not([data-animate-chain=yes])");
                t_animate__makeSectionButtonWait(n), i = i.filter(".t-animate:not(.t-animate__btn-wait-chain)"), t_animate__saveSectionHeaderStartTime(n), i.removeClass("t-animate_wait"), t_animate__removeNoHoverClassFromBtns(i), i.addClass("t-animate_started"), t.splice(e, 1), e--
            }
}

function t_animate__animateChainsBlocks(t, a) {
    for (var e = 0; e < t.length; e++) {
        var n = $(t[e]);
        t[e].itemsOffsets[0] > a || 0 == n.find(".t-animate_wait").length || (t_animate__animateChainItemsOnScroll(t, e, a), 0 == t[e].itemsOffsets.length && (t.splice(e, 1), e--), t_animate__checkSectionButtonAnimation__outOfTurn(n))
    }
}

function t_animate__animateChainItemsOnScroll(t, a, e) {
    var n = $(t[a]),
        i = n.find(".t-animate_wait[data-animate-chain=yes]"),
        s = 0,
        r = 0,
        o = t[a].itemsOffsets[0],
        m = .16,
        _ = t_animate__getDelayFromPreviousScrollEvent(n, i, m),
        l = t_animate__getSectionHeadDealy(n);
    $(i[0]).addClass("t-animate__chain_first-in-row");
    for (var d = 0; d < i.length; d++) {
        var c = $(i[d]),
            f = t[a].itemsOffsets[d];
        if (!(f < e)) break;
        f != o && (c.addClass("t-animate__chain_first-in-row"), r++, s = r, o = f);
        var h = s * m + _ + l;
        c.css("transition-delay", h + "s"), c.removeClass("t-animate_wait"), c.addClass("t-animate_started"), c.attr("data-animate-start-time", Date.now() + 1e3 * h), c[0] == i.last()[0] && t_animate__checkSectionButtonAnimation(n, h), f == o && s++, i.splice(d, 1), t[a].itemsOffsets.splice(d, 1), d--
    }
    t_animate__catchTransitionEndEvent(n)
}

function t_animate__getSectionHeadDealy(t) {
    var a = t.find(".t-section__title.t-animate"),
        e = t.find(".t-section__descr.t-animate"),
        n = 0;
    return a.length && Date.now() - a.attr("data-animate-start-time") <= 160 ? (n = .16, n) : e.length && Date.now() - e.attr("data-animate-start-time") <= 160 ? (n = .16, n) : n
}

function t_animate__getDelayFromPreviousScrollEvent(t, a, e) {
    var n = 0 == t.find(".t-animate_started").length,
        i = t.find(".t-animate__chain_first-in-row.t-animate_started:not(.t-animate__chain_showed)");
    if (n || 0 == i.length) return 0;
    var s = i.last(),
        r = s.attr("data-animate-start-time"),
        o = r - Date.now();
    return o <= 0 ? e : o / 1e3 + 1 * e
}

function t_animate__catchTransitionEndEvent(t) { t.find(".t-animate__chain_first-in-row.t-animate_started:not(.t-animate__chain_showed)").each(function() { $(this).on("TransitionEnd webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(t) { $(this).addClass("t-animate__chain_showed"), $(this).off(t) }) }) }

function t_animate__animateElems(t, a) {
    if (t.length)
        for (var e = 0; e < t.length; e++) {
            var n = t_animate__detectElemTriggerOffset($(t[e]), a);
            t[e].curTopOffset < n && ($(t[e]).removeClass("t-animate_wait"), t_animate__removeNoHoverClassFromBtns($(t[e])), $(t[e]).addClass("t-animate_started"), "animatednumber" == t_animate__getAttrByRes($(t[e]), "style") && t_animate__animateNumbers($(t[e])), t.splice(e, 1), e--)
        }
}

function t_animate__parseNumberText(t) {
    var a = $(window).scrollTop();
    t.each(function() {
        var t = $(this),
            e = "",
            n = "";
        if (0 !== t.find('div[data-customstyle="yes"]').length) {
            n = "";
            t.find("span").each(function() { n += $(this).attr("style"), $(this).removeAttr("style"), $(this).removeAttr("data-redactor-style") }), e = t.find('div[data-customstyle="yes"]').html();
            var i = t.attr("style");
            i += t.find("div[data-customstyle]").attr("style"), t.attr("style", i)
        } else t.find("span").each(function() { n += $(this).attr("style"), $(this).removeAttr("style"), $(this).removeAttr("data-redactor-style") }), e = t.html();
        if (n = n.split(";").filter(function(t, a) { return n.split(";").indexOf(t) === a }).join(";"), !($(this).offset().top < a - 500) && e.length > 0) {
            var s = e.replace(/[^\d\.\,\ ]+/g, "").match(/\d+\.\d+|\d+\,\d+/g),
                r = removeNumberSpace = e.replace(/<br>/g, " ").replace(/[^\d\.\,\ ]+/g, "").replace(/ (\.|,)/g, "").replace(/(\d)(?=\d) /g, "$1").trim();
            if (-1 === e.indexOf(r) && (nremoveNumberSpace = numbe = r.split(" ")[0]), "" !== r) {
                var o;
                if (t.attr("data-animate-number-count", e), null !== s)
                    if (-1 !== r.indexOf(",") && (o = r.split(",")), -1 !== r.indexOf(".") && (o = r.split(".")), -1 !== r.indexOf(",") || -1 !== r.indexOf(".")) {
                        var m = o[1].length;
                        r = +o.join("."), r = r.toFixed(m)
                    }
                t_animate__changeNumberOnZero(t, e.replace(removeNumberSpace, "num")), t.find("span:not(.t-animate__number)").each(function() { $(this).attr("style", n) })
            }
        }
    })
}

function t_animate__changeNumberOnZero(t, a) {
    var e = a.replace(/num/g, '<span class="t-animate__number">0</span>');
    t.html(e)
}

function t_animate__animateNumbers(t) {
    t.each(function() {
        var t = $(this),
            a = t.attr("data-animate-number-count"),
            e = [];
        if (t.find("span:not(.t-animate__number):first").each(function() { e = $(this).attr("style") }), a) {
            var n = a.match(/\d+\.\d+|\d+\,\d+/g),
                i = a.match(/\d+/g),
                s = a.replace(/(\d)(?= \d) /g, "$1"),
                r = s.split(" "),
                o = [];
            r.forEach(function(t, a) { isNaN(parseInt(t.replace(/[^\d\.\,\ ]+/g, ""), 10)) || o.push(t.replace(/[^\d\.\,\ ]+/g, "")) });
            var m = 0,
                _ = !1;
            t.removeAttr("data-animate-number-count"), null !== n && (_ = -1 != n[0].indexOf(",")), o.forEach(function(t, a) {
                var e;
                null !== n && (-1 !== t.indexOf(",") && (e = t.split(",")), -1 !== t.indexOf(".") && (e = t.split(".")), -1 === t.indexOf(",") && -1 === t.indexOf(".") || (m = e[1].length, o[a] = +e.join("."), !0))
            });
            var l = [];
            t.find(".t-animate__number").each(function() { l.push($(this).text()) }), o.forEach(function(n, s) {
                void 0 !== l[s] && $({ animateCounter: l[s] }).animate({ animateCounter: n }, {
                    duration: 1500,
                    easing: "swing",
                    step: function(a) {
                        var e, r = t.find(".t-animate__number")[s],
                            o = Math.pow(10, m);
                        e = a ? (Math.round(this.animateCounter * o) / o).toFixed(m) + "" : Math.floor(this.animateCounter) + "", i.length > 1 && (e = e.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")), _ && (e = e.replace(/\./g, ","), n = (n + "").replace(/\./g, ",")), $(r).text(e)
                    },
                    complete: function() { t.html(a), t.find("span").each(function() { $(this).attr("style", e) }) }
                })
            })
        }
    })
}

function t_animate__setAnimationState(t, a, e) {
    var n = $(window).scrollTop(),
        i = n + $(window).height();
    t.each(function() {
        var t = $(this),
            a = t.find(".t-animate:not([data-animate-chain=yes])"),
            e = a.first().offset().top;
        t_animate__removeAnimFromHiddenSlides(t);
        var s = t_animate__assignSectionDelay(t);
        if (t_animate__assignGroupDelay(t, s), e <= n - 100) return t_animate__saveSectionHeaderStartTime(t), a.removeClass("t-animate t-animate_no-hover"), a.css("transition-delay", ""), !0;
        e < i && e > n - 100 && (t_animate__makeSectionButtonWait(t), a = a.filter(".t-animate:not(.t-animate__btn-wait-chain)"), t_animate__removeNoHoverClassFromBtns(a), a.addClass("t-animate_started")), e >= i && a.addClass("t-animate_wait")
    }), a.each(function() {
        var t = $(this);
        t_animate__assignChainDelay(t, i, n), t_animate__checkSectionButtonAnimation__outOfTurn(t)
    }), e.each(function() {
        var t = $(this),
            a = t.offset().top;
        if (a < n - 500) return t.removeClass("t-animate t-animate_no-hover"), "animatednumber" == t_animate__getAttrByRes(t, "style") && t_animate__animateNumbers(t), !0;
        var e = t_animate__detectElemTriggerOffset(t, i);
        t_animate__setCustomAnimSettings(t, a, i), a < e && (t_animate__removeNoHoverClassFromBtns(t), t.addClass("t-animate_started"), "animatednumber" == t_animate__getAttrByRes(t, "style") && t_animate__animateNumbers(t)), a >= e && t.addClass("t-animate_wait")
    }), $(window).bind("resize", t_throttle(t_animate__removeInlineAnimStyles, 200))
}

function t_animate__assignSectionDelay(t) {
    var a = 0,
        e = t.find(".t-section__title.t-animate"),
        n = t.find(".t-section__descr.t-animate");
    t.find(".t-section__bottomwrapper .t-btn.t-animate");
    return e.length && (a = .16), n.length && (n.css("transition-delay", a + "s"), a += .16), a
}

function t_animate__assignGroupDelay(t, a) {
    var e = 0;
    if (t.find("[data-animate-order]").length) t_animate__assignOrderedElemsDelay(t, a);
    else {
        var n = t.find(".t-img.t-animate"),
            i = t.find(".t-uptitle.t-animate"),
            s = t.find(".t-title.t-animate:not(.t-section__title)"),
            r = t.find(".t-descr.t-animate:not(.t-section__descr)"),
            o = t.find(".t-btn.t-animate:not(.t-section__bottomwrapper .t-btn)"),
            m = t.find(".t-timer.t-animate"),
            _ = t.find("form.t-animate");
        0 != n.length && (e = .5), 0 != s.length && s.css("transition-delay", e + "s"), 0 != s.length && (e += .3), 0 != r.length && r.css("transition-delay", e + "s"), 0 != r.length && (e += .3), 0 != i.length && i.css("transition-delay", e + "s"), 0 != i.length && (e += .3), 0 == i.length && 0 == s.length && 0 == r.length || (e += .2), 0 != m.length && m.css("transition-delay", e + "s"), 0 != m.length && (e += .5), 0 != o.length && $(o.get(0)).css("transition-delay", e + "s"), 2 == o.length && (e += .4), 2 == o.length && $(o.get(1)).css("transition-delay", e + "s"), 0 != _.length && _.css("transition-delay", e + "s")
    }
}

function t_animate__assignOrderedElemsDelay(t, a) {
    var e = 0;
    void 0 !== a && a && (e = a);
    var n = t.find(".t-animate[data-animate-order=1]"),
        i = t.find(".t-animate[data-animate-order=2]"),
        s = t.find(".t-animate[data-animate-order=3]"),
        r = t.find(".t-animate[data-animate-order=4]"),
        o = t.find(".t-animate[data-animate-order=5]");
    elem6 = t.find(".t-animate[data-animate-order=6]"), elem7 = t.find(".t-animate[data-animate-order=7]"), elem8 = t.find(".t-animate[data-animate-order=8]"), elem9 = t.find(".t-animate[data-animate-order=9]"), n.length && n.css("transition-delay", e + "s"), n.length && i.length && (e += 1 * t_animate__getAttrByRes(i, "delay"), i.css("transition-delay", e + "s")), (n.length || i.length) && s.length && (e += 1 * t_animate__getAttrByRes(s, "delay"), s.css("transition-delay", e + "s")), (n.length || i.length || s.length) && r.length && (e += 1 * t_animate__getAttrByRes(r, "delay"), r.css("transition-delay", e + "s")), (n.length || i.length || s.length || r.length) && o.length && (e += 1 * t_animate__getAttrByRes(o, "delay"), o.css("transition-delay", e + "s")), (n.length || i.length || s.length || r.length || o.length) && elem6.length && (e += 1 * t_animate__getAttrByRes(elem6, "delay"), elem6.css("transition-delay", e + "s")), (n.length || i.length || s.length || r.length || o.length || elem6.length) && elem7.length && (e += 1 * t_animate__getAttrByRes(elem7, "delay"), elem7.css("transition-delay", e + "s")), (n.length || i.length || s.length || r.length || o.length || elem6.length || elem7.length) && elem8.length && (e += 1 * t_animate__getAttrByRes(elem8, "delay"), elem8.css("transition-delay", e + "s")), (n.length || i.length || s.length || r.length || o.length || elem6.length || elem7.length || elem8.length) && elem9.length && (e += 1 * t_animate__getAttrByRes(elem9, "delay"), elem9.css("transition-delay", e + "s"))
}

function t_animate__assignChainDelay(t, a, e) {
    var n = t.find(".t-animate[data-animate-chain=yes]"),
        i = 0;
    if (0 != n.length) {
        var s = $(n[0]).offset().top;
        $(n[0]).addClass("t-animate__chain_first-in-row");
        var r = t_animate__getCurBlockSectionHeadDelay(t);
        n.each(function() {
            var o = $(this),
                m = o.offset().top;
            if (m < e) return o.removeClass("t-animate"), !0;
            if (m < a) {
                m != s && (o.addClass("t-animate__chain_first-in-row"), s = m);
                var _ = .16 * i + r;
                o.css("transition-delay", _ + "s"), o.addClass("t-animate_started"), o.attr("data-animate-start-time", Date.now() + 1e3 * _), o[0] == n.last()[0] && t_animate__checkSectionButtonAnimation(t, _), i++, o.on("TransitionEnd webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(t) { $(this).addClass("t-animate__chain_showed"), $(this).off(t) })
            } else o.addClass("t-animate_wait")
        })
    }
}

function t_animate__setCustomAnimSettings(t, a, e) {
    var n = t_animate__getAttrByRes(t, "style"),
        i = t_animate__getAttrByRes(t, "distance");
    void 0 !== i && "" != i && (i = i.replace("px", ""), t.css({ "transition-duration": "0s", "transition-delay": "0s" }), "fadeinup" == n && t.css("transform", "translate3d(0," + i + "px,0)"), "fadeindown" == n && t.css("transform", "translate3d(0,-" + i + "px,0)"), "fadeinleft" == n && t.css("transform", "translate3d(" + i + "px,0,0)"), "fadeinright" == n && t.css("transform", "translate3d(-" + i + "px,0,0)"), t_animate__forceElemInViewPortRepaint(t, a, e), t.css({ "transition-duration": "", "transition-delay": "" }));
    var s = t_animate__getAttrByRes(t, "scale");
    void 0 !== s && "" != s && (t.css({ "transition-duration": "0s", "transition-delay": "0s" }), t.css("transform", "scale(" + s + ")"), t_animate__forceElemInViewPortRepaint(t, a, e), t.css({ "transition-duration": "", "transition-delay": "" }));
    var r = t_animate__getAttrByRes(t, "delay");
    void 0 !== r && "" != r && t.css("transition-delay", r + "s");
    var o = t_animate__getAttrByRes(t, "duration");
    void 0 !== o && "" != o && t.css("transition-duration", o + "s")
}

function t_animate__removeInlineAnimStyles() { $(window).width() < 980 && $(".t396__elem.t-animate").css({ transform: "", "transition-duration": "", "transition-delay": "" }) }

function t_animate__forceElemInViewPortRepaint(t, a, e) { a < e + 500 && t[0].offsetHeight }

function t_animate__detectElemTriggerOffset(t, a) {
    var e = t_animate__getAttrByRes(t, "trigger-offset"),
        n = a;
    return void 0 !== e && "" != e && (e = e.replace("px", ""), n = a - 1 * e), n
}

function t_animate__saveSectionHeaderStartTime(t) {
    var a = t.find(".t-section__title.t-animate"),
        e = t.find(".t-section__descr.t-animate");
    a.length && a.attr("data-animate-start-time", Date.now()), e.length && e.attr("data-animate-start-time", Date.now() + 160)
}

function t_animate__getCurBlockSectionHeadDelay(t) { var a = 0; return 0 != t.find(".t-section__title.t-animate").length && (a += .16), 0 != t.find(".t-section__descr.t-animate").length && (a += .16), a }

function t_animate__makeSectionButtonWait(t) {
    var a = t.find(".t-animate[data-animate-chain=yes]").length,
        e = t.find(".t-section__bottomwrapper .t-btn.t-animate");
    a && e && e.addClass("t-animate__btn-wait-chain")
}

function t_animate__checkSectionButtonAnimation(t, a) {
    var e = t.find(".t-animate__btn-wait-chain");
    e.length && (e.css("transition-delay", a + .16 + "s"), t_animate__removeNoHoverClassFromBtns(e), e.removeClass("t-animate__btn-wait-chain"), e.addClass("t-animate_started"))
}

function t_animate__checkSectionButtonAnimation__outOfTurn(t) {
    var a = t.find(".t-animate[data-animate-chain=yes]:not(.t-animate_started)");
    if (0 === a.length) {
        var e = .16;
        t_animate__checkSectionButtonAnimation(t, e)
    }
}

function t_animate__addNoHoverClassToBtns() { $(".t-btn.t-animate").addClass("t-animate_no-hover") }

function t_animate__removeNoHoverClassFromBtns(t) {
    t.filter(".t-btn").each(function() {
        var t = $(this);
        t.get(0).addEventListener("transitionend", function(t) { "opacity" != t.propertyName && "transform" != t.propertyName || ($(this).removeClass("t-animate_no-hover"), $(this).css("transition-delay", ""), $(this).css("transition-duration", ""), $(this).off(t)) })
    })
}

function t_animate__getGroupsOffsets(t) { for (var a = 0; a < t.length; a++) $(t[a]).find(".t-animate").length > 0 && (t[a].curTopOffset = $(t[a].querySelector(".t-animate")).offset().top) }

function t_animate__getChainOffsets(t) {
    for (var a = 0; a < t.length; a++) {
        var e = $(t[a]).find(".t-animate_wait[data-animate-chain=yes]");
        t[a].itemsOffsets = [];
        for (var n = 0; n < e.length; n++) $(e[n]).length > 0 && (t[a].itemsOffsets[n] = $(e[n]).offset().top)
    }
}

function t_animate__getElemsOffsets(t) { for (var a = 0; a < t.length; a++) t[a].curTopOffset = $(t[a]).offset().top }

function t_animate__removeAnimFromHiddenSlides(t) {
    if (t.find(".t-slides").length) {
        var a = t.find(".t-slides__item:not(.t-slides__item_active) .t-animate");
        a.removeClass("t-animate t-animate_no-hover")
    }
}

function t_animate__wrapTextWithOpacity() {
    var t = $(".t-title.t-animate,.t-descr.t-animate,.t-uptitle.t-animate,.t-text.t-animate");
    t.each(function(t, a) {
        var e = $(this).attr("style");
        if (void 0 !== e && e.indexOf("opacity") >= 0) {
            var n = $(a).css("opacity");
            void 0 !== n && n > 0 && ($(a).css("opacity", ""), $(a).wrapInner('<div style="opacity: ' + n + '"></div>'))
        }
    })
}

function t_animate__checkIE() {
    var t = window.navigator.userAgent,
        a = t.indexOf("MSIE"),
        e = "",
        n = !1;
    return a > 0 && (e = parseInt(t.substring(a + 5, t.indexOf(".", a))), 8 != e && 9 != e || (n = !0)), n
}
$(document).ready(function() { t_animate__init() });