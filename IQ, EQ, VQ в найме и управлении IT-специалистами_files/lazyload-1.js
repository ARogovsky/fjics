var lzld = "16121340";

function t_lazyload_update() { "undefined" != typeof lazyload_cover && lazyload_cover.update(), "undefined" != typeof lazyload_img && lazyload_img.update(), "undefined" != typeof lazyload_bgimg && lazyload_bgimg.update(), "undefined" != typeof lazyload_iframe && lazyload_iframe.update() }

function t_lazyload_getResizeUrl(t, e, i, o, n, a, l, r) {
    if ("undefined" == i || null == i) return i;
    if (0 < i.indexOf(".svg") || 0 < i.indexOf(".gif") || 0 < i.indexOf(".ico") || -1 === i.indexOf("#") || 0 < i.indexOf("-/empty/") || 0 < i.indexOf("-/resizeb/")) return i;
    if (-1 < i.indexOf("/-/")) return i;
    if (0 == o && 0 == n) return i;
    if ("y" == window.lazy_err) return i;
    if (-1 < i.indexOf("lib")) return i;
    if ("IMG" != t && "DIV" != t && "TD" != t && "A" != t) return i;
    var s;
    if (1 < window.devicePixelRatio && window.t_lazyload_domloaded < 2500 && (0 < o && (o = parseInt(2 * o)), 0 < n && (n = parseInt(2 * n))), 1e3 < o || 1800 < n) return d = t_lazyload_getWebPUrl(i);
    if ("resize" == e) {
        (s = i.split("/")).splice(i.split("/").length - 1, 0, "-/resize/" + o + "x" + ("DIV" == t && 0 < n ? n : "") + "/" + ("y" == window.lazy_webp ? "-/format/webp" : ""));
        var d = s.join("/").replace("#", "#")
    } else {
        if (!(0 < o && 0 < n)) return i;
        "left" == a || "right" == a || (a = "center"), "top" == l || "bottom" == l || (l = "center"), (s = i.split("/")).splice(i.split("/").length - 1, 0, "-/" + e + "/" + o + "x" + n + "/" + a + "/" + l + "/" + ("y" == window.lazy_webp ? "-/format/webp" : ""));
        d = s.join("/").replace("#", "#")
    }
    return d
}

function t_lazyload_round(t, e, i, o) { var n, a; return "cover" == t && 0 < e && 0 < i ? (n = e / i) <= (a = 1) ? (n <= .8 && (a = .8), n <= .751 && (a = .75), n <= .667 && (a = .667), n <= .563 && (a = .562), n <= .501 && (a = .5), i = Math.ceil(i / o) * o, e = Math.ceil(i * a), e = 10 * Math.ceil(e / 10)) : (1.25 <= n && (a = 1.25), 1.332 <= n && (a = 1.333), 1.5 <= n && (a = 1.5), 1.777 <= n && (a = 1.777), 2 <= n && (a = 2), e = Math.ceil(e / o) * o, i = Math.ceil(e / a), i = 10 * Math.ceil(i / 10)) : (0 < e && (e = Math.ceil(e / o) * o), 0 < i && (i = Math.ceil(i / o) * o)), [e, i] }

function t_lazyload_reloadonError(t, e) {
    if (void 0 !== e && null != e && "" != e && -1 !== e.indexOf("#") && -1 !== e.indexOf("/-/")) {
        var i, o = e.split("/"),
            n = "",
            a = "";
        if (3 < o.length)
            for (var l = 0; l < o.length; l++) "" != o[l] && ("til" == o[l].substring(0, 3) && 36 == o[l].length && 4 == (o[l].match(/-/g) || []).length && (n = o[l]), l == o.length - 1 && (a = o[l]));
        "" != n && "" != a && (i = "#" + n + "/" + a, console.log("try reload:" + i), "IMG" === t.tagName ? i && t.setAttribute("src", i) : i && (t.style.backgroundImage = "url(" + i + ")")), $.ajax({ method: "POST", url: "#", data: { url: e } })
    }
}

function t_lazyload_getWebPUrl(t) { if ("undefined" == t || null == t) return t; if (0 < t.indexOf(".svg") || 0 < t.indexOf(".gif") || 0 < t.indexOf(".ico") || -1 === t.indexOf("#") || 0 < t.indexOf("-/empty/") || 0 < t.indexOf("-/resizeb/")) return t; if (-1 < t.indexOf("/-/")) return t; if (-1 < t.indexOf("lib")) return t; if ("y" != window.lazy_webp) return t; if ("y" == window.lazy_err) return t; var e = t.split("/"); return e.splice(t.split("/").length - 1, 0, "-/format/webp"), e.join("/").replace("#", "#") }

function t_lazyload_onWindowResize() { $(".t-cover__carrier, .t-bgimg, .t-img").each(function() { window.t_lazyload_updateResize_elem($(this)) }) }

function t_lazyload_detectwebp() {
    var t = new Image;
    t.onload = t.onerror = function() { 2 != t.height ? console.log("no webp support") : window.lazy_webp = "y" }, t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
}! function(t, e) { "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.LazyLoad = e() }(this, function() {
    var e, n, a, i, o = !1;

    function l(t, e, i) {
        var o;
        n ? t.addEventListener(e, i) : a && (t.attachEvent("on" + e, (o = t, function() { i.call(o, window.event) })), t = null)
    }

    function r(t, e, i) { n ? t.removeEventListener(e, i) : a && t.detachEvent("on" + e, i) }

    function s(t, e, i) {
        var o, n, a;

        function l() { return window.innerWidth || o.documentElement.clientWidth || document.body.clientWidth }

        function r(t) { return t.getBoundingClientRect().top + n - o.documentElement.clientTop }

        function s(t) { return t.getBoundingClientRect().left + a - o.documentElement.clientLeft }
        return o = t.ownerDocument, n = window.pageYOffset || o.body.scrollTop, a = window.pageXOffset || o.body.scrollLeft, "fixed" === t.getAttribute("data-content-cover-parallax") && t.closest && t.closest(".t-cover__container") && (t = t.closest(".t-cover__container")), !((e === window ? (window.innerHeight || o.documentElement.clientHeight || document.body.clientHeight) + n : r(e) + e.offsetHeight) <= r(t) - i || (e === window ? n : r(e)) >= r(t) + i + t.offsetHeight || (e === window ? l() + window.pageXOffset : s(e) + l()) <= s(t) - i || (e === window ? a : s(e)) >= s(t) + i + t.offsetWidth)
    }

    function d() { return (new Date).getTime() }

    function c(t, e) { i ? t.classList.add(e) : t.className += (t.className ? " " : "") + e }

    function x(t, e) { i ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "") }

    function _(t, e, i, o) {
        var n = e.getAttribute("data-" + o);
        if (null != n) {
            var a, l = e.clientWidth,
                r = e.clientHeight,
                s = $(e);
            !s.hasClass("t-slds__bgimg") && !s.hasClass("t-slds__img") || s.hasClass("t827__image") || (0 == (a = s.parents(".t-slds__container")).length && (a = s.parents(".t-slds__thumbsbullet").length), a.length && (l = a.width(), r = a.height()));
            var d, c = "",
                x = "",
                _ = "",
                u = "",
                h = 1,
                f = !0,
                g = !1;
            if ("yes" == window.lazy_imgoptimoff && (f = !1), "IMG" === e.tagName ? u = "resize" : ("50%" == (c = (d = s.css("backgroundPosition").split(" "))[0]) ? c = "center" : "0%" == c ? c = "left" : "100%" == c && (c = "right"), "50%" == (x = d[1]) ? x = "center" : "0%" == x ? x = "top" : "100%" == x && (c = "bottom"), u = "contain" == (_ = s.css("background-size")) ? "contain" : "cover", "fixed" == s.css("background-attachment") && (g = !0)), void 0 !== s.attr("data-lazy-rule"))
                for (var p = s.attr("data-lazy-rule").split(","), m = 0; m < p.length; m++) - 1 < p[m].indexOf("round:") && (h = +p[m].split(":")[1]), -1 < p[m].indexOf("comm:") && "resize" != (u = p[m].split(":")[1]) && "cover" != u && "contain" != u && (f = !1), -1 < p[m].indexOf("skip") && (g = !0), -1 < p[m].indexOf("optimoff") && (f = !1);
            1 < h && (l = (d = t_lazyload_round(u, l, r, h))[0], r = d[1]), "cover" == u && 0 < l && 0 < r && l <= 1e3 && (l === 5 * Math.ceil(l / 5) && r === 5 * Math.ceil(r / 5) || -1 < ["200x151", "640x712", "320x356", "670x744", "335x372", "300x225", "500x375", "400x301", "748x832", "374x416", "670x502", "335x251", "360x234", "560x622", "280x311", "640x416"].indexOf(l + "x" + r) || -1 < ["353x245", "155x151", "158x164", "372x495", "280x272", "117x117", "291x280", "280x269", "335x241", "283x283", "150x156", "353x233", "414x730", "372x362", "275x206", "290x322", "248x207", "177x136", "173x173", "280x308", "195x214", "248x191", "155x196", "163x203", "320x444", "158x162", "176x203", "412x700", "360x88", "360x616", "167x167", "130x144", "280x233", "560x314", "320x299", "372x275", "320x178", "372x242", "360x352", "353x294", "260x182", "372x310", "335x344", "374x432", "414x500", "374x360", "220x338", "150x146", "335x239", "176x176", "320x302", "374x260", "360x568", "191x221", "192x192", "372x558", "335x188", "320x358", "335x258", "374x575", "26x26", "353x360", "360x206", "335x248", "335x322", "167x256", "560x364", "155x172", "163x216", "163x181", "360x257", "374x561", "374x243", "220x212", "177x148", "291x324", "167x160", "375x749", "335x387", "172x172", "260x302", "414x700", "220x254", "177x172", "374x519", "176x169", "320x352", "335x233", "150x203", "360x207", "158x121", "360x396", "158x131", "150x98", "220x169", "182x202", "320x179", "372x413", "181x226", "353x200", "158x153", "375x628", "176x271", "374x364", "320x492", "374x247", "414x833", "353x393", "335x218", "560x399", "412x264", "293x164", "56x56", "177x204", "248x382", "181x181", "118x118", "260x346", "374x497", "260x202", "393x251", "158x158", "372x200", "373x414", "320x229", "177x177", "312x175", "374x312", "84x84", "320x329", "177x194", "353x350", "335x503", "335x446", "335x326", "374x200", "158x182", "320x237", "335x221", "176x196", "150x229", "320x224", "248x276", "360x299", "260x289", "196x216", "335x279", "177x272", "320x426", "260x172", "155x194", "320x369", "372x350", "360x302", "360x402", "169x186", "158x242", "173x199", "167x185", "360x238", "220x123", "320x308", "414x265", "374x350", "300x333", "177x170", "320x222", "320x311", "260x169", "150x173", "320x246", "353x265", "192x222", "158x151", "372x414", "150x144", "760x502", "314x176", "320x208", "182x182", "320x211", "163x163", "372x279", "360x202", "360x252", "260x252", "260x286", "353x392", "160x104", "374x281", "353x353", "150x231", "320x267", "372x372", "177x197", "275x154", "158x175", "374x374", "150x167", "260x146"].indexOf(l + "x" + r) || s.hasClass("tn-atom") || s.hasClass("tn-atom__img") || (s.hasClass("t-cover__carrier") || (u = "resize"), l = (d = t_lazyload_round(u, l, r, 100))[0], r = d[1])), !0 === f && (n = !0 === g || 1e3 < l || 1e3 < r || 0 == l || "IMG" != e.tagName && 0 == r ? t_lazyload_getWebPUrl(n) : t_lazyload_getResizeUrl(e.tagName, u, n, l, r, c, x, _)), "IMG" !== t.tagName && "IFRAME" !== t.tagName ? t.style.backgroundImage = "url(" + n + ")" : n && t.setAttribute("src", n)
        }
    }

    function u(t, e) { return function() { return t.apply(e, arguments) } }

    function t(t) { o || (e = { elements_selector: "img", container: window, threshold: 300, throttle: 50, data_src: "original", data_srcset: "original-set", class_loading: "loading", class_loaded: "loaded", skip_invisible: !0, show_while_loading: !0, callback_load: null, callback_error: null, callback_set: null, callback_processed: null, placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" }, n = !!window.addEventListener, a = !!window.attachEvent, i = !!document.body.classList, o = !0), this._settings = function(t, e) { var i, o = {}; for (i in t) t.hasOwnProperty(i) && (o[i] = t[i]); for (i in e) e.hasOwnProperty(i) && (o[i] = e[i]); return o }(e, t), this._queryOriginNode = this._settings.container === window ? document : this._settings.container, this._previousLoopTime = 0, this._loopTimeout = null, this._handleScrollFn = u(this.handleScroll, this), l(window, "resize", this._handleScrollFn), this.update(), this.loadAnimatedImages() }
    return t.prototype._showOnLoad = function(e) {
        var i, o = this._settings;
        e.getAttribute("src") || e.setAttribute("src", o.placeholder), l(i = document.createElement("img"), "load", function t() { null !== o && (o.callback_load && o.callback_load(e), _(e, e, o.data_srcset, o.data_src), o.callback_set && o.callback_set(e), x(e, o.class_loading), c(e, o.class_loaded), r(i, "load", t)) }), l(i, "error", function(t) { x(e, o.class_loading), o.callback_error && o.callback_error(e), window.lazy_err = "y", console.log("lazy loading err"), void 0 !== t.path ? t_lazyload_reloadonError(e, t.path[0].currentSrc) : void 0 !== t.target && t_lazyload_reloadonError(e, t.target.currentSrc) }), c(e, o.class_loading), Date.now(), _(i, e, o.data_srcset, o.data_src)
    }, t.prototype._showOnAppear = function(e) {
        var i = this._settings;

        function o() { null !== i && (i.callback_load && i.callback_load(e), x(e, i.class_loading), c(e, i.class_loaded), r(e, "load", o)) }
        "IMG" !== e.tagName && "IFRAME" !== e.tagName || (l(e, "load", o), l(e, "error", function(t) { r(e, "load", o), x(e, i.class_loading), i.callback_error && i.callback_error(e), window.lazy_err = "y", console.log("lazy loading err"), void 0 !== t.path ? t_lazyload_reloadonError(e, t.path[0].currentSrc) : void 0 !== t.target && t_lazyload_reloadonError(e, t.target.currentSrc) }), c(e, i.class_loading)), startTime = Date.now(), _(e, e, i.data_srcset, i.data_src), i.callback_set && i.callback_set(e)
    }, t.prototype._loopThroughElements = function() {
        for (var t, e = this._settings, i = this._elements, o = i ? i.length : 0, n = [], a = 0; a < o; a++) t = i[a], e.skip_invisible && null === t.offsetParent && 0 === $(t).parents(".t396__carrier-wrapper").length && "fixed" !== t.getAttribute("data-content-cover-parallax") || s(t, e.container, e.threshold) && (e.show_while_loading ? this._showOnAppear(t) : this._showOnLoad(t), n.push(a), t.wasProcessed = !0);
        for (; 0 < n.length;) i.splice(n.pop(), 1), e.callback_processed && e.callback_processed(i.length);
        0 === o && this._stopScrollHandler()
    }, t.prototype._purgeElements = function() { for (var t = this._elements, e = t.length, i = [], o = 0; o < e; o++) t[o].wasProcessed && i.push(o); for (; 0 < i.length;) t.splice(i.pop(), 1) }, t.prototype._startScrollHandler = function() { this._isHandlingScroll || (this._isHandlingScroll = !0, l(this._settings.container, "scroll", this._handleScrollFn)) }, t.prototype._stopScrollHandler = function() { this._isHandlingScroll && (this._isHandlingScroll = !1, r(this._settings.container, "scroll", this._handleScrollFn)) }, t.prototype.loadAnimatedImages = function() {
        var t, e, d = this._settings,
            i = this._elements,
            o = i ? i.length : 0,
            n = [];

        function a(t, e) {
            var i, o, n, a, l = (i = t, "trigger" === (o = e) ? (n = i.attr("data-animate-sbs-trgels"), a = $('[data-elem-id="' + n + '"]')) : "viewport" === o && (a = i.parents(".t396")), a ? a.offset() : null);
            if (l) {
                var r = Math.abs(l.top - t.offset().top),
                    s = Math.abs(l.left - t.offset().left);
                return r > d.threshold || s > d.threshold
            }
        }
        for (t = 0; t < o; t++) {
            e = i[t];
            var l, r = $(e).parents(".tn-elem"),
                s = r.attr("data-animate-sbs-opts"),
                c = r.attr("data-animate-sbs-event");
            "intoview" !== c && "blockintoview" !== c || (l = "viewport"), r.attr("data-animate-sbs-trgels") && (l = "trigger"), d.skip_invisible && null === e.offsetParent || !s || a(r, l) && (d.show_while_loading ? this._showOnAppear(e) : this._showOnLoad(e), n.push(t), e.wasProcessed = !0)
        }
        for (; 0 < n.length;) i.splice(n.pop(), 1), d.callback_processed && d.callback_processed(i.length)
    }, t.prototype.handleScroll = function() {
        var t, e, i;
        this._settings && (e = d(), 0 !== (i = this._settings.throttle) ? (t = i - (e - this._previousLoopTime)) <= 0 || i < t ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = e, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(u(function() { this._previousLoopTime = d(), this._loopTimeout = null, this._loopThroughElements() }, this), t)) : this._loopThroughElements())
    }, t.prototype.update = function() {
        this._elements = function(e) {
            try { return Array.prototype.slice.call(e) } catch (t) {
                var i, o = [],
                    n = e.length;
                for (i = 0; i < n; i++) o.push(e[i]);
                return o
            }
        }(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)), this._purgeElements(), this._loopThroughElements(), this._startScrollHandler()
    }, t.prototype.destroy = function() { r(window, "resize", this._handleScrollFn), this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._stopScrollHandler(), this._elements = null, this._queryOriginNode = null, this._settings = null }, t
}), window.lazy = "y", $(document).ready(function() { t_lazyload_detectwebp(), $("#allrecords").length && "yes" == $("#allrecords").attr("data-tilda-imgoptimoff") ? window.lazy_imgoptimoff = "yes" : window.lazy_imgoptimoff = "", $(".t156").find(".t-img").attr("data-lazy-rule", "skip"), $(".t492,.t552,.t251,.t603,.t660,.t661,.t662,.t680,.t827,.t909,.t218,.t740,.t132,.t694,.t762,.t786,.t546").find(".t-bgimg").attr("data-lazy-rule", "comm:resize,round:100"), setTimeout(function() { lazyload_cover = new LazyLoad({ elements_selector: ".t-cover__carrier", show_while_loading: !1, data_src: "content-cover-bg", placeholder: "", threshold: 700 }) }, 100), setTimeout(function() { lazyload_img = new LazyLoad({ elements_selector: ".t-img", threshold: 800 }), lazyload_bgimg = new LazyLoad({ elements_selector: ".t-bgimg", show_while_loading: !1, placeholder: "", threshold: 800 }), lazyload_iframe = new LazyLoad({ elements_selector: ".t-iframe" }), $(document).bind("slide.bs.carousel", function(t) { setTimeout(function() { lazyload_cover.update(), lazyload_img.update(), lazyload_bgimg.update() }, 500) }), window.isMobile && ($("body").append("<div class='t-mbfix'></div>"), setTimeout(function() { $(".t-mbfix").addClass("t-mbfix_hide") }, 50), setTimeout(function() { $(".t-mbfix").remove() }, 1e3)) }, 500), "yes" != window.lazy_imgoptimoff && $(window).bind("resize", t_throttle(function() { clearTimeout(window.t_lazyload_resize_timerid), window.t_lazyload_resize_timerid = setTimeout(t_lazyload_onWindowResize, 1e3) }, 500)), setTimeout(function() { void 0 !== window.performance && (window.t_lazyload_domloaded = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart) }, 0) }), window.t_lazyload_updateResize_elem = function(t) {
    var e, i, o, n, a, l, r, s, d, c;
    0 != t.length && (n = "IMG" == (i = (e = t.get(0)).tagName) ? (o = t.attr("src"), "-/resize/") : (o = t.css("background-image").replace("url(", "").replace(")", "").replace(/\"/gi, ""), "contain" == t.css("background-size") ? "-/contain/" : "-/cover/"), void 0 === o || -1 === o.indexOf(n) || 0 < o.indexOf(".svg") || 0 < o.indexOf(".gif") || 0 < o.indexOf(".ico") || -1 === o.indexOf("#") || 0 < o.indexOf("-/empty/") && 0 < o.indexOf("-/resizeb/") || (a = o.indexOf(n) + n.length, l = o.indexOf("/", a), 0 < a && 0 < l && (r = o.slice(a, l).split("x"), s = e.clientWidth, d = e.clientHeight, 0 < s && 0 < d && (0 < r[0] || 0 < r[1]) && (0 < r[0] && s > r[0] || 0 < r[1] && d > r[1]) && (0 < r[0] && 100 < s - r[0] || 0 < r[1] && 100 < d - r[1]) && (c = o.slice(0, a) + (0 < r[0] ? s : "") + "x" + (0 < r[1] ? d : "") + o.substring(l), "IMG" == i ? t.attr("src", c) : t.css("background-image", "url(" + c + ")")))))
};